import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 20
  },
  main: {
    direction: 'row',
    alignItems: 'center',
    justify: 'flex-start',
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
    textAlign: 'left'
  },
  desc: {
    cursor: 'pointer',
    transition: '0.4s',
    '&:hover': {
      color: theme.palette.primary.main,
      transition: '0.4s'
    }
  },
  divIcon: {
    border: '1px solid #2e344e',
    margin: 10,
    marginRight: 25,
    width: 70,
    padding: 10,
    paddingBottom: 5
  },
  divdetails: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  }
}))

const Contact = ({ title, text1, icon }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <div className={classes.divIcon}>{icon}</div>
        <div className={classes.divDetails}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" className={classes.desc}>
            {text1}
          </Typography>
        </div>
      </Grid>
    </div>
  )
}
export default Contact
