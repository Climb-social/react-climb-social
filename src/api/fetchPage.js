import { Observable } from 'rx-lite';

import { checkParams, createEndpoint, fetchData } from './utils';


export default function (collectionId, { interval = 5, ...options } = {}) {
  checkParams({ collectionId, interval });

  const endPoint = createEndpoint(collectionId, options);


  const request$ = Observable.fromPromise(fetchData(endPoint));

  return request$
    .take(1);
}
