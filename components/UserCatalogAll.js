import React from 'react';
import clsx from 'clsx';
import { Container, makeStyles, Button, ButtonBase, Paper, Grid, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu, Home, ViewList, ListAlt } from '@material-ui/icons';
import lodash from 'lodash';
import Logo from "../public/images/logo.png";
import img from '../public/images/processor.png'
import history from "../src/history";

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
    gridContainer: {
        position: 'absolute',
        width: '60%',
        top: '10%',
        left: '1%'
    },
    grid: {
        width: '90%'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        height: '90%'
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    info: {
        position: 'absolute',
        background: '#ffffff',
        width: '20%',
        height: '17%',
        top: '10%',
        right: '1%',
        padding: '1%'
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
}));

export let UserCatalogAll = () => {
    const classes = useStyles();
    const [data, setData] = React.useState(lodash.without(lodash.values(localStorage), 'INFO').map(JSON.parse));
    const [priceAll, setPrice] = React.useState(lodash.sumBy(data, 'price'));
    const [middlePrice, setMiddlePrice] = React.useState((priceAll / data.length).toFixed(2));
    const [state, setState] = React.useState({ right: false });

    let removeAll = () => {
        setData(localStorage.clear());
        setPrice(0);
        setMiddlePrice(0);
    };

    let toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    let remove = (id) => {
        localStorage.removeItem(id);
        window.location.reload(false);
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
            <ListItem button>
                <ListItemIcon><ViewList /></ListItemIcon>
                <ListItemText primary='Catalog' />
            </ListItem>
            <ListItem button>
                <ListItemIcon><ListAlt /></ListItemIcon>
                <ListItemText primary='Catalog All' />
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
                <Button onClick={() => history.push('/')} className={classes.homeBtn}>
                    HOME
                </Button>
                <Button onClick={() => history.push('/catalog')} className={classes.catalogBtn}>
                    CATALOG
                </Button>
                <IconButton onClick={toggleDrawer('right', true)} className={classes.menuBtn}>
                    <Menu fontSize="default" />
                </IconButton>
                <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
                    {list('right')}
                </Drawer>
            </Container>
            <Container maxWidth={false} className={classes.gridContainer}>
                <Grid container spacing={3}>
                    {data.map(item => (
                        <Grid item key={item.id}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={img} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">{item.title}</Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Тип разъема: {item.socket}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Семейство процессора: {item.processorFamily}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Количество ядер: {item.cores}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Поколение процессора Intel: {item.gen}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Интегрированная графика: {item.internalGraphics}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Внутренняя тактовая частота: {item.internalClockSpeed}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Объем кэш памяти 3 уровня: {item.cash}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    ID: {item.id}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1">${item.price}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container maxWidth={false} className={classes.info}>
                <Typography gutterBottom variant="h6">Info:</Typography>
                <Typography variant="body2" gutterBottom>
                    • Общее кол-во товаров: {data.length}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    • Сумма цен всех товаров: ${priceAll}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    • Средняя цена: ${middlePrice}
                </Typography>
            </Container>
        </Container>
    )
};