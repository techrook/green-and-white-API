import mongoose, { Schema } from "mongoose";

export interface Region extends mongoose.Document {
  name: string;
}

const RegionSchema: Schema<Region> = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const REGION = mongoose.model<Region>("REGION", RegionSchema);

export default REGION;
