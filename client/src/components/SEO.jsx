import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://stfrancoisdesales.org';
const SITE_NAME = 'Paroisse Saint-François-de-Sales';
const DEFAULT_DESCRIPTION = 'Découvrez la Paroisse Saint-François-de-Sales à Laval, fondée il y a plus de 325 ans. Horaires des messes, coordonnées, annonces et vie communautaire au Diocèse de Montréal.';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEO = ({ title, description = DEFAULT_DESCRIPTION, path = '/', image = DEFAULT_IMAGE }) => {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Laval, Québec`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
