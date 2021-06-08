import * as React from "react"
import { Link } from "gatsby"
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import "./header.css";

const Header = ({ siteTitle }) => {
  return (
      <header className="header">
        <div className="header-wrapper">
          <div className="header-logo-block">
            <Link to="/" className="header-logo white-link">{siteTitle}</Link>
          </div>
          <div className="header-links-block">
            <nav className="header-nav">
              {/* <button className="header-nav-toggle" aria-expanded="false" type="button" aria-label="menu"> */}
              <MenuOutlinedIcon className="header-nav-toggle" fontSize="large"/>
              {/* </button> */}
              <ul className="header-nav-wrapper">
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/">Cards</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/page-2">Boards</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/page-2">Food</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/page-2">Tech</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/page-2">Contact</Link></li>
              </ul>
            </nav>
            {/* <div className="header-search">
              <button className="header-search-toggle" aria-label="Open search">
                Search
              </button>
              <form className="header-search-form" action="">
                <label className="sr-only" for="search">Search</label>
                <input type="search" name="" id="search" placeholder="What's on your mind?"/>
              </form>
            </div> */}
          </div>
          </div>
      </header>
  );
}

export default Header;
