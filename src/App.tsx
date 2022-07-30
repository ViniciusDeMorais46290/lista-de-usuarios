import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Info from './components/Info';
import Tarefas from './components/Tarefas';


function App() {

  const [users, setUsers] = useState([
    {id: 1, name: "Bruhh"},
    {id:2, name: "Birô"}
  ]);
  const [id, setId] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  function handleOpen(a?: any){
    setOpen(true);
    setId(a);
  }
  const handleClose = () => setOpen(false);
  

  useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json)});
	});
  return (
    <Box sx={{ width: '100%', maxWidth: 720, bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
    <img src="https://i.pinimg.com/originals/80/a1/b4/80a1b4ea8681264dfc843b51c94e79db.jpg" alt=""/>
    

    <Info open={open} handleClose={handleClose}>
    <Tarefas id={id}></Tarefas>
    </Info>
    
    <List>
    {users.map((user) => (
        <ListItem key={user.id} disablePadding>
          <Button onClick={() => {handleOpen(user.id)}}>Ver tarefias</Button>
          <ListItemText primary={user.name} />
        </ListItem>
    ))}
    </List>
    </nav>
    <img src="https://spongebob.fandom.com/wiki/The_Two_Faces_of_Squidward" alt=""/>
  </Box>
  )
}

export default App
