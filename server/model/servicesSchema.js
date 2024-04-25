//still in progress
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  detailDesctiption: {
    type: String,
    required: false,
  },
  skills: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  provider: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("service", serviceSchema);
export default Service;
