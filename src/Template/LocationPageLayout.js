import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../components/PageLayout';
import Cursor from '../Cursor'
import Temp from "../Temp"

const BG_COLOR = "#F1EEE6";
const BORDER_COLOR = "#B3B3BE";

const LocationPageLayout = ({ children, hasTopAboutUsBorder }) => {
  return (
    <PageLayout
      bgColor={BG_COLOR}
      topBorderColor={hasTopAboutUsBorder ? BORDER_COLOR : ''}
    >
      <Temp />
      <Cursor />
      {children}
    </PageLayout>
  )
}

LocationPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  hasTopAboutUsBorder: PropTypes.bool,
};

LocationPageLayout.defaultProps = {
  hasTopAboutUsBorder: false,
};

export default LocationPageLayout;
