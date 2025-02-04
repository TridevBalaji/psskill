import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import TodoItem from "./todolist";

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Box display="flex" gap={2} mb={2}>
      <TextField
        fullWidth
        label="Add a new task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
      <TodoItem/>
    </Box>
  );
};

export default TodoInput;
