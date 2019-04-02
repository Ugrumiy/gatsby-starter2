import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';

const Navbar = class extends React.Component {
  render() {
    const {
      data: {
        menuYaml: {
          items: menuItems,
        },
      },
    } = this.props;
    return (
      <nav>
        { menuItems.map(item => <Link to={`/${item.href}`}>{item.title}</Link>) }
      </nav>
    );
  }
};
Navbar.propTypes = {
  data: PropTypes.object,
};

export default () => (
  <StaticQuery
    query={graphql`{
    menuYaml{
      items {
        href
        title
      }
    }
  }`}
    render={data => <Navbar data={data} />}
  />
);
