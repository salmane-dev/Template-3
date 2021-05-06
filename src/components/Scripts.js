import $ from 'jquery';
import 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '../js/jquery.singlePageNav.min.js';
// import '../js/jquery.singlePageNav.js';
 



function App() {

    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf("MSIE ");
        if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
        }

        var trident = ua.indexOf("Trident/");
        if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf("rv:");
          return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
        }

        // var edge = ua.indexOf('Edge/');
        // if (edge > 0) {
        //     // Edge (IE 12+) => return version number
        //     return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        // }

        // other browser
        return false;
      }

      function setVideoHeight() {
        const videoRatio = 1920 / 1080;
        const minVideoWidth = 400 * videoRatio;
        let secWidth = 0,
          secHeight = 0;

        secWidth = videoSec.width();
        secHeight = videoSec.height();

        secHeight = secWidth / 2.13;

        if (secHeight > 600) {
          secHeight = 600;
        } else if (secHeight < 400) {
          secHeight = 400;
        }

        if (secWidth > minVideoWidth) {
          $("video").width(secWidth);
        } else {
          $("video").width(minVideoWidth);
        }

        videoSec.height(secHeight);
      }

      // Parallax function
      // https://codepen.io/roborich/pen/wpAsm
      var background_image_parallax = function($object, multiplier) {
        multiplier = typeof multiplier !== "undefined" ? multiplier : 0.5;
        multiplier = 1 - multiplier;
        var $doc = $(document);
        $object.css({ "background-attatchment": "fixed" });
        $(window).scroll(function() {
          var from_top = $doc.scrollTop(),
            bg_css = "center " + multiplier * from_top + "px";
          $object.css({ "background-position": bg_css });
        });
      };

      $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
          $(".scrolltop:hidden")
            .stop(true, true)
            .fadeIn();
        } else {
          $(".scrolltop")
            .stop(true, true)
            .fadeOut();
        }

        // Make sticky header
        if ($(this).scrollTop() > 158) {
          $(".tm-nav-section").addClass("sticky");
        } else {
          $(".tm-nav-section").removeClass("sticky");
        }
      });

      let videoSec;

      $(function() {
        if (detectIE()) {
          alert(
            "Please use the latest version of Edge, Chrome, or Firefox for best browsing experience."
          );
        }

          /******************************************************************* */
          var SinglePageNav = {
        
            init: function(options, container) {
                
                this.options = $.extend({}, $.fn.singlePageNav.defaults, options);
                
                this.container = container;            
                this.$container = $(container);
                this.$links = this.$container.find('a');
    
                if (this.options.filter !== '') {
                    this.$links = this.$links.filter(this.options.filter);
                }
    
                this.$window = $(window);
                this.$htmlbody = $('html, body');
                
                this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this));
    
                this.didScroll = false;
                this.checkPosition();
                this.setTimer();
            },
    
            handleClick: function(e) {
                var self  = this,
                    link  = e.currentTarget,
                    $elem = $(link.hash);
    
                e.preventDefault();             
    
                if ($elem.length) { // Make sure the target elem exists
    
                    // Prevent active link from cycling during the scroll
                    self.clearTimer();
    
                    // Before scrolling starts
                    if (typeof self.options.beforeStart === 'function') {
                        self.options.beforeStart();
                    }
    
                    self.setActiveLink(link.hash);
                    
                    self.scrollTo($elem, function() { 
    
                        if (self.options.updateHash && window.history.pushState) {
                          window.history.pushState(null,null, link.hash);
                        }
    
                        self.setTimer();
    
                        // After scrolling ends
                        if (typeof self.options.onComplete === 'function') {
                            self.options.onComplete();
                        }
                    });                            
                }     
            },
            
            scrollTo: function($elem, callback) {
                var self = this;
                var target = self.getCoords($elem).top;
                var called = false;
    
                self.$htmlbody.stop().animate(
                    {scrollTop: target}, 
                    { 
                        duration: self.options.speed,
                        easing: self.options.easing, 
                        complete: function() {
                            if (typeof callback === 'function' && !called) {
                                callback();
                            }
                            called = true;
                        }
                    }
                );
            },
            
            setTimer: function() {
                var self = this;
                
                self.$window.on('scroll.singlePageNav', function() {
                    self.didScroll = true;
                });
                
                self.timer = setInterval(function() {
                    if (self.didScroll) {
                        self.didScroll = false;
                        self.checkPosition();
                    }
                }, 250);
            },        
            
            clearTimer: function() {
                clearInterval(this.timer);
                this.$window.off('scroll.singlePageNav');
                this.didScroll = false;
            },
            
            // Check the scroll position and set the active section
            checkPosition: function() {
                var scrollPos = this.$window.scrollTop();
                var currentSection = this.getCurrentSection(scrollPos);
                if(currentSection!==null) {
                    this.setActiveLink(currentSection);
                }
            },        
            
            getCoords: function($elem) {
                return {
                    top: Math.round($elem.offset().top) - this.options.offset
                };
            },
            
            setActiveLink: function(href) {
                var $activeLink = this.$container.find("a[href$='" + href + "']");
                                
                if (!$activeLink.hasClass(this.options.currentClass)) {
                    this.$links.removeClass(this.options.currentClass);
                    $activeLink.addClass(this.options.currentClass);
                }
            },        
            
            getCurrentSection: function(scrollPos) {
                var i, hash, coords, section;
                
                for (i = 0; i < this.$links.length; i++) {
                    hash = this.$links[i].hash;
                    
                    if ($(hash).length) {
                        coords = this.getCoords($(hash));
                        
                        if (scrollPos >= coords.top - this.options.threshold) {
                            section = hash;
                        }
                    }
                }
    
                // get the last section if we reached the bottom of the page 
                // before reaching the last section top
                var pageBottom = $(document).height() - $(window).height();
                if ( scrollPos === pageBottom ){
                    var numberOfLinks = this.$links.length;
                    if ( numberOfLinks > 0 ){
                        section = this.$links[ numberOfLinks - 1].hash;
                    }
                }
                
                // The current section or the first link if it is found
                return section || ((this.$links.length===0) ? (null) : (this.$links[0].hash));
            }
        };

        $.fn.singlePageNav = function(options) {
          return this.each(function() {
              var singlePageNav = Object.create(SinglePageNav);
              singlePageNav.init(options, this);
          });
      };
      
      $.fn.singlePageNav.defaults = {
          offset: 0,
          threshold: 120,
          speed: 400,
          currentClass: 'current',
          easing: 'swing',
          updateHash: false,
          filter: '',
          onComplete: false,
          beforeStart: false
      };
        /***************************************************************** */


        const mainNav = $("#tmMainNav");
        mainNav.singlePageNav({
          filter: ":not(.external)",
          offset: $(".tm-nav-section").outerHeight(),
          updateHash: true,
          beforeStart: function() {
            mainNav.removeClass("show");
          }
        });

        videoSec = $("#tmVideoSection");

        // Adjust height of video when window is resized
        $(window).resize(function() {
          setVideoHeight();
        });

        setVideoHeight();

        $(window).on("load scroll resize", function() {
          var scrolled = $(this).scrollTop();
          var vidHeight = $("#hero-vid").height();
          var offset = vidHeight * 0.6;
          var scrollSpeed = 0.25;
          var windowWidth = window.innerWidth;

          if (windowWidth < 768) {
            scrollSpeed = 0.1;
            offset = vidHeight * 0.5;
          }
 
          $("#hero-vid").css(
            "transform",
            "translate3d(-50%, " + -(offset + scrolled * scrollSpeed) + "px, 0)"
          ); // parallax (25% scroll rate)
        });

        // Parallax image background
        background_image_parallax($(".tm-parallax"), 0.4);

        // Back to top
        $(".scroll").click(function() {
          $("html,body").animate(
            { scrollTop: $("#home").offset().top },
            "1000"
          );
          return false;
        });
      });
      
      return null 
}

export default App;