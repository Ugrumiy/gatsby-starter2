import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';

const Navbar = class extends React.Component {
  render() {
    const {
      config,
    } = this.props;
    return (
      <nav>
        { config.map(item => <Link to={`/${item.href}`}>{item.title}</Link>) }
      </nav>
    );
  }
};
Navbar.propTypes = {
  config: PropTypes.array,
};

export default () => (
  <StaticQuery
    query={graphql`{
      globalSiteSettingsYaml {
        mainNavConfig {
          title
          href
        }
      }
    }
  `}
    render={data => <Navbar config={data.globalSiteSettingsYaml.mainNavConfig} />}
  />
);
