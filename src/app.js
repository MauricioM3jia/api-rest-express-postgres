import Express from "express";
import dotenv from "dotenv";
import { router } from "../src/routes/routes.js";
import { responseError } from "./components/controllers/response.js";
import morgan from "morgan";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerJson from "./swagger.json" assert { type: "json" };



dotenv.config();
const app = Express();
app.use(Express.json());
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerJson));

app.use(cors());

app.use(morgan("dev"));

app.use(router);

app.use(responseError);

export { app };
