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
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-start has-text-centered">
          {menuItems.map(item => <Link className="navbar-item" to={`/${item.name}`}>{item.name}</Link>)}
        </div>
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
      name
    }
  }
}`}
    render={data => <Navbar data={data} />}
  />
);
