import { Posts } from "./models/Post.model";

const express = require("express");
const app = express();

app.post("/post", async function (_req: any, _res: any) {
  try {
    const { title, content } = _res.body;
    const response = await Posts.create({
      title,
      content,
    });
    console.log({ response });
  } catch (error) {
    console.log({ error });
  }
});

app.get("/post", function (_req: any, _res: any) {
  console.log("post");
});

app.listen(5000, function () {
  console.log("server connected");
});
