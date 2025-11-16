import mongoose from "mongoose";

export const connectDB = async () => {
  if (process.env.NODE_ENV === "test") {
    console.log("Skipping DB connection during tests");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected ✅");
  } catch (err) {
    console.error("Database connection error ❌", err);
    process.exit(1);
  }
};
