import { HashLink as Link } from 'react-router-hash-link'
import { LinkContainer } from 'react-router-bootstrap' 
import { useLocation } from 'react-router-dom'






function Menu() {
  
  const location = useLocation()
  
  function Linko(props){
     if(location.pathname==='/'){
      return <Link className="nav-item active" to={props.rout}>
                 <span className="nav-link"> {props.text} </span>
             </Link> 
    }
    else{
      return  <Link className="nav-item active" to={props.rout}>
                  <span className="nav-link"> {props.text} </span>
              </Link>
    }
  }


    return (
      <div className="container">

            <div className="container" id="home">
                <div className="col-12 text-center">
                    <div className="tm-page-header">
                        <a href="/" className="text-dark">
                            <i className="fas fa-4x fa-chart-bar mr-4"></i>
                            <h1 className="d-inline-block text-uppercase"> { window.location.hostname } </h1>
                        </a>
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
                      <ul className="navbar-nav mx-auto tm-navbar-nav menu">
                            
                            <li className="nav-item active">
                                <Linko rout="/#home" text="Home"/>
                            </li> 

                            <li className="nav-item active">
                                  <Linko rout="/#About" text="About us"/>
                            </li>

                            <li className="nav-item active">
                                  <Linko rout="/#contact" text="Contact"/>
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