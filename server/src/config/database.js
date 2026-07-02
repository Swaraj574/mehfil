import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(error); // print the complete error object
    process.exit(1);
  }
};

export default connectDatabase;