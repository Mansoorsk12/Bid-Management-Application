import {Link} from 'react-router'
import './Header.css'

const Header = () => {
  return (
    <aside className='sec'>
    <div className='header'>
      
        <img
          src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/placement-happenings/webcoding-gif/logo-bids-logistic.avif"
          alt="logo-image" className='image'
        />
        <h1 className='head'>LOGISTIC</h1>
        </div>
        <nav className='navbar'>
          
          <Link to="/bid" className='nav-link'>Bid</Link>
          <Link to="/pod" className='nav-link'>Pod</Link>
          <Link to="/vendor" className='nav-link'>Vendor</Link>
          <Link to="/user" className='nav-link'>User</Link>
          
        </nav>
      </aside>
    
  )
}
export default Header
