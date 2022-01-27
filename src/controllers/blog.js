const { validationResult } = require("express-validator");

exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  // const image = req.body.image
  const body = req.body.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Input value tidak sesuai");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }
  const result = {
    message: "Create blog post success",
    data: {
      post_id: 1,
      title: title,
      image: "imagefile.png",
      body: body,
      created_at: "12/07/2021",
      author: {
        u_id: 1,
        name: "indi",
      },
    },
  };
  res.status(201).json(result);
};
