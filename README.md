#Ngx-Hacker News
[![Build Status](https://travis-ci.org/alfredoperez/ngx-hn.svg?branch=master)](https://travis-ci.org/alfredoperez/ngx-hn)
###HN PWA Stats
Lighthouse:
91/100

**[Interactive (Emerging Markets)](https://www.webpagetest.org/result/170719_6C_516885162aad27b7ea555a185cc8e6e5/)**: 5.3s  
**[Interactive (Faster 3G)](https://www.webpagetest.org/result/170719_P3_7e023cc654cb5cd8362ab11c427c5c0b/)**: 4.3s

**Framework/UI libraries**: Angular  
**Scaffolding**: Angular CLI  
**Module bundling**: Angular CLI  
**Service Worker**: Application shell with ng-pwa-tools and @angular/service-worker  
**Performance patterns**: Lazy loaded modules  
**Server-side rendering**: None  
**API**: Node-hnapi (unofficial)  
**Hosting**: Firebase with HTTP/2 Server Push  


## Tasks

*ng-app-shell* - Creates the app shell using loading module.
``` 
"ngu-app-shell": "./node_modules/.bin/ngu-app-shell  --module src/app/app.module.ts
                                                      --url /loading 
                                                      --insert-module src/app/loading.module.ts   --out dist/index.html"
```
*ng-sw-manifest* - Creates the ngsw-manifest.json with the routes and service worker configuration.
```
"ngu-sw-manifest": "./node_modules/.bin/ngu-sw-manifest --module src/app/app.module.ts 
                                                          --out dist/ngsw-manifest.json"
```
*ng-firebase-push* - Sets the header with HTTP2 push on the firebase.json.
```
"ngu-firebase-push": "./node_modules/.bin/ngu-firebase-push --module src/app/app.module.ts 
                                                            --out firebase.json --in firebase_config.json"
```       
