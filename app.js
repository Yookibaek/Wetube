import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import { localMiddleware } from "./middlewares";

import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

import routes from "./routes"

const app = express();

// Middlewares
app.use(helmet());      // 보안
app.set("view engine", "pug");  // 뷰 템플릿으로 pug 사용
app.use("/uploads", express.static("uploads")); 
app.use(cookieparser()); // 서버가 유저로부터 받은 쿠키 이해하는 방법
app.use(bodyparser.urlencoded({ extended: true }));   // 서버가 유저로부터 받은 바디 이해하는 방법
app.use(bodyparser.json());   // 서버가 유저로부터 받은 바디 이해하는 방법
app.use(morgan("dev"));  // 접속자 로깅 기능
app.use(localMiddleware);   // response 객체가 사용가능한 지역변수들 선언해주기

// Routers
app.use(routes.home, globalRouter);      // /
app.use(routes.users, userRouter);       // /users/
app.use(routes.videos, videoRouter);     // /videos/

export default app;