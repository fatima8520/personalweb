import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/CallOutlined'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import RoomIcon from '@material-ui/icons/RoomOutlined'
import Title from '../components/title'
import { getTranslate } from '../localization/index'
import ContactForm from '../components/contactForm'
import Contact from '../components/contact'
import PageHead from '../customComponent/pageHead'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    alignItem: 'flex-start'
  },
  contactGrid: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 5,
      paddingRight: 5
    }
  },
  formGrid: {
    padding: 10
  },
  detailsGrid: {
    padding: 10
  },
  iconStyle: {
    fontSize: 30
  }
}))
const ContactScreen = () => {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <>
      <PageHead title="Fatemeh Raiyat" description="Web Developer" />
      <Grid container className={classes.root}>
        <Grid className={classes.contactGrid} container item xs={12}>
          <Title title={translate.contactme} />
          <Grid container direction="row">
            <Grid item xs={12} md={6} className={classes.formGrid}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={6} className={classes.detailsGrid}>
              <Contact
                icon={<PhoneIcon className={classes.iconStyle} />}
                title={translate.phone}
                text1="(+98)9177370142"
              />
              <Contact
                icon={<EmailIcon className={classes.iconStyle} />}
                title={translate.email}
                text1="Raiyat.f@gmail.com"
              />
              <Contact
                icon={<RoomIcon className={classes.iconStyle} />}
                title={translate.address}
                text1={translate.addressdesc}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
export default ContactScreen
