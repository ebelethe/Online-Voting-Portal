import mongoose from "mongoose";

const electionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["draft", "active", "closed"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

const Election = mongoose.model("Election", electionSchema);

export default Election;