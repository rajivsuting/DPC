const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors({ origin: "*" }));
const path = require("path");
require("dotenv/config");
const connectDB = require("./db/connectDB");
const eventRouter = require("./routes/eventRouter");
const postRouter = require("./routes/postRouter");
const courseRouter = require("./routes/courseRouter");
const notificationRouter = require("./routes/notificationRouter");
const authRouter = require("./routes/authRouter");
const errorHandler = require("./middleware/errorHandler");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const staffRouter = require("./routes/StaffRouter");
const noticeRouter = require("./routes/noticeBoardRouter");
const studentCornerRouter = require("./routes/studentCornerRouter");
const downloadRouter = require("./routes/downloadDataRouter");
const admissionRouter = require("./routes/admissionRouter");
const departmentRouter = require("./routes/departmentRouter");
const storyRouter = require("./routes/storyRouter");
const blogRouter = require("./routes/blogRouter");
const mentorRouter = require("./routes/mentorRouter");
const studentRouter = require("./routes/studentRouter");

const port = process.env.PORT;

const fileUpload = require("express-fileupload");
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
app.use("/api/event", eventRouter);
app.use("/api/post", postRouter);
app.use("/api/course", courseRouter);
app.use("/api/notification", notificationRouter);
app.use("/api/user/auth", authRouter);
app.use("/api/admin", adminRouter, userRouter);
app.use("/api/staff", staffRouter);
app.use("/api/notice", noticeRouter);
app.use("/api/studentcorner", studentCornerRouter);
app.use("/api/downloaddata", downloadRouter);
app.use("/api/admission", admissionRouter);
app.use("/api/department", departmentRouter);
app.use("/api/blog", blogRouter);
app.use("/api/student", studentRouter);
app.use("/b-u/story", storyRouter);
app.use("/b-u/mentor", mentorRouter);

app.use(errorHandler);

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
connectDB();
app.listen(port, () => {
  console.log(`connection is Live at port no. ${port}`);
});
