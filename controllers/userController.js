import routes from "../routes";

export const getJoin = (req,res)=> res.render("join",{pageTitle: "join"})
export const postJoin = (req,res)=>
{
    const{
        body: {name,email,password,password2}
    } = req;

    // 패스워드가 다를경우, 400코드 전송
    if(password != password2)
    {
        res.status(400); // 400은 잘못된 요청을 의미함
        res.render("join",{pageTitle: "join"})
    }
    // 패스워드가 같을경우
    else
    {
        // 로그인가능하므로, 로그인시키고 홈으로이동
        res.redirect(routes.home)
    }
}
export const getLogin = (req,res) => res.render("login",{pageTitle: "login"})
export const postLogin = (req,res) =>
{
    res.redirect(routes.home);
}
export const logout = (req,res) => res.render("logout",{pageTitle: "logout"})
export const userDetail = (req,res) => res.render("userDetail",{pageTitle: "User Detail"})
export const editProfile = (req,res) => res.render("editProfile",{pageTitle: "Edit Profile"})
export const changePassword = (req,res) => res.render("changePassword",{pageTitle: "Change Password"})