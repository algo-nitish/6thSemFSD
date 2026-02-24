const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// ✅ Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// ✅ Only image filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images allowed"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// ✅ Image Upload Route
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "Image uploaded successfully",
    file: req.file,
  });
});


// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

app.get("/about", (req, res) => {
  res.send("This is My About page");
});


app.listen(PORT, () => {
  console.log(`Server is at http://localhost:${PORT}`);
});
