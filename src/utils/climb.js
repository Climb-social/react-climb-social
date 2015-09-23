/**
 * Created by michele on 23/09/15.
 */

import fetchJsonp from 'fetch-jsonp';

function getFeed(collectionId) {
    return fetchJsonp(`http://app.climb.social/api/v1/collections/${collectionId}`)
        .then(resp => {
            return resp.json();
        });
}

var climb = {
    getFeed
};

export default climb;