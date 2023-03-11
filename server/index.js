import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fileupload from "express-fileupload";
import cookieParser from "cookie-parser";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import mongoSanitize from "express-mongo-sanitize";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import productsRouter from "./routes/product.route.js";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/error.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// load env vars
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();

const app = express();

// file uploading
app.use(fileupload());

// body parser
app.use(express.json());

app.use(cookieParser());

// sanitize data
app.use(mongoSanitize());

// set security headers
app.use(helmet());

// prevent XSS attacks
app.use(xss());

// enable cors
app.use(cors());

// rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});

app.use(limiter);

// prevent http param pollution
app.use(hpp());

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// mount routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productsRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5500;
const server = app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error ${err.message}`);
  // close server & exit process
  server.close(() => process.exit(1));
});
