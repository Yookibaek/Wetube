import "./db";
import app from "./app";
require("dotenv").config();
import "./models/Video";


const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));