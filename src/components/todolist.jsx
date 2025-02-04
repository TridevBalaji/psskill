import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ task, index, toggleComplete, removeTask }) => {
  if (!task) return null; // Prevents undefined error

  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={() => toggleComplete(index)} />
      <ListItemText
        primary={task.text}
        sx={{ textDecoration: task.completed ? "line-through" : "none" }}
      />
      <IconButton edge="end" onClick={() => removeTask(index)} color="error">
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
