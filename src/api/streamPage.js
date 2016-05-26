import { Observable } from 'rx-lite';

import { checkParams, createEndpoint, fetchData } from './utils';


// Emits an array of items, new to old, straight from beackend

export default function (collectionId, { interval = 5, ...options } = {}) {
  checkParams({ collectionId, interval });

  const endPoint = createEndpoint(collectionId, options);


  const timer$ = Observable.interval(interval * 1000).startWith(null);

  const createRequest$ = () => Observable.fromPromise(
      fetchData(endPoint)
    );

  // Inital request
  return createRequest$()
    .take(1)
    .merge(timer$.flatMap(createRequest$))
    .distinctUntilChanged();
}
