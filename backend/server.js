const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const dbPath = "mongodb+srv://dbUser_1:user123@user-db.0gzdi.mongodb.net/user-db?retryWrites=true&w=majority";
const Role = db.role;

db.mongoose
  .connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MEAN-Training." });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
	Role.estimatedDocumentCount((err, count) => {
	  if (!err && count === 0) {
		new Role({
		  name: "user"
		}).save(err => {
		  if (err) {
			console.log("error", err);
		  }
  
		  console.log("added 'user' to roles collection");
		});
	  }
	});
  }