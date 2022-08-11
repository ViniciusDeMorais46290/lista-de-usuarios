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

export default function Tarefas(props: any){
    // https://jsonplaceholder.typicode.com/users/ID_DO_USUARIO/posts
    let params = useParams();
    const [posts, setPosts] = useState([
        {id: 1, title: "Bruhh", body: "Aloha"}
        ]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + params.postId + "/posts")
            .then((response) => response.json())
            .then((json) => {setPosts(json)});
    });
    return(
      <Grid container={true} spacing={4} justify="center">
        {posts.map((post) => (
              <Card key={post.id} sx={{ maxWidth: 400, margin: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.pinimg.com/originals/80/a1/b4/80a1b4ea8681264dfc843b51c94e79db.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div"> {post.title} </Typography>
                  <Typography variant="body2" color="text.secondary"> {post.body} </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                </CardActions>
              </Card>
        ))}
      </Grid>
    );
}

