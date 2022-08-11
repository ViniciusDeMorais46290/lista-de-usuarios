import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useParams } from "react-router-dom";

export default function Tarefas(props: any){
    // https://jsonplaceholder.typicode.com/users/ID_DO_USUARIO/posts
    let params = useParams();
    const [posts, setPosts] = useState([
        {id: 1, title: "Bruhh"},
        {id:2, title: "Birô"}
        ]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + params.postId + "/posts")
            .then((response) => response.json())
            .then((json) => {setPosts(json)});
    });
    return(
      <List>
      {posts.map((post) => (
          <ListItem key={post.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={post.title} />
            </ListItemButton>
          </ListItem>
      ))}
      </List>
    );
}

