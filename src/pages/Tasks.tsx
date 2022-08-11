import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useParams } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from '@mui/icons-material/Inbox';
import Checkbox from "@mui/material/Checkbox";

export default function Tarefas(props: any){
    // https://jsonplaceholder.typicode.com/users/ID_DO_USUARIO/posts
    let params = useParams();
    const [tasks, setTasks] = useState([
        {id: 1, title: "Bruhh", completed: "True"}
        ]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + params.tarefaId + "/todos")
            .then((response) => response.json())
            .then((json) => {setTasks(json)});
    });
    return(
      <List>
      {tasks.map((task) => (
          <ListItem key={task.id} disablePadding>
            <ListItem>
              <Checkbox checked={task.completed}/>
              <ListItemText primary={task.title} />
            </ListItem>
          </ListItem>
      ))}
      </List>
    );
}

