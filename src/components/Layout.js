import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import Navbar from '@components/Navbar';

const TemplateWrapper = (props) => {
  const {
    data: {
      globalSiteSettingsYaml: {
        meta_title: metaTitle,
        meta_description: metaDescription,
      },
    },
    children,
  } = props;
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
TemplateWrapper.propTypes = {
  data: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default () => (
  <StaticQuery
    query={graphql`{
      globalSiteSettingsYaml {
        meta_title
        meta_description
      }
    }
  `}
    render={data => <TemplateWrapper data={data} />}
  />
);
