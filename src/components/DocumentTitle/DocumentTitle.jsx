import { Helmet } from "react-helmet-async";

const DocumentTitle = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    <meta property="og:type" content="website" />
  </Helmet>
);

export default DocumentTitle;
