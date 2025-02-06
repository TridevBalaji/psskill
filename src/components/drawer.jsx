import { useState } from "react";
import { Drawer, Button, List, ListItem, ListItemText } from "@mui/material";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
