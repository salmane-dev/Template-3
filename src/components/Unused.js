


function Unused() {
    return (

        <>

    <div className="container" id="activities">
      <div className="row">
        <div className="col-12">
          <div className="tm-parallax">
            <header className="tm-parallax-header">
              <h2 className="">Activities</h2>
            </header>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="tm-activity-block">
            <div className="tm-activity-img-container">
              <img src="./img/img-01.jpg" alt="Image" className="tm-activity-img" />
            </div>
            <div className="tm-activity-block-text">
              <h3 className="tm-text-blue">Lorem ipsum dolor sit amet</h3>
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed eu turpis nec sem lacinia
                condimentum et a orci.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="tm-activity-block mr-lg-0 ml-lg-auto">
            <div className="tm-activity-img-container">
              <img src="./img/img-02.jpg" alt="Image" className="tm-activity-img" />
            </div>
            <div className="tm-activity-block-text">
              <h3 className="tm-text-blue">Lorem ipsum dolor sit amet</h3>
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed eu turpis nec sem lacinia
                condimentum et a orci.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="tm-activity-block">
            <div className="tm-activity-img-container">
              <img src="./img/img-03.jpg" alt="Image" className="tm-activity-img" />
            </div>
            <div className="tm-activity-block-text">
              <h3 className="tm-text-blue">Lorem ipsum dolor sit amet</h3>
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed eu turpis nec sem lacinia
                condimentum et a orci.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="tm-activity-block mr-lg-0 ml-lg-auto">
            <div className="tm-activity-img-container">
              <img src="./img/img-04.jpg" alt="Image" className="tm-activity-img" />
            </div>
            <div className="tm-activity-block-text">
              <h3 className="tm-text-blue">Lorem ipsum dolor sit amet</h3>
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed eu turpis nec sem lacinia
                condimentum et a orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="container tm-company-section" id="company">
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-12 tm-company-left">
          <div className="tm-company-about">
            <div className="tm-company-img-container">
              <img src="./img/img-06.jpg" alt="Image" />
            </div>
            <div className="tm-company-about-text">
              <header>
                <h2 className="tm-company-about-header">Our Company</h2>
              </header> 
              <p className="mb-4">
                Suspendisse aliquam pulvinar odio sed rhoncus. Cras pretium diam
                ut metus tristique, a ultricies sapien euismod. Duis dui diam,
                maximus ac ligula a, accumsan cursus ante.
              </p>
              <a href="#" className="btn tm-btn  ">Read More</a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-9 col-lg-4 col-md-12 tm-company-right  ml-lg-auto mr-lg-0"
        >
          <div className="tm-company-right-inner">
            <ul className="nav nav-tabs" id="tmCompanyTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link tm-nav-link-border-right active"
                  id="vision-tab"
                  data-toggle="tab"
                  href="#vision"
                  role="tab"
                  aria-controls="vision"
                  aria-selected="true"
                  >Vision</a
                >
              </li>
              <li className="nav-item">
                <a
                  className="nav-link tm-no-border-right"
                  id="mission-tab"
                  data-toggle="tab"
                  href="#mission"
                  role="tab"
                  aria-controls="mission"
                  aria-selected="false"
                  >Mission</a
                >
              </li>
            </ul>
            <div className="tab-content" id="tmTabContent">
              <div
                className="tab-pane fade show active"
                id="vision"
                role="tabpanel"
                aria-labelledby="vision-tab"
              >
                <p>
                  Phasellus suscipit sapien magna, vel dictum lorem fringilla.
                </p>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra.
                </p>
                <p>
                  Nulla ornare ligula nibh, sit amet tristique magna efficitur
                  eu.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="mission"
                role="tabpanel"
                aria-labelledby="mission-tab"
              >
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra.
                </p>
                <p>
                  Nulla ornare ligula nibh, sit amet tristique magna efficitur
                  eu.
                </p>
                <p>
                  Phasellus suscipit sapien magna, vel dictum lorem fringilla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 

       </>
  );
}

export default Unused;