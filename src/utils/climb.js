import Rx from 'rx';
import fetchJsonp from 'fetch-jsonp';

const getFeed = (collectionId) => {

    const pollRate = 30 * 1000; // 30 seconds

    let min_id = 0;

    const requestStream = Rx.Observable.just(`http://app.climb.social/api/v1/collections/${collectionId}`);

    const updateStream = Rx.Observable.interval(pollRate).startWith(null);

    const responseStream = updateStream

        .combineLatest(requestStream, (tick, url) => {
            return url;
        })

        .flatMap(function (baseUrl) {

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
    getFeed
};

export default climb;
