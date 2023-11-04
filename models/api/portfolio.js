const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema(
  {
  name: {type: String},
  link: {type: String},
  }
)

const portfolioItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    applicationLink: linkSchema,
    repository: linkSchema,
    image: {type: String},
    otherLinks: [linkSchema],
    categories: [{ type: String }],
    technologies_used: [{ type: String }],

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Portfolio Item", portfolioItemSchema);
