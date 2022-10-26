const express = require("express");
const cors = require("cors");
require("dotenv").config();
const courses = require("./data/courses.json");
const categories = require("./data/categories.json");
const app = express();

app.use(cors());

app.get("/courses", (req, res) => {
	console.log(courses.length);
	res.send(courses);
});
app.get("/courses/:categoryName", (req, res) => {
	const categoryName = req.params.categoryName;
	const filteredCourses = courses.filter(
		(course) => course.category === categoryName
	);
	res.send(filteredCourses);
});
app.get("/categories", (req, res) => {
	console.log(categories.length);
	res.send(categories);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("Learn web running on port", port);
});
