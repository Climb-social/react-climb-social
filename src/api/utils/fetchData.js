import fetchJsonp from 'fetch-jsonp';

// curate.vm-08.graph.uk can take more than 10s to respond
const defaultTimeout = 12000;

const fetchData = (
  endPoint, { timeout = defaultTimeout } = {}
) => fetchJsonp(endPoint, { timeout }).then(resp => resp.json());


// const data = require('../../dummyData.json');

// const fetchData = (
//   endPoint, { timeout = defaultTimeout } = {}
// ) => new Promise(resolve => setTimeout(() => resolve(data), 2000));


export default fetchData;
