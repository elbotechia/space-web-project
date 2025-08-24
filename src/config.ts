import multer from "multer";
import mongoose from "mongoose";
import knex from "knex";

// Multer configuration
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "build/public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + "-" + file.originalname);
	}
});
export const upload = multer({ storage });

// Mongoose configuration
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/spaceweb";
export const connectMongoose = async () => {
	try {
		await mongoose.connect(MONGO_URI);
		console.log("MongoDB connected");
	} catch (error) {
		console.error("MongoDB connection error:", error);
	}
};

// Knex configuration
export const db = knex({
	client: "sqlite3",
	connection: {
		filename: "./database/dbespacial.db"
	},
	useNullAsDefault: true
});
