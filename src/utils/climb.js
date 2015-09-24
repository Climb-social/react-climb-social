/**
 * Created by michele on 23/09/15.
 */

import fetchJsonp from 'fetch-jsonp';

const getFeed = (collectionId) => {
    return fetchJsonp(`http://app.climb.social/api/v1/collections/${collectionId}`)
        .then(resp => {
            return resp.json();
        });
};

const climb = {
    getFeed
};

export default climb;
