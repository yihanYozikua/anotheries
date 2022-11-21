import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import shareCss from '../css/share.module.scss'

// TODO: maybe can move into PageLayout
const Navbar = ({ wrapperComponent, ...props }) => {
  const Wrapper = wrapperComponent;
  return (
    <Wrapper {...props}>
      <Link to="/" className={shareCss.nav_items}>Top</Link>
      <Link to="/about" className={shareCss.nav_items}>About us</Link>
      <Link to="/locations" className={shareCss.nav_items}>Locations</Link>
      <Link to="/contact" className={shareCss.nav_items}>Contact</Link>
    </Wrapper>
  )
};

Navbar.propTypes = {
  wrapperComponent: PropTypes.elementType,
};

Navbar.defaultProps = {
  wrapperComponent: 'nav',
};

export default Navbar;
