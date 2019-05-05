import mongoose from "mongoose";

// 우리는 video를 db에 저장하지않는다. 대신 file의 url을 저장.
// 아마존에 저장한다는 말이지. 
// db에저장하면 db가너무 무거워진데
const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required" // url에 없는걸 요청받았을때
    },
    title: {
        type:String,
        required: "Title is required"
    },
    description: String,
    views:{
        type:Number,
        default: 0
    },
    createdAt:{
        type:Date,
        default: Date.now,  // 이건 function임. document저장할때마다 이 function실행시켜 값을 저장한다는것.
    },
    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment" // Comment테이블에서 위의 id를 가져온다 라는것임.
    }]
});

const model = mongoose.model("Video", VideoSchema);
export default model;

