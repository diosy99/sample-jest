const addNumber = (req, res) => {
  try {
    const { numA, numB } = req.body;

    if (numA === undefined) {
      const error = new Error('Input numA is mandatory!');
      error.statusCode = 400;
      throw error;
    }

    if (numB === undefined) {
      const error = new Error('Input numB is mandatory!');
      error.statusCode = 400;
      throw error;
    }

    if (typeof(numA) !== 'number' || typeof(numB) !== 'number') {
      const error = new Error('Input must be a number!');
      error.statusCode = 400;
      throw error;
    }

    return res.send({
      data: {
        result: numA + numB
      }
    });
  } catch (err) {
    console.log('[ERR]', 'Basic Controller', { err })
    return res.status(err.statusCode).send({
      error: {
        message: err.message
      }
    });
  }
};

module.exports = {
  addNumber
};
