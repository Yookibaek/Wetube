import routes from "./routes";

export const localMiddleware = (req,res,next)=>{
    // 여기있는 siteName, routes, user등의 객체들이
    // 모두 response에서 접근가능한 변수들임.
res.locals.siteName = "WeTube"
res.locals.routes = routes;
res.locals.user = {
    isAuthenticated : true,
    id:1
}
next();
};