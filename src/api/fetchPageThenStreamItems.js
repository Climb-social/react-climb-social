import { Observable } from 'rx-lite';
import indexBy from 'lodash.indexby';
import filter from 'lodash.filter';

import { checkParams, createEndpoint, fetchData } from './utils';

// Emits an array of items, new to old, and then new items without any duplication

// TODO: Pause timer between requests

export default function (collectionId, { interval = 5, ...options } = {}) {
  checkParams({ collectionId, interval });

  const endPoint = createEndpoint(collectionId, options);


  const timer$ = Observable.interval(interval * 1000);

  const createRequest$ = () => Observable.fromPromise(fetchData(endPoint));

  // Inital request
  return createRequest$()
    .take(1)

    // Start timer
    .merge(timer$.flatMap(createRequest$))

    // Filter out repeated items
    .scan(({ previous }, newest) => {
      const current = filter(newest, ({ id }) => !previous[id]);
      return { current, previous: { ...previous, ...indexBy(current, 'id') } };
    }, { previous: {}, current: [] })
    .map(({ current }) => current)

    // Only emit new data
    .distinctUntilChanged();
}
