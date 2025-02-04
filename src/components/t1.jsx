import { useState } from "react";
import { Container, List, Typography, Paper } from "@mui/material";
import TodoInput from "./todo";
import TodoItem from "./todolist";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          To-Do List
        </Typography>
        <TodoInput addTask={addTask} />
        <List>
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              index={index}
              toggleComplete={toggleComplete}
              removeTask={removeTask}
            />
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default App;
