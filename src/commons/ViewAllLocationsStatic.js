import {Link} from 'react-router-dom'
import commonsViewAllLocationsCss from '../css/commons_view_all_locations.module.scss'
import AOS from 'aos'

export default function ViewAllLocationsStatic(bg_color) {
  return (
    <section id={commonsViewAllLocationsCss.view_all_locations_static} style={{backgroundColor: bg_color}}>
      <span className={commonsViewAllLocationsCss.text_prop} data-aos={"fade-in"}>View all locations</span>
      <Link to="/locations" className={commonsViewAllLocationsCss.btn}></Link>
    </section>
  )
}