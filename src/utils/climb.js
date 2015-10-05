import Rx from 'rx';
import fetchJsonp from 'fetch-jsonp';

const getStream = (collectionId) => {

    const pollRate = 5 * 1000;

    let min_id = 0;

    const requestStream = Rx.Observable.just(`http://app.climb.social/api/v1/collections/${collectionId}`);

    const updateStream = Rx.Observable.interval(pollRate).startWith(null);

    const responseStream = updateStream

        .combineLatest(requestStream, (tick, url) => {
            return url;
        })

        .flatMap(baseUrl => {

            const requestUrl = `${baseUrl}?min_id=${min_id}`;

            return Rx.Observable.fromPromise(
                fetchJsonp(requestUrl)
                    .then(resp => {
                        return resp.json();
                    })
            );
        });

    const itemStream = responseStream

        .flatMap(itemList => {

            if (itemList.length > 0) {
                min_id = itemList[0].id;
            }

            return Rx.Observable.fromArray(itemList);
        });

    return itemStream;
};

const climb = {
    getStream
};

export default climb;
