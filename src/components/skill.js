import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LinearProgress, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  progressDiv: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  progress: {
    width: '90%',
    marginLeft: 15,
    height: 6,
    backgroundColor: '#2e344e'
  }
}))
const Skill = ({ value, title }) => {
  const [progress, setProgress] = useState(40)
  const classes = useStyles()
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === value) {
          clearInterval(timer)
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, value)
      })
    }, 100)
  })
  return (
    <div className={classes.root}>
      <Typography variant="h6">{title}</Typography>
      <div className={classes.progressDiv}>
        <Typography variant="body1">{value}%</Typography>
        <LinearProgress
          value={progress}
          variant="determinate"
          color="primary"
          className={classes.progress}
        />
      </div>
    </div>
  )
}
export default Skill
