import routes from "../routes";     
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  }
  catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// videos/upload
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" })
}
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  
  // save
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(`새로운 비디오 저장!:${newVideo}`);

  // 비디오 상세 페이지로 안내
  res.redirect(routes.videoDetail(newVideo.id))
}

// videos/:id
export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const video = await Video.findById(id)
    res.render("videoDetail", { pageTitle: video.title, video })
  }
  catch (error) {
    res.redirect(routes.home);
  }

}

// videos/:id/edit
export const getEditVideo = async (req, res) => {
  // 여기 id는 routes의 function에서 :id에 해당하는 부분이다.
  const {
    params: { id }
  } = req;

  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}` , video})
  }
  catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
}
export const postEditVideo = async (req, res) => {
  const {
    params:{id},
    body: {title, description}
  } = req;
  try{
    await Video.findOneAndUpdate({_id:id},{title, description});
    res.redirect(routes.videoDetail(id));
  } catch (error){
    res.redirect(routes.home);
  }
}
export const deleteVideo = async (req, res) => {
  const{
    params:{id}
  } = req;

  try{
    await Video.findOneAndRemove({_id:id});
    console.log("delete 성공!");
  } catch(error){
    console.log(error);
  }
  res.redirect(routes.home);
  
}