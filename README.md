Arctic Virtual Forum Technical Specification
============================================
1. Directory Organization
  * index.html  
Contains all of the html and file includes for the single page web app component of the site.
Gathers all of the JS, CSS, and images needed for the app to function
  * js/  
Contains all of the javascript, both our code and libraries (in js/lib/) needed for the single page app to function.
The main outside library we use is [Parse](http://www.parse.com), a wrapper around Backbone to serve our data and structure our front-end.
  * imgs/  
The images that we include on the client side for the single page app.
  * stylesheets/  
The main "index.css" file we use to style the single page app. Also contains the minified CSS for Twitter Bootstrap.
  * ArcticServer/  
This contains the admin panel code and html file. As this is a separate app, it is linked to through a normal "a href" HTML link.
2. Running the Site
   
   To run the site online, upload the contents of this github repository to an S3 bucket and set "Static File Hosting" to enabled.

   To run the site locally, open your Chrome browser and navigate to the directory where you have cloned this Github repository. Open the index.html file in the top-level of this directory.