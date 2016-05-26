import { Observable } from 'rx-lite';
import indexBy from 'lodash.indexby';
import filter from 'lodash.filter';


// Emits an array of items, oldest to newest, which grows overtime when new items are approved

import { checkParams, createEndpoint, fetchData } from './utils';

export default function (collectionId, { interval = 5, ...options } = {}) {
  checkParams({ collectionId, interval });

  const endPoint = createEndpoint(collectionId, options);


  const timer$ = Observable.interval(interval * 1000);

  const createRequest$ = () => Observable.fromPromise(
      fetchData(endPoint)
        .then(data => data.reverse())
    );


  // Inital request
  return createRequest$()
    .take(1)

    // Start timer
    .merge(timer$.flatMap(createRequest$))

    // Filter out repeated items
    .scan(({ items, lookup }, latestItems) => {
      const newItems = filter(latestItems, ({ id }) => !lookup[id]);
      return {
        items: items.concat(newItems),
        lookup: { ...lookup, ...indexBy(newItems, 'id') },
      };
    }, { items: [], lookup: {} })

    .map(({ items }) => items)

    // Only emit new data
    .distinctUntilChanged();
}
