import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Typography from '@material-ui/core/Typography'
import { Hidden, StepConnector } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  stepper: {
    backgroundColor: 'transparent',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  stepConnector: {
    paddingBottom: 0,
    '& span': {
      borderLeft: '3px solid #2e344e'
    }
  },
  stepContent: {
    marginTop: 0,
    borderLeft: '3px solid #2e344e'
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    border: '4px solid #2e344e',
    marginLeft: 6
  },
  label: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  },
  title: {
    color: theme.palette.primary.main
  },
  line: {
    width: 30,
    height: 1,
    backgroundColor: '#2e344e',
    marginRight: 15
  },
  date: {
    width: 200,
    textAlign: 'left'
  },
  subtitleStep: {
    textAlign: 'left'
  }
}))

const MyStepper = ({ steps }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Stepper
        connector={<StepConnector className={classes.stepConnector} />}
        className={classes.stepper}
        orientation="vertical"
      >
        {steps.map((step) =>
          step.id >= 0 ? (
            <Step active="true" key={step.id}>
              <StepLabel
                classes={{ label: classes.label }}
                icon={<span className={classes.circle} />}
              >
                <Typography className={classes.date} variant="h6">
                  {step.date}
                </Typography>
                <Hidden xsDown>
                  <span className={classes.line} />
                </Hidden>
                <Typography className={classes.title} variant="h5">
                  {step.title}
                </Typography>
              </StepLabel>
              <StepContent className={classes.stepContent}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: 15
                  }}
                >
                  <Hidden xsDown>
                    <div style={{ width: 242 }} />
                  </Hidden>

                  <div style={{ flex: 1 }}>
                    <Typography variant="h6" className={classes.subtitleStep}>
                      {step.subtitle}
                    </Typography>
                    <Typography variant="body1">{step.content}</Typography>
                  </div>
                </div>
              </StepContent>
            </Step>
          ) : (
            <Step active="true" key={step.id}>
              <StepLabel icon={null} />
            </Step>
          )
        )}
      </Stepper>
    </div>
  )
}
export default MyStepper
