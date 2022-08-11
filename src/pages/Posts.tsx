import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useParams } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Comentarios from "../components/Comentarios";

export default function Tarefas(props: any){
    // https://jsonplaceholder.typicode.com/users/ID_DO_USUARIO/posts
    let params = useParams();
    const [posts, setPosts] = useState([
        {id: 1, title: "Bruhh", body: "Aloha"}
        ]);
    const [coments, setComents] = useState([
      {name: "ee", email: "aa", body: "bode"}
      ]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + params.postId + "/posts")
            .then((response) => response.json())
            .then((json) => {setPosts(json)});
    });

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users/" + params.postId + "/comments")
          .then((response) => response.json())
          .then((json) => {setPosts(coments)});
  });

  // AQUI EU PRECISO PEGAR O ID DOS POSTS QUE VEM DENTRO DO PRIMEIRO USEFFECT, AI DEPOIS DESSA LOROTA EU TENHO QUE SABER QUAL POST TO ACESSANDO PARA PUXAR OS COMENTARIOS PELO ID DO POST REAL, O PRIMEIRO PARAMS.POSTID DEVERIA SER NA VDD USER.ID {TROCAR EM TASK TBM}

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    return(
      <Grid container={true} spacing={4} justify="center">
        {posts.map((post) => (
              <Card key={post.id} sx={{ maxWidth: 400, margin: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.pinimg.com/564x/bb/d5/e4/bbd5e430edf7ebe318e38a03b3f6b7c1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div"> {post.title} </Typography>
                  <Typography variant="body2" color="text.secondary"> {post.body} </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={handleClickOpen} size="small">Comentarios</Button>            
                </CardActions>
              </Card>
        ))}
          <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            {"Comentários"}
          </DialogTitle>
          <DialogContent>
            <DialogContent dividers>
              <List>
                {coments.map((coment) => (
                  <Comentarios name={coment.name} email={coment.email} body={coment.body} ></Comentarios>
                ))}
              </List>
            </DialogContent>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus> Fechar </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    );
}

