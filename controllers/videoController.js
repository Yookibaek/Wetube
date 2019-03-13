export const home = (req,res)=> res.render("home") // views폴더에서 제목이 home이고 확장자가 pug인놈을 찾아줌.
export const search = (req,res) => res.send("search")
export const videos = (req,res) => res.send("Videos")
export const upload = (req,res) => res.send("Upload")
export const videoDetail = (req,res) => res.send("Video Detail")
export const editVideo = (req,res) => res.send("Edit Video")
export const deleteVideo = (req,res) => res.send("Delete Video")