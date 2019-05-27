import bodyParser from "body-parser";
import cors from"cors";
import cookieParser from "cookie-parser";
import forceHttpsMiddleware from './forceHttpsMiddleware';
import { getEnv } from "../config/index";

export const initMiddlewares = (app) => {
    app.use(cors());
    app.use(bodyParser.json({ limit: "20mb" }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: "20mb"
      })
    );
    app.use(cookieParser());
    if (getEnv() === 'production') {
      app.use(forceHttpsMiddleware);
    }
    require('./commonMiddleware')(app)
}
