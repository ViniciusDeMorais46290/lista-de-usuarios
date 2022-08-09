import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Tarefas(props: any){
    // https://jsonplaceholder.typicode.com/users/ID_DO_USUARIO/posts

    const [tasks, setTasks] = useState([
        {id: 1, title: "Bruhh"},
        {id:2, title: "Birô"}
        ]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + "3" + "/todos")
            .then((response) => response.json())
            .then((json) => {setTasks(json)});
    });
    return(
        <List>
        {tasks.map((task) => (
            <ListItem key={task.id} disablePadding>
            <ListItemButton>
                <ListItemText primary={task.title} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
    );
}

