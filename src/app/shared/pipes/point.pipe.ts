import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'point',
  pure: true
})
export class PointPipe implements PipeTransform {
  transform(point: number): string {
    if ( point > 0 ) {
      const st = point === 1 ? 'point' : 'points';
      return `${point} ${st}`;
    }
    return 'points';
  }
}
