import React, { useState, useEffect } from 'react';

function Unsubscribe() {
    
  
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [showingAlert, setShowingAlert] = useState(false);
    const handleChange = (e) => {
      setEmail({ [e.target.name]: e.target.value });
    };
 
    const functiona = () => {
      setShowingAlert(true)
  }

    const MySubmit = (event) => {
      event.preventDefault()  
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' } 
      };
      fetch('/unsubscribe'+'?email='+email, requestOptions)
          .then(response => {response.json()
              setTimeout(functiona, 800)
              setMessage("Thank you!")
          }) 
          .catch(error => {
            setMessage( error.toString()) 
        })
    } 

  return (

    <div className="Unsubscribe pt-4 mt-4">
        
        <section className="container tm-contact-section" >
            <div className="row">
              <div className="col-12">
                <div className="tm-parallax">
                  <header className="tm-parallax-header" id="contact">
                    <h1 className="">Unsubscribe</h1>
                  </header>
                </div>
              </div> 
            </div>
        
        <div className="row justify-content-between mx-1">
          <div className="col-xl-6 col-lg-6 col-md-12  ">
              <figcaption className="tm-contact-figcaption text-center my-4">
                  If at any time you'd like to unsubscribe from our mailing list,
                  please enter your email address below.
              </figcaption>
          {  !showingAlert ?  
            <div className="tm-contact-form-container  mx-auto">
              <form className="tm-contact-form" onSubmit={MySubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                     
                    <div className="tm text-center">
                        <button type="submit" className="btn tm-btn tm-btn-big">
                          Unsubscribe Now
                        </button>
                    </div>
                    <h2 className={`text-info text-center alert ${showingAlert ? 'alert-shown' : 'alert-hidden'}`}  >{message}</h2>  
              </form>
            </div>
                  :
                  <h2 className={'text-info text-center alert alert-shown' }  >{message}</h2>  
                  } 
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12  ">
            <div className="tm-contact-figure-block">
              <figure className="d-inline-block">
                <img src="./img/img-05.jpg" alt="Image" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>

            <div className="row">
                <div className="col-12">
                    <div className="tm-parallax">
                        <header className="tm-parallax-header">
                            <h1 className="">Thank you for your time.</h1>
                        </header>
                    </div>
                </div>
            </div>
      </section>

    </div>
  );
}

export default Unsubscribe;
