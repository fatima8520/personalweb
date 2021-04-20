import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {CssBaseline,Button,Drawer, Hidden,IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import profileImage from '../assets/images/profile.jpg'
import { getTranslate, changeLanguage, lang } from '../localization/index'
import HomeScreen from './homeScreen'
import AboutScreen from './aboutScreen'
import ResumeScreen from './resumeScreen'
import PortfoliosScreen from './portfoliosScreen'
import ContactScreen from './contactScreen'
import './index.css'
import ListItem from '../components/listItem'

const drawerWidth = 260

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    margin: theme.spacing(2),
    marginLeft: 0,
    width: 50,
    height: 50,
    borderRadius: 0,
    border: '1px solid #2e344e',
    backgroundColor: theme.palette.primary.backgroundColor,
    position: 'fixed',
    top: 20,
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  // necessary for content to be below app bar
  topDrawer: {
    width: '100%',
    padding: 15,
    borderBottom: '1px solid #2e344e',
    textAlign: 'center'
  },
  profileImage: {
    maxWidth: '100%',
    width: 200,
    height: 200,
    borderRadius: 100,
    border: '7px solid #2e3448',
    verticalAlign: 'middle'
  },
  centerDrawer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#191d2b',
    height: '100vh',
    borderRight: '1px solid #2e3448'
  },
  bottonDrawer: {
    padding: 15,
    borderTop: '1px solid #2e344e'
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    position: 'relative'
  }
}))

function ResponsiveDrawer(props) {
  const { window } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const translate = getTranslate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <>
      <div className={classes.topDrawer}>
        <img
          src={profileImage}
          alt={translate.name}
          className={classes.profileImage}
        />
      </div>
      <div className={classes.centerDrawer}>
        <ListItem onChangeMobileOpen={setMobileOpen} />
      </div>
      <div className={classes.bottonDrawer}>
        <Button
          color={lang === 'fa' ? 'primary' : 'secondary'}
          onClick={() => changeLanguage('fa')}
        >
          فارسی
        </Button>
        /
        <Button
          color={lang === 'en' ? 'primary' : 'secondary'}
          onClick={() => changeLanguage('en')}
        >
          English
        </Button>
      </div>
    </>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined
  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <span className="line1" />
        <span className="line2" />
        <span className="line3" />
        <span className="line4" />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/about">
            <AboutScreen />
          </Route>
          <Route path="/resume">
            <ResumeScreen />
          </Route>
          <Route path="/portfolios">
            <PortfoliosScreen />
          </Route>
          <Route path="/contact">
            <ContactScreen />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </div>
  )
}
export default ResponsiveDrawer
