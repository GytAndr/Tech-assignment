const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

app.post("/log", (req, res) => {
	const postData = req.body;
	console.log(postData);
	res.send("Request logged successfully");
});
