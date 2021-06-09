import React, { useState } from "react";
import { Link } from "gatsby";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import "./header.css";

const Header = ({ siteTitle }) => {

  const [ showHamburgerMenu, setShowHamburgerMenu ] = useState(true);
  const [ showSearchForm, setShowSearchForm ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState('');

  const toggleNavMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
    setShowSearchForm(false);
  }

  const toggleSearchForm = () => {
    setShowSearchForm(!showSearchForm);
    setShowHamburgerMenu(true);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    // onSubmit(term);
  };

  return (
      <header className="header">
        <div className="header-wrapper">
          <div className="header-logo-block">
            <Link to="/" className="header-logo white-link">{siteTitle}</Link>
          </div>
          <div className="header-links-block">
            <nav className="header-nav">
              <MenuOutlinedIcon className={`header-nav-toggle ${ showHamburgerMenu ? `show-icon`: null}`} onClick={toggleNavMenu} fontSize="large"/>
              <CloseOutlinedIcon className={`header-nav-toggle ${ showHamburgerMenu ? null : `show-icon` }`} onClick={toggleNavMenu} fontSize="large"/>
              <ul className={`header-nav-wrapper ${ showHamburgerMenu ? null : `active` }`}>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/">Cards</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/page-2">Boards</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/page-2">Food</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/page-2">Tech</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/page-2">Contact</Link></li>
              </ul>
            </nav>
            <div className="header-search">
              <SearchOutlinedIcon className="header-search-toggle" onClick={toggleSearchForm} fontSize="large"/>
              <form className={`header-search-form ${ showSearchForm ? `active` : null }`} onSubmit={onFormSubmit}>
                <label className="sr-only" htmlFor="search">Search</label>
                <input 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  type="search" 
                  name="" 
                  id="search" 
                  placeholder="Enter keyword here..."/>
              </form>
            </div>
          </div>
          </div>
      </header>
  );
}

export default Header;
