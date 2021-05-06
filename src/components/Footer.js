import  Scripts from '../components/Scripts'





function Footer() {
    return (

      <>
          <footer className="container tm-footer">
            <div className="row tm-footer-row">
              <p className="col-md-10 col-sm-12 mb-0 text-left">
              &copy; {new Date().getFullYear()}  Leniencyjust.com. All rights reserved.
              </p>
              <div className="col-md-2 col-sm-12 scrolltop">
                <div className="scroll icon"><i className="fa fa-4x fa-angle-up"></i></div>
              </div>
            </div>
          </footer>


        <script src="../js/jquery-1.9.1.min.js"></script>
        {/* <!-- Single Page Nav plugin works with this version of jQuery --> */}
        <script src="../js/jquery.singlePageNav.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossOrigin="anonymous"></script>
        <Scripts/>

      </>

);
}

export default Footer;