import jsonp from 'jsonp';


const fetchData = (endPoint) =>
  new Promise((resolve, reject) =>
    jsonp(endPoint, (err, data) => (err ? reject(err) : resolve(data)))
  );


// const data = require('../../dummyData.json');

// const fetchData = (endPoint) =>
//   new Promise(resolve => setTimeout(() => resolve(data), 2000));


export default fetchData;
