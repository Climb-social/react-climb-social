import Rx from 'rx';
import fetchJsonp from 'fetch-jsonp';

const getStream = (collectionId) => {

    const pollRate = 5 * 1000;

    const requestStream = Rx.Observable.just(`http://app.climb.social/api/v1/collections/${collectionId}`);

    const updateStream = Rx.Observable.interval(pollRate).startWith(null);

    const responseStream = updateStream

        .combineLatest(requestStream, (tick, url) => {
            return url;
        })

        .flatMap(baseUrl => {

            const requestUrl = `${baseUrl}`;

            return Rx.Observable.fromPromise(
                fetchJsonp(requestUrl)
                    .then(resp => {
                        return resp.json();
                    })
            );
        });

    return responseStream;
};

const climb = {
    getStream
};

export default climb;
