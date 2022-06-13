const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dfbloaduq/image/upload/v1655146665/Products-web/no-image_ydc2de.webp'
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    used: {
        type: Boolean,
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        delete ret._id;
        return ret;
      },
    },
  }
)

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
