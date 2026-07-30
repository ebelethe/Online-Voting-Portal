import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    primaryCandidate: {
      type: String,
      required: [true, "Primary candidate is required"],
      trim: true,
    },

    runningMate: {
      type: String,
      required: [true, "Running mate is required"],
      trim: true,
    },

    party: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Party",
      required: [true, "Party is required"],
    },

    election: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Election",
      required: [true, "Election is required"],
    },

    manifesto: {
      type: String,
      required: [true, "Manifesto is required"],
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

// A party can only have one ticket in an election
candidateSchema.index(
  {
    election: 1,
    party: 1,
  },
  {
    unique: true,
  }
);

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;