import fetchJsonp from 'fetch-jsonp';

const fetchData = (
  endPoint, { timeout = 10000 } = {}
) => fetchJsonp(endPoint, { timeout }).then(resp => resp.json());

export default fetchData;
