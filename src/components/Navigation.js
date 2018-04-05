import React, { Component } from 'react';

import {
  Route,
  Link
} from 'react-router-dom'

const menus = [
  {
    path: '/',
    exact: true,
    name: 'Home'
  },
  {
    path: '/about',
    exact: true,
    name: "About"
  },
  {
    path: '/blog',
    exact: true,
    name: "Blog"
  },
  {
    path: '/contact',
    exact: true,
    name: "Contact"
  }
];

const MenuLink = ({ menu }) => {
  return (
    <Route
      path={menu.path}
      exact={menu.exact}
      children=
      {
        ({ match }) => {
          let active = (match !== null) ? "active" : "";
          return (
            <li className={`nav-item px-lg-4 ${active}`} >
              <Link to={menu.path} className="nav-link text-uppercase text-expanded">
                {menu.name}
              </Link>
            </li>
          )
        }
      }
    />
  )
}

class Navigation extends Component {
  // showMenu(menus) {
  //   let xhtml = null
  //   if (menus.length > 0) {
  //     xhtml = menus.map((menu, index) => {
  //       return (
  //         <li key={index} className="nav-item px-lg-4">
  //           <NavLink exact={menu.exact} className="nav-link text-uppercase text-expanded" to={menu.path}>{menu.name}
  //             <span className="sr-only">(current)</span>
  //           </NavLink>
  //         </li>
  //       )
  //     })
  //   }
  //   return xhtml
  // }
  showMenu(menus) {
    let xhtml = null
    if (menus.length > 0) {
      xhtml = menus.map((menu, index) => {
       return <MenuLink key={index} menu={menu} />
      })
    }
    return xhtml
  }
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-faded py-lg-4">
        <div className="container">
          <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
              {this.showMenu(menus)}
              {/* <li className="nav-item active px-lg-4">
                  <Link className="nav-link text-uppercase text-expanded" to="/">Home
                  <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item px-lg-4">
                  <Link className="nav-link text-uppercase text-expanded" to="/about">About</Link>
                </li>
                <li className="nav-item px-lg-4">
                  <Link className="nav-link text-uppercase text-expanded" to="/blog">Blog</Link>
                </li>
                <li className="nav-item px-lg-4">
                  <Link className="nav-link text-uppercase text-expanded" to="/contact">Contact</Link>
                </li> */}
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default Navigation;
