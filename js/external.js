(function() {

  define( [ "lib/jquery.min.js" ], function() {

    require( [
        "lib/jquery.qtip.pack.js",
        "lib/jquery.infieldlabel.min.js",
        "lib/slides.min.jquery.js",
        "lib/jquery_002.js",
        "lib/modernizr-1.5.min.js",
        "lib/jquery.tinyscrollbar.min.js"
      ], function() {

        require([
          "lib/jquery-ui.js"
        ], function() {
        } );

    });
  });
})();
