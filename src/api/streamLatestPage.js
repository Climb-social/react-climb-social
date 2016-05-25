import { Observable } from 'rx-lite';

import { checkParams, createEndpoint, fetchData } from './utils';


const streamLatestPage = (collectionId, { interval = 5, ...options } = {}) => {
  checkParams({ collectionId, interval });

  const endPoint = createEndpoint(collectionId, options);


  const timer$ = Observable.interval(interval * 1000).startWith(null);

  const request$ = Observable.fromPromise(fetchData(endPoint));

  return timer$
    .flatMap(request$)
    .distinctUntilChanged();
};


export default streamLatestPage;
