Arctic Virtual Forum Technical Specification
============================================
1. Directory Organization
  * index.html
Contains all of the html and file includes for the single page web app component of the site.
Gathers all of the JS, CSS, and images needed for the app to function
  * js/
Contains all of the javascript, both our code and libraries (in js/lib/) needed for the single page app to function.
The main outside library we use is [Parse, a wrapper around Backbone to serve our data and structure our front-end.
  * imgs/
The images that we include on the client side for the single page app.
  * stylesheets/
The main "index.css" file we use to style the single page app. Also contains the minified CSS for Twitter Bootstrap.
2. Running the Site
...To run the site, upload the contents of this github repository to an S3 bucket and set "Static File Hosting" to enabled.