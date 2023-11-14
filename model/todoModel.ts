import mongoose, { Document, Schema } from "mongoose";
import { iTask } from "../utils/interface";

interface iTaskData extends iTask, Document {}

const doModel = new Schema<iTaskData>(
  {
    task: {
      type: String,
    },
    deadline: {
      type: String,
    },
    Achieved: {
      type: Boolean,
    },
    done: {
      type: String,
      default: "start",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<iTask>("task", doModel);
