import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import {Grid,Badge,IconButton,Toolbar,AppBar} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
        },
    },
}));

export default function Topbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';

    return (
        <div className={classes.grow} >
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
            <Grid container justify="center" alignItems="center">
                <Grid item justifyContent="center">
                    <img className={classes.logo} alt="Portal Logo" src="https://yourstory.com/logos/logo_yourstory.svg" align="center" />
                </Grid>
            </Grid>
            
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" className={classes.title} color="inherit">
                <Badge  style={{color:"#bf360c"}}>
                    <BookmarkBorderIcon/>
                </Badge>
            </IconButton>
            <IconButton aria-label="show 4 new mails" className={classes.title} color="inherit">
                <Badge  style={{color:"#bf360c"}}>
                    <NotificationsNoneIcon/>
                </Badge>
            </IconButton>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                >
                <SearchIcon style={{color:"#bf360c"}}/>
            </IconButton>
            </div>
            </Toolbar>
        </AppBar>
        </div>
    );
}