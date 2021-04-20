import * as Yup from 'yup'

export const contactValidationSchema = Yup.object({
  name: Yup.string().required('name is required'),
  subject: Yup.string().required('subject is required'),
  message: Yup.string().required('message is required'),
  email: Yup.string()
    .min(6, 'email must be more than 6 chars')
    .required('email is required')
})
