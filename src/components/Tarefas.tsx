import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Tarefas(props: any){
    // https://jsonplaceholder.typicode.com/users/ID_DO_USUARIO/posts
    const [users, setUsers] = useState([
        {id: 1, title: "Bruhh"},
        {id:2, title: "Birô"}
        ]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1/todos")
            .then((response) => response.json())
            .then((json) => {setUsers(json)});
    });
    return(
    <List>
    {users.map((user) => (
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={user.title} />
          </ListItemButton>
        </ListItem>
    ))}
    </List>
    );
}