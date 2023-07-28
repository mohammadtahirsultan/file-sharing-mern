import express from "express";
import { config } from "dotenv";
const app = express();
import cors from "cors";
import fileRoute from './routes/file.js'
config({ path: "./config.env" });


// using Middlewares
app.use(cors(
    {
        origin: "https://uploaddownload.netlify.app"
    }
));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/v1", fileRoute);

export default app;
