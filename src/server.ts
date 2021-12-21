import express from "express";
import "express-async-errors";
import "reflect-metadata";
import { router } from "./routes";
import "./database";
import { Response, Request } from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use((err: Error, request:Request, response:Response) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });
    }
        return response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    
})

app.listen(3001, () => console.log("Server is running"));