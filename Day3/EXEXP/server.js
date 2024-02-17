import express from "express";
import router from "./routes/PostsRouter.js";
import posts_router from "./routes/PostsRouter.js";
const app = express();

app.use(router);
app.use(posts_router);

app.listen(process.env.PORT || 3002, () => {
  console.log(`Running on ${process.env.PORT || 3002}`);
});