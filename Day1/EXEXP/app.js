import express from "express";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Excersice 1

app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on ${process.env.PORT || 3000}`);
});

// app.get("/Homepage", (req, res) => {
//   res.send("<h1>Welcome to Homepage</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1>");
// });

//Excersice 2

// let todos = [
//   { id: 1, task: "clean my room" },
//   { id: 2, task: "Do the laundry" },
//   { id: 3, task: "walk the dog" },
//   { id: 4, task: "feed the cat" },
// ];

//getting all todos
// app.get("/todos", (req, res) => {
//   if (!todos) {
//     return res.status(404).send("Cant find the todos list");
//   }
//   res.json(todos);
// });

// Add a new to-do item

// app.post("/todos/", (req, res) => {
//   const { task } = req.body;
//   const newTask = {
//     id: todos.length + 1,
//     task,
//   };
//   todos.push(newTask);
//   if (!newTask) {
//     return res.status(404).send("Cant add the Task");
//   }
//   res.json(todos);
// });

// Update a to-do item by ID

// app.put("/todos/:id", (req, res) => {
//   const { id } = req.params;
//   const { task } = req.body;
//   const index = todos.findIndex((item) => item.id == id);
//   todos[index] = { ...todos[index], task };
//   if (!todos[index]) {
//     return res.status(404).send("Cant find the task");
//   }
//   res.json(todos);
// });

// Delete a to-do item by ID

// app.delete("/todos/:id", (req, res) => {
//   const { id } = req.params;
//   const indx = todos.findIndex((item) => item.id == id);
//   todos.splice(indx, 1);
//   if (!indx) {
//     return res.status(404).send("Cant delete the Task");
//   }
//   res.json(todos);
// });

//Excersice 3

let books = [
  { id: 1, name: "The Lord of the Rings: The Fellowship of the Ring" },
  { id: 2, name: "Harry Potter and the Chamber of Secrets" },
  { id: 3, name: "The Hitchhiker's Guide to the Galaxy" },
  { id: 4, name: "Brave New World" },
  { id: 5, name: "The Hunger Games" },
];

// Get all books

app.get("/api/books", (req, res) => {
  res.json(books);
});

// Add a new book

app.post("/api/books", (req, res) => {
  const { name } = req.body;
  const newBook = {
    id: books.length + 1,
    name,
  };
  books.push(newBook);
  if (!newBook) {
    return res.status(404).send("Cant add this book ");
  }
  res.json(books);
});
// Update a book by ID
app.put("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const index = books.findIndex((item) => item.id == id);
  books[index] = { ...books[index], name };
  if (!books[index]) {
    return res.status(404).send("I dont have this book in my database");
  }
  res.json(books);
});

// Delete a book by ID
app.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const indx = books.findIndex((item) => item.id == id);
  books.splice(indx, 1);
  if (!indx) {
    return res.status(404).send("Cant delete the selected book");
  }
  res.json(books);
});