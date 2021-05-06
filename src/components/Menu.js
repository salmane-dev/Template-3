import { HashLink } from 'react-router-hash-link';
import { LinkContainer } from 'react-router-bootstrap' 


function Menu() {
    return (
      <div className="container">

            <div className="container" id="home">
                <div className="col-12 text-center">
                    <div className="tm-page-header">
                    <i className="fas fa-4x fa-chart-bar mr-4"></i>
                    <h1 className="d-inline-block text-uppercase">Pro Line</h1>
                    </div>
                </div>
            </div> 
              <div className="tm-nav-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <nav className="navbar navbar-expand-md navbar-light">
                        <button 
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#tmMainNav"
                          aria-controls="tmMainNav"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* <li className="nav-item active">
                          <a className="nav-link" href="/#home">Home <span className="sr-only">(current)</span></a >
                        </li> */}

                    <div className="collapse navbar-collapse " id="tmMainNav">
                      <ul className="navbar-nav mx-auto tm-navbar-nav">
                            <li className="nav-item active">
                              <HashLink className="nav-item active" to="/#home">
                                <span className="nav-link">
                                    Home
                                </span>
                              </HashLink>
                            </li>

                            <li className="nav-item active">
                              <LinkContainer  className="nav-item active" to="/#Aboutus">
                                <a className="nav-link">
                                    About Us
                                </a>
                              </LinkContainer>
                            </li>

                        <li className="nav-item active">
                          <LinkContainer className="nav-item active" to="/#contact">
                            <a className="nav-link">
                                Contact
                            </a>
                          </LinkContainer>
                          </li>

                        <li className="nav-item active">
                          <LinkContainer to="/unsubscribe" className="nav-link">
                          <span className="nav-link">unsubscribe</span>
                          </LinkContainer>
                        </li>
                        <li className="nav-item active">
                          <LinkContainer to="/privacy" className="nav-link">
                          <span className="nav-link">privacy</span>
                          </LinkContainer> 
                        </li>

                  </ul>
                </div>
              </nav>
           </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Menu;