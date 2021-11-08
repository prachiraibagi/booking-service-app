import React, {useState} from 'react';
import "./Navbar.css"
import {  Link } from "react-router-dom";
import { Search, XCircle } from 'react-feather';

const Navbar = () => {
  const [isActive, setActive] = useState("home"); // Indicate which menu item was clicked
  const [isSearchActive, setSearchActive] = useState("no"); // Set if the search button was clicked
  const viewHeight = window.innerHeight; // Get the screen viewport height

  return (
    <div>
      <div>
        {/* Top nav bar (search & home) */}
        <div className="navbar">
          {(isSearchActive === "yes") ? <div className="searchDiv"><input className="searchBar" placeholder="Search" /> <XCircle color="red" onClick={() => setSearchActive("no")} /></div> :
          <ul>
            <li onClick={() => setSearchActive("yes")}><Search size="16" /></li>
            <Link to="/"><li className={` ${isActive === "home" ? 'active-link-home' : ''}`} onClick={() => setActive("home")}>Home</li></Link>
          </ul>
          }
        </div>
      </div>

      {/* Right menu icons */}
      <div class="menuDiv">
        <div className="menuColumn">
          <Link to="/explore">
            <div className={` ${isActive === "explore" ? 'menuBlock explore active-link' : 'menuBlock explore'}`} style={{height: viewHeight/2}} onClick={() => setActive("explore")} >
              <div className="menuText">
                <p className="menuTitle">Explore</p>
                <p className="menuDescription">Explore the best places</p>
              </div>
            </div>
          </Link>

          <Link to="/about">
            <div className={` ${isActive === "about" ? 'menuBlock about active-link' : 'menuBlock about'}`} style={{height: viewHeight/2}} onClick={() => setActive("about")} >
              <div className="menuText">
                <p className="menuTitleAbout">About</p>
                <p className="menuDescriptionAbout">Our company history</p>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="menuColumn">
          <Link to="/stories">
            <div className={` ${isActive === "stories" ? 'menuBlock stories active-link' : 'menuBlock stories'}`} style={{height: viewHeight/2}} onClick={() => setActive("stories")} >
              <div className="menuText">
                <p className="menuTitle">Stories</p>
                <p className="menuDescription">Our customer and company stories</p>
              </div>
            </div>
          </Link>

          <Link to="/help">
            <div className={` ${isActive === "help" ? 'menuBlock help active-link' : 'menuBlock help'}`} style={{height: viewHeight/2}} onClick={() => setActive("help")} >
              <div className="menuText">
                <p className="menuTitle">Help</p>
                <p className="menuDescription">FAQ and support</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;