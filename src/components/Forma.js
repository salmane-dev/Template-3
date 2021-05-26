import React, { useState } from 'react'
import axios from 'axios'


function Forma() {

    const [message, setMessage] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [showingAlert, setShowingAlert] = useState(false);
  
        const handleChange = (e) => {
          setEmail({ [e.target.name]: e.target.value });
        };
  
        const resetForm = () => {
          setFname('')
          setLname('')
          setEmail('')
          setMessage('')
        }
  
        const functiona = () => {
            setShowingAlert(true) 
            resetForm()
        }

    const handleSubmit = (e) => {
      e.preventDefault();
      
      axios({
        method: "get",
        url:"/",
        data:  {fname,lname,email, message}
      }).then((response)=>{
               if (response.status === 200) { 
                    setTimeout(functiona, 800)
              } else if(response.data.status !== 200) {
                setShowingAlert(false)
              }
            })
          }

    return (

        <div className="tm-contact-form-container w-100">

            { !showingAlert? 
              <form action="index.html" className="tm-contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_Fname"
                    name="contact_Fname"
                    className="form-control"
                    placeholder="First Name"
                    onChange={e => setFname(e.target.value)}
                    value={fname}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_Lname"
                    name="contact_Lname"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={e => setLname(e.target.value)}
                    value={lname}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_email"
                    name="contact_email"
                    className="form-control"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="5"
                    id="contact_message"
                    name="contact_message"
                    className="form-control"
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)} >
                  </textarea>
                </div>
                <div className="tm text-center">
                  <button type="submit" className="btn tm-btn tm-btn-big">
                    Send It
                  </button>
                </div>
            </form>
              : <h2 className="text-center  ">Thank you</h2>
            
            }

            </div>

    );
}

export default Forma;