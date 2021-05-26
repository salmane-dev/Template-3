import React, { useState } from 'react'
import axios from 'axios'
import Forma from '../components/Forma';


function Contact() {


  const [message, setMessage] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [showingAlert, setShowingAlert] = useState('');

      const handleChange = (e) => {
        setEmail({ [e.target.name]: e.target.value });
      };

      const resetForm = () => {
        setFname('')
        setLname('')
        setEmail('')
        setMessage('')
      }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios({
      method: "get",
      url:"/",
      data:  {fname,lname,email, message}
    }).then((response)=>{
             if (response.status === 200) { 
              setShowingAlert("Thanks for your message")
              resetForm()
            } else if(response.data.status !== 200) {
              setShowingAlert("Message failed to send.")
            }
          })
        }


    return (
      <section className="container tm-contact-section" >
            <div className="row">
              <div className="col-12">
                <div className="tm-parallax">
                  <header className="tm-parallax-header" id="contact">
                    <h1 className="">Contact Us</h1>
                  </header>
                </div>
              </div>
            </div>
        <div className="row justify-content-between mx-4">
          <div className="col-xl-5 col-lg-6 col-md-12 tm-contact-left">
            
            <Forma />
            
          </div>
          <div className="col-xl-5 col-lg-6 col-md-12 tm-contact-right">
            <div className="tm-contact-figure-block">
              <figure className="d-inline-block">
                <img src="./img/img-05.jpg" alt="Image" className="img-fluid" />
                <figcaption className="tm-contact-figcaption">
                To receive our exclusive e-mail offers from Template-Website.com name companies,
                 please complete the Form.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="row">
              <div className="col-12">
                <div className="tm-parallax">
                  <header className="tm-parallax-header">
                    <h1 className="">Thank you.</h1>
                  </header>
                </div>
              </div>
            </div>


      </section>

);
}

export default Contact;