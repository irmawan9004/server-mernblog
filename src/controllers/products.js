exports.createProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;

  return res.json({
    message: "Create Prodcut",
    data: {
      id: 1,
      name: name,
      price: price,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  return res.json({
    message: "get ALl Prodcut",
    data: [
      {
        id: 1,
        name: "sari",
        price: 2000,
      },
    ],
  });
  next();
};
