import express from "express";
import cros from 'cors';
import cookieParser from "cookie-parser";
import userRouter from './routes/user.route.js';

const app = express();

app.use(cros({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(express.static("public"))

app.use(cookieParser());


app.use("/api/v1/users", userRouter);


export {app}