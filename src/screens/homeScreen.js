import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import TelegramIcon from '@material-ui/icons/Telegram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitupIcon from '@material-ui/icons/GitHub'
import { getTranslate } from '../localization/index'
import './home.css'
import PageHead from '../customComponent/pageHead'

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
    <>
      <PageHead title="Fatemeh Raiyat" description="Web Developer" />
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
            <IconButton
              className={classes.iconBttnStyle}
              component="a"
              href="https://telegram.me/fatimaryt"
              target="_blank"
            >
              <TelegramIcon color="primary" />
            </IconButton>
            <IconButton
              className={classes.iconBttnStyle}
              component="a"
              href="https://www.linkedin.com/in/fateme-raiyat-3058849b"
              target="_blank"
            >
              <LinkedInIcon color="primary" />
            </IconButton>
            <IconButton
              className={classes.iconBttnStyle}
              component="a"
              href="https://github.com/fatima8520"
              target="_blank"
            >
              <GitupIcon color="primary" />
            </IconButton>
          </div>
        </Grid>
      </div>
    </>
  )
}
export default HomeScreen
