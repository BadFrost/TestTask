import React from 'react';
import clsx from 'clsx';
import { Container, makeStyles, Button, IconButton, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@material-ui/core';
import { Menu, Home, ViewList, Add, ListAlt } from '@material-ui/icons';
import history from '../src/history';
import Logo from '../public/images/logo.png';

const useStyles = makeStyles((theme) => ({
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
    formContainer: {
        position: 'absolute',
        width: '40%',
        height: '85%',
        top: '17%',
        left: '30%'
    },
    formTitle: {
        position: 'absolute',
        width: '10%',
        height: '7%',
        top: '10%',
        left: '45%'
    },
    title: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '0%',
        left: '5%'
    },
    socket: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '7%',
        left: '5%'
    },
    processorFamily: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '14%',
        left: '5%'
    },
    cores: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '21%',
        left: '5%'
    },
    gen: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '28%',
        left: '5%'
    },
    internalGraphics: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '35%',
        left: '5%'
    },
    internalClockSpeed: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '42%',
        left: '5%'
    },
    cash: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '49%',
        left: '5%'
    },
    price: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '56%',
        left: '5%'
    },
    id: {
        position: 'absolute',
        width: '90%',
        height: '4%',
        top: '63%',
        left: '5%'
    },
    save: {
        position: 'absolute',
        backgroundColor: '#4557d1',
        color: '#ffffff',
        width: '30%',
        height: '7%',
        top: '75%',
        left: '35%'
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
}));

export let AddItems = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({ right: false });
    const [title, setTitle] = React.useState('');
    const [socket, setSocket] = React.useState('');
    const [processorFamily, setProcessorFamily] = React.useState('');
    const [cores, setCores] = React.useState('');
    const [gen, setGen] = React.useState('');
    const [internalGraphics, setInternalGraphics] = React.useState('');
    const [internalClockSpeed, setInternalClockSpeed] = React.useState('');
    const [cash, setCash] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const [id, setId] = React.useState('');

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
            <ListItem button onClick={() => history.push('/')}>
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
            <ListItem button>
                <ListItemIcon><Add /></ListItemIcon>
                <ListItemText primary='Add' />
            </ListItem>
          </List>
        </div>
    );

    let saveItem = () => {
        let item = {
            title: title,
            soket: socket,
            processorFamily: processorFamily,
            cores: cores,
            gen: gen,
            internalGraphics: internalGraphics,
            internalClockSpeed: internalClockSpeed,
            cash: cash,
            price: price,
            id: id
        };
        
        localStorage.setItem(id, JSON.stringify(item));
        history.push('/catalogAll');
    };

    return (
        <Container>
            <Container maxWidth={false} className={classes.header}>
                <Container className={classes.logoDiv}>
                    <img src={Logo} component="img" className={classes.logo} />
                </Container>
                <Button onClick={() => history.push('/')} className={classes.homeBtn}>
                    HOME
                </Button>
                <Button onClick={() => history.push('/catalog')} className={classes.catalogBtn}>
                    CATALOG
                </Button>
                <Button disabled={true} className={classes.addItemsBtn}>
                    ADD ITEMS
                </Button>
                <IconButton onClick={toggleDrawer('right', true)} className={classes.menuBtn}>
                    <Menu fontSize="default" />
                </IconButton>
                <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
                    {list('right')}
                </Drawer>
            </Container>
            <Container className={classes.formTitle}>
                <Typography gutterBottom variant="h6" align='center'>ADD ITEM</Typography>
            </Container>
            <Container className={classes.formContainer}>
                <TextField className={classes.title} label="Title" onChange={title => setTitle(title.target.value)} />
                <TextField className={classes.socket} label="Socket" onChange={socket => setSocket(socket.target.value)} />
                <TextField className={classes.processorFamily} label="Processor Family" onChange={processorFamily => setProcessorFamily(processorFamily.target.value)} />
                <TextField className={classes.cores} label="Cores" onChange={cores => setCores(cores.target.value)} />
                <TextField className={classes.gen} label="Generation" onChange={gen => setGen(gen.target.value)} />
                <TextField className={classes.internalGraphics} label="Internal Graphics" onChange={internalGraphics => setInternalGraphics(internalGraphics.target.value)} />
                <TextField className={classes.internalClockSpeed} label="Internal Clock Speed" onChange={internalClockSpeed => setInternalClockSpeed(internalClockSpeed.target.value)} />
                <TextField className={classes.cash} label="3 Level Cash" onChange={cash => setCash(cash.target.value)} />
                <TextField className={classes.price} label="Price" onChange={price => setPrice(Number(price.target.value))} />
                <TextField className={classes.id} label="ID" onChange={id => setId(id.target.value)} />
                <Button className={classes.save} onClick={() => saveItem()}>
                    SAVE
                </Button>
            </Container>
        </Container>
    );
};