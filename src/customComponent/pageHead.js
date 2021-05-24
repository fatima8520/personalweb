import { Helmet } from 'react-helmet'

 const PageHead = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
)
export default PageHead
