import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
}));

const DogCard = ({name, about, image, alt = "Dog image"}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar alt={alt} src={image} className={classes.avatar} />
        </div>
    );
};

export default DogCard;