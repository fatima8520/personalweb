import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20
  },
  main: {
    backgroundColor: '#191d2b',
    zIndex: 1,
    border: '1px solid #2e344e',
    borderTop: '5px solid #2e344e',
    padding: theme.spacing(8),
    transition: '0.4s',
    '&:hover': {
      borderTopColor: theme.palette.primary.main,
      transition: '0.4s'
    }
  },
  title: {
    marginTop: 15,
    position: 'relative',
    paddingBottom: 15,
    '&::before': {
      content: "''",
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 'auto',
      height: 2,
      width: 50,
      backgroundColor: '#2e334e'
    }
  },
  desc: {
    marginTop: 15
  }
}))

const Service = ({ title, desc, icon }) => {
  const classes = useStyles()
  return (
    <Grid item lg={4} mg={6} xs={12} className={classes.root}>
      <Grid
        container
        className={classes.main}
        direction="column"
        alignItems="flex-start"
      >
        {icon}
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={classes.desc}>
          {desc}
        </Typography>
      </Grid>
    </Grid>
  )
}
export default Service
