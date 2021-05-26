


function Video() {
    return (
      <div  >
            <section className="tm-banner-section" id="tmVideoSection" style={{height:"600px"}}>
                    <div className="container tm-banner-text-container">
                    <div className="row">
                        <div className="col-12">
                        <header>
                            <h2 className="tm-banner-title">Welcome to { window.location.hostname }</h2>
                            <p className="mx-auto tm-banner-subtitle">

                            </p>
                        </header>
                        </div>
                    </div>
                    </div>

                    <video id="hero-vid" autoPlay loop muted style={{ width: "1583px", transform: "translate3d(-50%, -584px, 0px)"}}>
                    <source src="./videos/city-night-blur-01.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
            </section>
        </div>
  );
}

export default Video;
