import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function App() {
  const [users, setUsers] = useState([
    {id: 1, name: "Bruhh"},
    {id:2, name: "Birô"}
  ]);
  useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json)});
	});
  return (
    <Box sx={{ width: '100%', maxWidth: 720, bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
    <img src="https://i.pinimg.com/originals/80/a1/b4/80a1b4ea8681264dfc843b51c94e79db.jpg" alt=""/>
    <List>
    {users.map((user) => (
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={user.name} />
          </ListItemButton>
        </ListItem>
    ))}
    </List>
    </nav>
    <img src="https://spongebob.fandom.com/wiki/The_Two_Faces_of_Squidward" alt=""/>
  </Box>
  )
}

export default App
