import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Modal, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    width: '100%',
    kursor: 'pointer',
    '&:hover': {
      transform: 'rotate(360deg)',
      transition: '0.4s'
    }
  },
  title: {
    textAlign: 'left',
    kursor: 'pointer',
    '& a': {
      textDecoration: 'none',
      color: '#fff',
      transition: '0.4s',
      '&:hover': {
        color: theme.palette.primary.main,
        transition: '0.4s'
      }
    }
  },
  modalImage: {
    width: '100%',
    height: '100%'
  },
  modal: {
    width: '60%',
    height: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: '50%',
      marginTop: 60
    }
  }
}))
const Portfolio = ({ image, title, desc, href }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Grid item lg={4} className={classes.root}>
        <img
          aria-hidden="true"
          onClick={() => setOpen(true)}
          className={classes.image}
          src={image}
          alt={title}
        />
        <Typography className={classes.title} variant="h5">
          <a href={href}>{title}</a>
        </Typography>
        <Typography variant="body1">{desc}</Typography>
      </Grid>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        <img className={classes.modalImage} src={image} alt={title} />
      </Modal>
    </>
  )
}
export default Portfolio
