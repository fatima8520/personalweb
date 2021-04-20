import { Grid, TextField, Button } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { contactValidationSchema } from '../validations/contactFormValidation'
import { getTranslate } from '../localization/index'

const useStyles = makeStyles(() => ({
  textField: {
    marginTop: 25,
    '& fieldset': {
      borderColor: '#2e344e !important'
    }
  },
  FormButton: {
    display: 'flex',
    marginTop: 25
  }
}))

const LOGIN_FORM_INIT_VALUES = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const ContactForm = () => {
  const classes = useStyles()
  const handleSubmit = () => {
    
  }
  const translate = getTranslate()

  return (
    <>
      <Formik
        initialValues={LOGIN_FORM_INIT_VALUES}
        onSubmit={handleSubmit}
        validationSchema={contactValidationSchema}
      >
        {({ values, setFieldValue, errors, touched, handleBlur }) => (
          <Form>
            <Grid container direction="column">
              <Grid item>
                <TextField
                  className={classes.textField}
                  name="name"
                  placeholder={translate.nameform}
                  fullWidth
                  variant="outlined"
                  value={values.email}
                  onChange={(event) =>
                    setFieldValue('name', event.target.value)
                  }
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.textField}
                  name="email"
                  placeholder={translate.emailform}
                  fullWidth
                  variant="outlined"
                  value={values.email}
                  onChange={(event) =>
                    setFieldValue('email', event.target.value)
                  }
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item>
                <TextField
                  className={classes.textField}
                  name="subject"
                  placeholder={translate.subjectform}
                  fullWidth
                  variant="outlined"
                  value={values.subject}
                  onChange={(event) =>
                    setFieldValue('subject', event.target.value)
                  }
                  error={touched.subject && !!errors.subject}
                  helperText={touched.subject && errors.subject}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="message"
                  className={classes.textField}
                  placeholder={translate.messageform}
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={5}
                  value={values.message}
                  onChange={(event) =>
                    setFieldValue('message', event.target.value)
                  }
                  error={touched.emessage && !!errors.message}
                  helperText={touched.message && errors.message}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.FormButton}
                >
                  {translate.sendbtn}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ContactForm
