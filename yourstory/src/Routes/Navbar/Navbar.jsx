import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {Select, Menu, MenuItem, Badge, Typography, IconButton, Toolbar, AppBar, Hidden} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link, useHistory} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {useDispatch} from 'react-redux'
import { fetchLanguageData } from '../../Redux/DataRedux/actionCreator';

const useStyles = makeStyles((theme) => ({
    hr:{
        border:"none",
        borderTop:"1px dotted #000000",
        marginBottom:40
    },
    link:{
        textDecoration: "none",
        color: "#000000",
    },
    pad:{
        marginTop: -20,
        '& > *':{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
        }
        
    },

    grow: {
        flexGrow: 1,
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0,
        zIndex: 5,
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

export default function Navbar() {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    const handleClick = (lang) => {
      i18n.changeLanguage(lang);
        dispatch(fetchLanguageData(lang))
    }

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const onEnter = (e) => { setIsOver(true); }
    const onLeave = (e) => { setIsOver(false); }
    const [isOver, setIsOver] = useState(false);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleRegister = () => {
        history.push('/signup')
    }

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const history = useHistory()
    const handleProfile=()=>{
       history.push("/profile")
    }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}><span onClick={handleProfile}>Profile</span></MenuItem>
        <MenuItem onClick={handleMenuClose}><span onClick={handleRegister}>My account</span></MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
        <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge color="secondary">
                <MailIcon />
            </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge color="#212121">
                <NotificationsIcon />
            </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow} >
        <AppBar position="static" style={{ background: 'white', boxShadow: 'none'}}>
            <Toolbar className={classes.pad}>
            
            <Typography style={{color:"#212121"}} variant="h8" noWrap>
                <Link to="/" className={classes.link}>{t('Navbar.Yourstory')}</Link>
            </Typography>

            <Typography variant="h8" style={{color:"#212121"}} noWrap>
            <Hidden smDown>{t('Navbar.YourstoryClub')}</Hidden>
            </Typography>

            <Typography variant="h8" style={{color:"#212121"}} noWrap>
            <Link to="/videos" className={classes.link}>{t('Navbar.YourstoryTv')}</Link>
            </Typography>

            <Typography variant="h8" style={{color:"#212121"}} noWrap>
            <Hidden smDown> <Link to="/herstory" className={classes.link}>{t('Navbar.HerStory')}</Link></Hidden>
            </Typography>

            <Typography className={classes.title} variant="h8" style={{color:"#212121"}} noWrap>
            <Hidden smDown> <Link to="/socialstory" className={classes.link}>{t('Navbar.SocialStory')}</Link></Hidden>
            </Typography>

            <Typography className={classes.title} variant="h8" style={{color:"#212121"}} noWrap>
            <Hidden smDown> <Link to="/smbstory" className={classes.link}>{t('Navbar.SmbStory')}</Link></Hidden>
            </Typography>

            <Typography className={classes.title} variant="h8" style={{color:"#212121"}} noWrap>
            <Hidden smDown>{t('Navbar.More')}</Hidden>
            </Typography>
            
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge style={{color:"#bf360c"}}>
                    <Select
                        // labelId="demo-controlled-open-select-label"
                        // id="demo-controlled-open-select"
                        // open={open}
                        // onClose={handleClose}
                        // onOpen={handleOpen}
                        // value={age}
                        // onChange={handleChange}
                        disabled={!isOver}
                        onMouseEnter={onEnter}
                        onMouseLeave={onLeave}
                        >
                        <MenuItem value={10} onClick={()=>handleClick('en')}>English</MenuItem>
                        <MenuItem value={20} onClick={()=>handleClick('fr')}>French</MenuItem>
                        <MenuItem value={30} onClick={()=>handleClick('de')}>German</MenuItem>
                    </Select>
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
                <AccountCircle style={{color:"#bf360c"}} />
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                >
                <MoreIcon style={{color:"#bf360c"}}/>
                </IconButton>
            </div>
            </Toolbar>
            
        </AppBar>
        <div className={classes.hr}></div>
        {renderMobileMenu}
        {renderMenu}
        </div>
    );
}