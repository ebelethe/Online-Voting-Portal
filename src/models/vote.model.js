import mongoose from "mongoose";

const voteSchema = new mongoose.Schema(
  {
    voter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    election: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Election",
      required: true,
    },

    party: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Party",
      required: true,
    },

    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent a voter from voting twice in the same election
voteSchema.index(
  {
    voter: 1,
    election: 1,
  },
  {
    unique: true,
  }
);

const Vote = mongoose.model("Vote", voteSchema);

export default Vote;