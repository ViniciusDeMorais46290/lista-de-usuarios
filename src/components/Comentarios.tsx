import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

function Comentarios(props: any){
    return(
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt={props.email}/>
            </ListItemAvatar>
            <ListItemText
            primary={props.name}
            secondary={
                <Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                </Typography>
                {props.body}
                </Fragment>
            }
            />
        </ListItem>
    );
}

export default Comentarios;