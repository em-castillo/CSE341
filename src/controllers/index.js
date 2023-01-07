returnData = (req, res) => {
    const data =
      'Sarah Birch';
    res.status(200).send(data);
  };

module.exports = {
    returnData,
  };