import React from 'react';
import PropTypes from 'prop-types';

import Cursor from '../Cursor';
import TopGetInTouch from '../Top/TopGetInTouch';
import Footer from '../Footer';
import TopAboutUs from '../Top/TopAboutUs';

const PageLayout = ({ children, bgColor, topBorderColor }) => {
  return (
    <>
      {/* <Cursor /> */}
      {children}
      <TopAboutUs bg_color={bgColor} border_color={topBorderColor} />
      <TopGetInTouch bg_color={bgColor} />
      <Footer bg_color={bgColor} />
    </>
  )
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  topBorderColor: PropTypes.string,
};

PageLayout.defaultProps = {
  bgColor: '',
  topBorderColor: '',
};

export default PageLayout;
