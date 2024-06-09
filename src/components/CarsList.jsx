import React from 'react'
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';

function CarsList({cars = [],
    deleteHandler = () => console.log('No deleteHandler provided to Cars List'), 
}) {
    return (
        <List>
            {cars.map(({ name, bhp, avatar_url, _id }, i) => (
                <ListItem key={i}>
                    <ListItemAvatar>
                        <Avatar alt="" src={avatar_url} />
                    </ListItemAvatar>
                    <ListItemText>
                        {name} (BHP: {bhp})
                    </ListItemText>
                    <IconButton
                        aria-label="update"
                        to={`/update/${_id}`}
                        component={Link}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => deleteHandler(_id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    )
}

export default CarsList