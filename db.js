// const mongoose = require("mongoose");

// // module.exports = () => {
// // 	const connectionParams = {
// // 		useNewUrlParser: true,
// // 		useUnifiedTopology: true,
// // 	};
// // 	try {
// // 		mongoose.connect(process.env.DB, connectionParams);
// // 		console.log("Connected to database successfully");
// // 	} catch (error) {
// // 		console.log(error);
// // 		console.log("Could not connect database!");
// // 	}
// // };
// mongoose.connect("mongodb://127.0.0.1:27017/expense_tracker")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//   });