import React, { useState } from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Search from "./search"
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import "./header.css";

const Header = ({ siteTitle }) => {

  const [ showHamburgerMenu, setShowHamburgerMenu ] = useState(true);
  const [ showSearchForm, setShowSearchForm ] = useState(false);

  const toggleNavMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
    setShowSearchForm(false);
  }

  const toggleSearchForm = () => {
    setShowSearchForm(!showSearchForm);
    setShowHamburgerMenu(true);
  }

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
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/board">Boards</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/card">Food</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/page-2">Tech</Link></li>
                <li className="header-nav-item white-link"><Link activeClassName="active" to="/page-2">Contact</Link></li>
              </ul>
            </nav>
            <div className="header-search">
              <SearchOutlinedIcon className="header-search-toggle" onClick={toggleSearchForm} fontSize="large"/>
              <div className={`header-search-form ${ showSearchForm ? `active` : null }`}>
                <StaticQuery
                  query={graphql`
                    query SearchIndexQuery {
                      siteSearchIndex {
                        index
                      }
                    }
                  `}
                  render={data => (
                      <Search searchIndex={data.siteSearchIndex.index} />
                  )}
                />
              </div>
            </div>
          </div>
          </div>
      </header>
  );
}

export default Header;
