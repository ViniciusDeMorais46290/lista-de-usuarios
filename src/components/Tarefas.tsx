import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Tarefas(props: any){
    
    const [users, setUsers] = useState([
        {id: 1, name: "Bruhh"},
        {id:2, name: "Birô"}
        ]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then((response) => response.json())
            .then((json) => {setUsers(json)});
    });
    return(
    <List>
    {users.map((user) => (
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={user.name} />
          </ListItemButton>
        </ListItem>
    ))}
    </List>
    );
}