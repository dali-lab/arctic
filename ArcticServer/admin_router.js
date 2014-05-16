var au = false;
var ArcticAdminRouter = Backbone.Router.extend({
  routes: {
    "": "editConferences",
    "editConference/:id": "editConference",
    "editReports": "editReports",
    "addConference": "addConference",
    "editReport/:id": "editReport",
    "addReport": "addReport",
    "editWebsites": "editWebsites",
    "editWebsite/:id": "editWebsite",
    "addWebsite": "addWebsite",
    "editPartners": "editPartners",
    "editPartner/:id": "editPartner",
    "addPartner": "addPartner",
    "editAbout": "editAbout",
    "signin": "signin"
  },

  route: function(route, name, callback) {
    if (!_.isRegExp(route)) route = this._routeToRegExp(route);
    if (_.isFunction(name)) {
      callback = name;
      name = '';
    }
    if (!callback) callback = this[name];
    // here my custom code
    // callback = _.wrap(callback, _.bind(function(cb) {
    //   // if (name == 'login') {
    //   //   _.bind(cb, this)();
    //   // } else {
    //   //   this.navigate('login', {trigger: true});
    //   // }
    //   console.log(Parse.User.current());
    if(!Parse.User.current()){
      this.navigate('signin', true);
    }
    //   _.bind(cb, this)();
    // }, this));
    // finish my custom code
    var router = this;
    Backbone.history.route(route, function(fragment) {
      var args = router._extractParameters(route, fragment);
      callback && callback.apply(router, args);
      router.trigger.apply(router, ['route:' + name].concat(args));
      router.trigger('route', name, args);
      Backbone.history.trigger('route', router, name, args);
    });
    return this;
  },

  initialize: function() {
    console.log("router initialized");
  },

  editConferences: function(){
    var editconferencesview = new editConferencesView();
  },

  editConference: function(id){
    var editconferenceview = new editConferenceView(id);
  },

  addConference: function(){
    var addconferenceview = new addConferenceView();
  },

  editReports: function(){
    var editreportsview = new editReportsView();
  },

  editReport: function(id){
    var editreportview = new editReportView(id);
  },

  addReport: function(){
    var addreport = new addReportView();
  },

  editWebsites: function(){
    var editwebsitesview = new editWebsitesView();
  },

  editWebsite: function(id){
    var editwebsiteview = new editWebsiteView(id);
  },

  addWebsite: function(){
    var addwebsiteview = new addWebsiteView();
    //console.log("begin to add website");
  },

  editPartners: function(){
    var editpartnersview = new editPartnersView();
  },

  editPartner: function(id){
    var editpartnersview = new editPartnerView(id);
  },

  addPartner: function(){
    var addpartnerview = new addPartnerView();
  },


  editAbout: function(){
    var editaboutview = new editAboutView();
  },

  signin: function(){
    login();
  }
});

var router = new ArcticAdminRouter();
Backbone.history.start();
