import logo from './logo.svg';
import './App.css';
import AOS from 'aos';
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

import Top from './Top'
import TopUp from './Top/TopUp'
import TopImgReel from './Top/TopImgReel'
import TopAncestor from './Top/TopAncestor';
import { TopParagraph } from './Top/TopParagraph'
import TopGallery from './Top/TopGallery'
import TopGalleryCanvas from './Top/TopGalleryCanvas'
import TopGalleryArbitrary from './Top/TopGalleryArbitrary'
import TopViewLocations from './Top/TopViewLocations'
import TopAboutUs from './Top/TopAboutUs'
import TopGetInTouch from './Top/TopGetInTouch'
import Footer from './Footer'
import Cursor from './Cursor'
import PrivacyPolicy from './PrivacyPolicy'
import ImgGallery from "./components/ImgGallery"

import About from './About'
import Locations from './LocationsIndex'
import ContactForm from './Contact/ContactForm'
import ContactConfirm from './Contact/ContactConfirm'
import ContactThanks from './Contact/ContactThanks'

/* Locations Template 01 */
import Shiragawa from './Locations/01/Shiragawa'
import Kamogawa from './Locations/01/Kamogawa'
import Hokkaido from './Locations/01/Hokkaido'
import Nintynineisland from './Locations/01/Nintynineisland'

/* Locations Template 01_1 */
import Takayama from './Locations/01_1/Takayama'
import Ine from './Locations/01_1/Ine';

/* Locations Template 02 */
import Fujisan from './Locations/02/Fujisan';
import Yokoyama from './Locations/02/Yokoyama';

/* Locations Template 03 */
import Fujousan from './Locations/03/Fujousan'
import TaipeiChildrenAmusementPark from './Locations/03/TaipeiChildrenAmusementPark'
import TokyoTower from './Locations/03/TokyoTower';
import TheOutpost from './Locations/03/TheOutpost';

/* Locations Template 04 */
import TheSideOfTheMountain from './Locations/04/TheSideOfTheMountain'
import Umeda from './Locations/04/Umeda';
import MapleAwanda from './Locations/04/MapleAwanda';
import FlowerTree from './Locations/04/FlowerTree';

/* Locations Template 05 */
import Shonan from './Locations/05/Shonan'
import GraxGlamping from './Locations/05/GraxGlamping';

/* Locations Template 06 */
import NaraAndHotel from './Locations/06/NaraAndHotel'
import BookAndBedTokyoIkeBuKuRo from './Locations/06/BookAndBedTokyoIkeBuKuRo'

const App = () => {
  const about_bg_color = "#D4D5CB";
  const top_bg_color = "#B3B3BE";
  const location_bg_color = "#F1EEE6";
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/about" element={<><About /></>} />
        <Route path="/locations" element={<><Locations /></>} />
        <Route path="/contact" element={<><ContactForm /></>} />
        <Route path="/contact_confirm" element={<><ContactConfirm /></>} />
        <Route path="/contact_send_successfully" element={<><ContactThanks /></>} />
        <Route path="/privacy_policy" element={<><PrivacyPolicy /></>} />


        {/* Locations 01 */}
        <Route path="/locations/shiragawa" element={<Shiragawa />} />
        <Route path="/locations/kamogawa" element={<Kamogawa />} />
        <Route path="/locations/hokkaido" element={<Hokkaido />} />
        <Route path="/locations/nintynineisland" element={<Nintynineisland />} />

        {/* Locations 01_1 */}
        <Route path="/locations/takayama" element={<Takayama />} />
        <Route path="/locations/ine" element={<Ine />} />


        {/* Locations 02 */}
        <Route path="/locations/fujisan" element={<Fujisan />} />
        <Route path="/locations/yokoyama" element={<Yokoyama />} />

        {/* Locations 03 */}
        <Route path="/locations/fujousan" element={<Fujousan />} />
        <Route path="/locations/taipeiChildrenAmusementPark" element={<TaipeiChildrenAmusementPark />} />
        <Route path="/locations/tokyoTower" element={<TokyoTower />} />
        <Route path="/locations/theoutpost" element={<TheOutpost />}/>

        {/* Locations 04 */}
        <Route path="/locations/theSideOfTheMountain" element={<TheSideOfTheMountain />} />
        <Route path="/locations/umeda" element={<Umeda />} />
        <Route path="/locations/mapleawanda" element={<MapleAwanda />} />
        <Route path="/locations/flowertree" element={<FlowerTree />} />

        {/* Locations 05 */}
        <Route path="/locations/shonan" element={<Shonan />} />
        <Route path="/locations/graxglamping" element={<GraxGlamping />} />

        {/* Locations 06 */}
        <Route path="/locations/naraAndHotel" element={<NaraAndHotel />} />
        <Route path="/locations/bookAndBedTokyoIkeBuKuRo" element={<BookAndBedTokyoIkeBuKuRo />} />

      </Routes>
    </Router>
  );
}
export default App;
