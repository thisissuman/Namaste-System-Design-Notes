import express from "express"; // import express
import bodyParser from "body-parser";
const app = express(); // get the instace of the express
app.use(bodyParser.json());
app.all("/", (req, res) => {
  // our goal is to get response,  you make any kind of request to this path, it give two value, req an res

  res.send(`I'm UP na`); // response is there in res, so we just need to send it.
});

const todos = [
  {
    id: 1,
    task: "Task 1",
    completed: true,
    deleted: true,
  },
  {
    id: 2,
    task: "Task 2",
    completed: false,
    deleted: false,
  },
];

// READ
app.get("/todos", (req, res) => {
  res.send(todos); // when we redirec to todos path it will fetch todo result.
});

// CREATE
app.post("/todos", (req, res) => {
  const newtodo = req.body;
  todos.push(newtodo);
  res.json({
    message: "New todo created",
  });
});

// UPDATE
app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoParamId = req.params.id;
  console.log("Param ID", todoParamId);

  console.log(todos.findIndex((td) => td.id == 1));

  const todoIndex = todos.findIndex((td) => td.id === todoParamId - 1);
  console.log("Todo Index", todoIndex);
  if (todoIndex !== -1) {
    console.log("hey");

    todos[todoIndex] = {
      id: todoParamId,
      ...newTodoData,
    };
  }
  // console.log(todos);
  res.json({
    message: "Todod updated successfully",
  });
});

// Delete
app.delete("/todos/:id", (req, res) => {
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  // console.log(todos);
  res.json({
    message: "Todod deleted successfully",
  });
});

const PORT = 5111;
app.listen(PORT, () => {
  // listen the server and start the server
  console.log(`Hi, your sevre is running in the port ${PORT}`);
});
