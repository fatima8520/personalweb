import { Helmet } from 'react-helmet'

export const PageHead = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
)
