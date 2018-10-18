import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'unfetch/polyfill'
import { map } from  'rxjs/operators';

import { Story } from '../models/story';
import { User } from '../models/user';
import { PollResult } from '../models/poll-result';

// wrap fetch in observable so we can keep it chill
@Injectable()
export class HackerNewsAPIService {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  public fetchFeed(feedType: string, page: number): Observable<Story[]> {
    return <Observable<Story[]>>lazyFetch(`${this.baseUrl}/${feedType}?page=${page}`);
  }

  public fetchItemContent(id: number): Observable<Story> {
    return lazyFetch(`${this.baseUrl}/item/${id}`)
      .pipe(map((story: Story) => {
        if ( story.type === 'poll' ) {
          const numberOfPollOptions = story.poll.length;
          story.poll_votes_count = 0;
          for ( let i = 1; i <= numberOfPollOptions; i++ ) {
            this.fetchPollContent(story.id + i)
              .subscribe(pollResults => {
                story.poll[i - 1] = pollResults;
                story.poll_votes_count += pollResults.points;
              });
          }
        }
        return story;
      }));
  }

  public fetchPollContent(id: number): Observable<PollResult> {
    return <Observable<PollResult>>lazyFetch(`${this.baseUrl}/item/${id}`);
  }

  public fetchUser(id: string): Observable<User> {
    return <Observable<User>>lazyFetch(`${this.baseUrl}/user/${id}`);
  }
}

function lazyFetch(url, options?) {
  return new Observable(fetchObserver => {
    let cancelToken = false;
    fetch(url, options)
      .then(res => {
        if ( !cancelToken ) {
          return res.json()
            .then(data => {
              fetchObserver.next(data);
              fetchObserver.complete();
            });
        }
      }).catch(err => fetchObserver.error(err));
    return () => {
      cancelToken = true;
    };
  });
}

