import mongoose from "mongoose";

// Define the purchase schema
const purchaseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productDetail: {
    type: Object,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create a model from the schema
const Purchase = mongoose.model("Purchase", purchaseSchema);

// Export the Purchase model
export default Purchase;
