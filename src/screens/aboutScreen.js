import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import CodeIcon from '@material-ui/icons/Code'
import WebIcon from '@material-ui/icons/Web'
import Title from '../components/title'
import { getTranslate } from '../localization/index'
import MainImage from '../assets/images/main.jpg'
import Service from '../components/service'
import resume from '../assets/doc/cv.pdf'
import PageHead from '../customComponent/pageHead'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    justify: 'flex-start',
    alignItem: 'flex-start'
  },
  aboutGrid: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 30,
    paddingRight: 30
  },
  mainImage: {
    width: '100%',
    height: '100%'
  },
  imageGrid: {
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      right: 0,
      bottom: 0,
      top: 'auto',
      height: '65%',
      width: 15,
      background: 'rgba(3, 127, 255, 0.6)'
    },
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 0,
      height: '65%',
      width: 15,
      background: 'rgba(3, 127, 255, 0.6)'
    }
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      display: 'blok'
    }
  },
  aboutTextGrid: {
    paddingLeft: 30,
    paddingRight: 10,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      marginTop: 15,
      marginBottom: 15
    }
  },
  iconStyle: {
    fontSize: 44,
    color: theme.palette.primary.main
  }
}))

const AboutScreen = () => {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <>
    <PageHead title="Fatemeh Raiyat" description="Web Developer" />
    <Grid container className={classes.root}>
      <Grid className={classes.aboutGrid} container item xs={12}>
        <Title title={translate.aboutme} />
        <Grid container direction="row">
          <Grid item xs={12} md={6} className={classes.imageGrid}>
            <img
              src={MainImage}
              alt={translate.name}
              className={classes.mainImage}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.aboutTextGrid}>
            <Typography variant="h3">
              {translate.hi}
              <span className={classes.nameText}> {translate.name}</span>
              {translate.hi2}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 10 }}>
              {translate.desc}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 10 }}>
              <b style={{ minWidth: 100, display: 'inline-block' }}>
                {translate.fullname}
              </b>
              {'  :  '}
              {translate.name}
            </Typography>

            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: 'inline-block' }}>
                {translate.nationality}
              </b>
              {'  :  '}
              {translate.irani}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: 'inline-block' }}>
                {translate.languages}
              </b>
              {'  :  '}
              {translate.persian}, {translate.english}, {translate.german}
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              <b style={{ minWidth: 100, display: 'inline-block' }}>
                {translate.email}
              </b>
              {'  :  '}
              Raiyat.f@gmail.com
            </Typography>
            <div style={{ display: 'flex', marginTop: 20 }}>
              <Button
                variant="contained"
                color="primary"
                component="a"
                target="_blank"
                href={resume}
              >
                {translate.downloadcv}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.aboutGrid} container item xs={12}>
        <Title title={translate.services} />
        <Grid container direction="row">
          <Service
            icon={<PhoneAndroidIcon className={classes.iconStyle} />}
            title="Mobile Application"
            desc="The Material Design responsive layout grid adapts to screen size."
          />
          <Service
            icon={<WebIcon className={classes.iconStyle} />}
            title="Mobile Application"
            desc="The Material Design responsive layout grid adapts to screen size."
          />
          <Service
            icon={<CodeIcon className={classes.iconStyle} />}
            title="Mobile Application"
            desc="The Material Design responsive layout grid adapts to screen size."
          />
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}
export default AboutScreen
