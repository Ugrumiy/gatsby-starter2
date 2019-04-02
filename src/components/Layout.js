import React from 'react';
import PropTypes from 'prop-types';
import SiteHead from '@components/SiteHead';
import Navbar from '@components/Navbar';

const TemplateWrapper = ({ children }) => (
  <div>
    <SiteHead />
    <Navbar />
    <div>{children}</div>
  </div>
);
TemplateWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TemplateWrapper;
