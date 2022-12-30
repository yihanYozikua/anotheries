import React, { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';

import Cursor from '../Cursor';
import Temp from "../Temp"
import Footer from '../Footer';
import TopAboutUs from '../Top/TopAboutUs';
import TopViewLocations from '../Top/TopViewLocations';
import ViewAllLocationsStatic from "../commons/ViewAllLocationsStatic";

const BG_COLOR = "#ECE2E4";

const ContactPageLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Temp />
      <Cursor cursorTypes={"Contact"} />
      {children}
      <TopAboutUs bg_color={BG_COLOR} />
      {/*<TopViewLocations bg_color={BG_COLOR} marginTopOffset="0"/>*/}
      <ViewAllLocationsStatic bg_color={BG_COLOR}/>
      <Footer bg_color={BG_COLOR} />
    </>
  )
};

ContactPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactPageLayout;
