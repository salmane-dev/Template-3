
function Contact() {
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
            <div className="tm-contact-form-container w-100">
              <form action="index.html" className="tm-contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_Fname"
                    name="contact_Fname"
                    className="form-control"
                    placeholder="First Name"
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
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contact_email"
                    name="contact_email"
                    className="form-control"
                    placeholder="Email"
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
                    required
                  ></textarea>
                </div>
                <div className="tm text-center">
                  <button type="submit" className="btn tm-btn tm-btn-big">
                    Send It
                  </button>
                </div>
              </form>
            </div>
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