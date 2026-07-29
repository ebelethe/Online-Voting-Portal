import mongoose from "mongoose";

const partySchema = new mongoose.Schema(
  {
    partyName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    acronym: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      unique: true,
    },

    logo: {
      type: String,
      default: "",
    },

    slogan: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Party = mongoose.model("Party", partySchema);

export default Party;