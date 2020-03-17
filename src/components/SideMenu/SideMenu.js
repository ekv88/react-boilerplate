import React from 'react';
import { withRouter } from "react-router";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const SideMenu = ({history: { push }, active}) =>
    <div>
        {[{url: "/home", label: "Home", icon: <HomeIcon/> },
         {url: "/about", label: "About us", icon: <InfoIcon/> }]
            .map(({url, label, id, icon}, key) =>
                        <ListItem button onClick={()=> push(url)} key={'side-menu-' + key}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>)}
    </div>;

export default withRouter(SideMenu);