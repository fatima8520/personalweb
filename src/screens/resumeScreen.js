import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import Title from '../components/title'
import { getTranslate } from '../localization/index'
import Skill from '../components/skill'
import MyStepper from '../components/stepper'
import PageHead from '../customComponent/pageHead'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    alignItem: 'flex-start'
  },
  skillGrid: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 5,
      paddingRight: 5
    }
  },
  experienceTypo: {
    marginLeft: 10
  },
  stepperGrid: {
    marginTop: 15,
    marginBottom: 15
  }
}))
const ResumeScreen = () => {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <>
      <PageHead title="Fatemeh Raiyat | resume" description="Web Developer" />
      <Grid container className={classes.root}>
        <Grid className={classes.skillGrid} container item xs={12}>
          <Title title={translate.myskill} />
          <Grid container direction="row">
            <Grid item xs={12} md={6}>
              <Skill value={80} title="HTML5" />
              <Skill value={50} title="JavaSctipt" />
              <Skill value={70} title="React js" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Skill value={90} title="React Nativ" />
              <Skill value={100} title="Node.js" />
              <Skill value={60} title="PHP" />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.skillGrid} container item xs={12}>
          <Title title={translate.resume} />
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <BusinessCenterIcon style={{ fontSize: 34 }} />
            <Typography variant="h4" className={classes.experienceTypo}>
              {translate.workingExperience}
            </Typography>
          </Grid>
          <Grid container className={classes.stepperGrid}>
            <MyStepper steps={translate.workingSteps} />
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <LocalLibraryIcon style={{ fontSize: 34 }} />
            <Typography variant="h4" className={classes.experienceTypo}>
              {translate.educationalQualification}
            </Typography>
          </Grid>
          <Grid container className={classes.stepperGrid}>
            <MyStepper steps={translate.educationalSteps} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
export default ResumeScreen
