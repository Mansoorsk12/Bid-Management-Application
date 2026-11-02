import {Link} from 'react-router'

const Header = () => {
  return (
    <div>
      <section>
        <img
          src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/placement-happenings/webcoding-gif/logo-bids-logistic.avif"
          alt="logo-image"
        />
        <h1>LOGISTIC</h1>
        <nav>
          <Link to="/bid">Bid</Link>
          <Link to="/pod">Pod</Link>
          <Link to="/vendor">Vendor</Link>
          <Link to="/user">User</Link>
        </nav>
      </section>
    </div>
  )
}
export default Header
