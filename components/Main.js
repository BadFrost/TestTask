import React from "react";
import clsx from 'clsx';
import { Container, makeStyles, Button, IconButton, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Menu, Home, ViewList, Add, ListAlt } from '@material-ui/icons';
import Logo from "../public/images/logo.png";
import Wallpaper from '../public/images/intel_wallpaper.jpg'
import history from "../src/history";

const useStyles = makeStyles({
    header: {
        position: 'absolute',
        background: '#ffffff',
        width: '100%',
        height: '6%',
        top: '0px',
        left: '0px'
    },
    logoDiv: {
        position: 'absolute',
        background: '#4557d1',
        width: '6%',
        height: '100%',
        left: '0px'
    },
    logo: {
        position: 'absolute',
        width: '65%',
        height: '70%',
        left: '15%',
        top: '15%'
    },
    homeBtn: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        color: '#4557d1',
        width: '6%',
        height: '100%',
        left: '6%',
        borderRadius: '0px',
    },
    catalogBtn: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        color: '#4557d1',
        width: '6%',
        height: '100%',
        left: '12%',
        borderRadius: '0px'
    },
    addItemsBtn: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        color: '#4557d1',
        width: '6%',
        height: '100%',
        left: '18%',
        borderRadius: '0px'
    },
    menuBtn: {
        position: 'absolute',
        top: '5%',
        right: '1%',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    imgContainer: {
        position: 'absolute',
        width: '100%',
        height: '80%',
        top: '10%',
        left: '0%'
    },
    wallpaper: {
        position: 'absolute',
        width: '146%',
        height: '100%'
    },
    sign: {
        position: 'absolute',
        width: '60%',
        height: '5%',
        top: '93%',
        left: '10%'
    }
});

export let Main = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({ right: false });

    let toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    let list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem button>
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary='Home' />
            </ListItem>
            <ListItem button onClick={() => history.push('/catalog')}>
                <ListItemIcon><ViewList /></ListItemIcon>
                <ListItemText primary='Catalog' />
            </ListItem>
            <ListItem button onClick={() => history.push('/catalogAll')}>
                <ListItemIcon><ListAlt /></ListItemIcon>
                <ListItemText primary='Catalog All' />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => history.push('/addItems')}>
                <ListItemIcon><Add /></ListItemIcon>
                <ListItemText primary='Add' />
            </ListItem>
          </List>
        </div>
    );

    return (
        <Container>
            <Container maxWidth={false} className={classes.header}>
                <Container className={classes.logoDiv}>
                    <img src={Logo} component="img" className={classes.logo} />
                </Container>
                <Button disabled={true} className={classes.homeBtn}>
                    HOME
                </Button>
                <Button onClick={() => history.push('/catalog')} className={classes.catalogBtn}>
                    CATALOG
                </Button>
                <Button onClick={() => history.push('/addItems')} className={classes.addItemsBtn}>
                    ADD ITEMS
                </Button>
                <IconButton onClick={toggleDrawer('right', true)} className={classes.menuBtn}>
                    <Menu fontSize="default" />
                </IconButton>
                <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
                    {list('right')}
                </Drawer>
            </Container>
            <Container className={classes.imgContainer}>
                <img src={Wallpaper} component="img" className={classes.wallpaper} />
            </Container>
            <Typography gutterBottom variant="h6" className={classes.sign}>by VALENTYN KUZNETSOV</Typography>
        </Container>
    );
};