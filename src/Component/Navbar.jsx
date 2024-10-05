import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [bgColor, setBgColor] = useState('transparent');

  const [fontColor, setfontColor] = useState('white');


  const handleScroll = () => {
    if (window.scrollY > 100) { // Change this value as needed
      setBgColor('black');
      setfontColor("black")
    } else {
      setBgColor('transparent');
      setfontColor("white")
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{backgroundColor:bgColor}}>
      <div className="container-fluid" >
        <a className="navbar-brand" href="#">Offcanvas navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul style={{color:fontColor}}  className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a style={{color:fontColor}}  className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a style={{color:fontColor}}  className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a style={{color:fontColor}}  className="dropdown-item" href="#">Action</a></li>
                  <li><a style={{color:fontColor}}  className="dropdown-item" href="#">Another action</a></li>
                  <li><a style={{color:fontColor}}  className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:fontColor}}  aria-current="page" href="#">Our Mission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:fontColor}} aria-current="page" href="#">Careers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:fontColor}}  aria-current="page" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
