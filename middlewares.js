import multer from "multer";
import routes from "./routes";

// 1. multer 객체의 파일 저장경로 설정
// 2. multer 객체의 form 추적속성 설정
export const uploadVideo = multer({ dest: `${routes.upload}${routes.videos}/` })
    .single("videoFile"); 

export const localMiddleware = (req, res, next) => {
    // 여기있는 siteName, routes, user등의 객체들이
    // 모두 response에서 접근가능한 변수들임.
    res.locals.siteName = "WeTube"
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }

    next();
};


