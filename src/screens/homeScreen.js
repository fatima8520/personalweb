import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import TelegramIcon from '@material-ui/icons/Telegram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import { getTranslate } from '../localization/index'
import './home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    '& span': {
      color: theme.palette.primary.main,
      [theme.breakpoints.down('xs')]: {
        display: 'blok'
      }
    }
  },
  divIcons: {
    marginTop: 20
  },
  iconBttnStyle: {
    border: '2px solid #2e344e',
    marginRight: 8,
    marginLeft: 8,
    transition: '0.5s',
    '&:hover': {
      borderColor: theme.palette.primary.main,
      transition: '1s',
      color: theme.palette.primary.main
    }
  }
}))
const HomeScreen = () => {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <div className={classes.root}>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Grid>
        <Typography variant="h1">
          {translate.hi}
          <span> {translate.name}</span>
          {translate.hi2}
        </Typography>
        <Typography variant="subtitle1">{translate.desc}</Typography>
        <div className={classes.divIcons}>
          <IconButton className={classes.iconBttnStyle}>
            <TelegramIcon color="secondary" />
          </IconButton>
          <IconButton className={classes.iconBttnStyle}>
            <LinkedInIcon color="secondary" />
          </IconButton>
          <IconButton className={classes.iconBttnStyle}>
            <InstagramIcon color="secondary" />
          </IconButton>
        </div>
      </Grid>
    </div>
  )
}
export default HomeScreen
