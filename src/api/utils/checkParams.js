
const checkParams = ({ collectionId, interval }) => {
  if (!collectionId) {
    throw new Error('Please specify a collectionId');
  }

  if (typeof(interval) !== 'number') {
    throw new Error(`
      Polling interval should be a positive integer.
      A ${typeof(interval)} was provided.
    `);
  }

  if (interval <= 0) {
    throw new Error(`Polling interval should be a positive integer. ${interval} was specified.`);
  }
};

export default checkParams;
