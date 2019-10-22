import React from 'react';
import './navbar.scss';

interface INavbarState {
  condition: boolean
}

export class Navbar extends React.Component<{}, INavbarState> {
  constructor(props: any) {
    super(props)
    this.state = {
      condition: true
    }
  }

  showNavbar = (e: any) => {
    e.preventDefault();
    console.log(this.state)
    this.setState({
      condition: !this.state.condition
    })
  }

  public render() {
    return (<>
      <div className="navbar-container">

        <div onClick={this.showNavbar} className={this.state.condition ? "hamburger" : "x"}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>


        {!this.state.condition ? (
          <div className="navbar">
            <p className="navbar-login-text">login</p>
            <div className="navlink-line"></div>
            <div className="navbar-footer">
              <a href="www.prototyp.se">prototyp</a>
              <div className="navlink-line"></div>
            </div>
          </div>
        ) : (
            null
          )}
      </div>

    </>);
  }
}

export default Navbar;
