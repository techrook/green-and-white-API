import mongoose, { Schema, Types } from "mongoose";

export interface State extends mongoose.Document {
  name: string;
  capital: string;
  LGA: string[];
  latitude: number;
  longitude: number;
  region: Types.ObjectId;
  number_of_LGA: number;
}

const StateSchma: Schema<State> = new Schema({
  name: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  LGA: [
    {
      type: String,
      required: true,
    },
  ],
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "REGION",
  },
  number_of_LGA: {
    type: Number,
    required: true,
  },
});

const STATE = mongoose.model<State>("STATE", StateSchma);

export default STATE;
