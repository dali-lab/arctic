// Parse.User.logIn("myname", "mypass", {
//   success: function(user) {
//     // Do stuff after successful login.
//     alert("success");
//   },
//   error: function(user, error) {
//     // The login failed. Check error to see why.
//     alert("failed");
//   }
// });
var updated = false;
$("#conf_btn").click(function(){
    router.navigate("", true);
});
$("#rep_btn").click(function(){
    router.navigate("editReports", true);

});
$("#web_btn").click(function(){
    router.navigate("editWebsites", true);
});

$("#part_btn").click(function(){
    router.navigate("editPartners", true);
});

$("#abo_btn").click(function(){
    router.navigate("editAbout", true);
});
$(document).ready( function () {
    $('#table_id').dataTable();
} );

function reset(){
    $("#myModal").modal("hide");
    if(updated){
      router.navigate("", true);
      updated = false;
    }else{
      router.navigate("", false);
    }
};

function reset2(){
    $("#myModal2").modal("hide");
    if(updated){
      router.navigate("editWebsites", true);
      updated = false;
    }else{
      router.navigate("editWebsites", false);
    }
};

function reset3(){
    $("#myModal4").modal("hide");
    if(updated){
      router.navigate("editReports", true);
      updated = false;
    }else{
      router.navigate("editReports", false);
    }
}

function reset4(){
    $("#myModal3").modal("hide");
    if(updated){
      router.navigate("editPartners", true);
      updated = false;
    }else{
      router.navigate("editPartners", false);
    }
};

function add_Conference(){
    router.navigate("addConference", true);
};

function add_Website(){
    router.navigate("addWebsite", true);
};

function add_Partner(){
    router.navigate("addPartner", true);
};

function add_Report(){
    router.navigate("addReport", true);
};

function save_conference(){
    attr = [];
    attr["name"] = $("#c_name").val();
    attr["country"] = $("#c_country").val();
    attr["category"] = $("#c_cate").val();
    attr["city"] = $("#c_city").val();
    attr["url"] = $("#c_link").val();
    attr["organization"] = $("#c_organization").val();
    attr["description"] = $("#c_desc").val();
    attr["objectId"] = $("#hidden_objid").val();
    //console.log(attr);
    var conf = new Conference();
    conf.id = attr["objectId"];
    conf.set("name", attr["name"]);
    conf.set("country", attr["country"]);
    conf.set("city", attr["city"]);
    conf.set("category", attr["category"]);
    conf.set("url", attr["url"]);
    conf.set("organization", attr["organization"]);
    conf.set("description", attr["description"]);
    conf.save(null, {
        success: function(conference) {
            alert("success");
            updated = true;
        },
        error: function(){
            alert("update failed");
        }
    });
};

function save_report(){
    attr = [];
    attr["name"] = $("#r_name").val();
    attr["country"] = $("#r_country").val();
    attr["category"] = $("#r_cate").val();
    attr["author"] = $("#r_author").val();
    attr["url"] = $("#r_link").val();
    attr["publishedBy"] = $("#r_pub_by").val();
    attr["description"] = $("#r_desc").val();
    attr["objectId"] = $("#hidden_objid_r").val();
    //console.log(attr["objectId"]);
    //console.log(attr);
    var report = new Report();
    report.id = attr["objectId"];
    report.set("name", attr["name"]);
    report.set("country", attr["country"]);
    report.set("author", attr["author"]);
    report.set("category", attr["category"]);
    report.set("url", attr["url"]);
    report.set("publishedBy", attr["publishedBy"]);
    report.set("description", attr["description"]);
    report.save(null, {
        success: function(report) {
            alert("success");
            updated = true;
        },
        error: function(){
            alert("update failed");
        }
    });
};

function save_website(){
    attr = [];
    attr["name"] = $("#w_name").val();
    attr["category"] = $("#w_cate").val();
    attr["url"] = $("#w_link").val();
    attr["description"] = $("#w_desc").val();
    attr["objectId"] = $("#hidden_objid_w").val();
    var file = $("#w_image")[0];
    if(file.files.length > 0){
      var file = file.files[0];
      var name = "photo.jpg";
     
      var parseFile = new Parse.File(name, file);
      attr["image"] = parseFile;
    }
    //console.log(attr);
    var website = new Website();
    website.id = attr["objectId"];
    website.set("name", attr["name"]);
    website.set("category", attr["category"]);
    website.set("url", attr["url"]);
    website.set("description", attr["description"]);
    website.set("image", attr["image"]);
    website.save(null, {
        success: function(website) {
            alert("success");
            // $("#myModal2").modal("hide");
            // router.navigate("editWebsites", true);
            //get updated thumbnail
            var query = new Parse.Query(Website);
            query.get(website.id, {
              success: function(result) {
                  //results.get('image').url();
                  $("#t_n_preview").attr('src',result.get('image').url());
              },
              error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and description.
              }
            });
            updated = true;
        },
        error: function(){
            alert("update failed");
        }
    });
    //console.log(attr);
};

function save_partner(){
    attr = [];
    attr["name"] = $("#p_name").val();
    attr["url"] = $("#p_link").val();
    attr["objectId"] = $("#hidden_objid_p").val();
    var file = $("#p_image")[0];
    if(file.files.length > 0){
      var file = file.files[0];
      var name = "photo.jpg";
      var parseFile = new Parse.File(name, file);
      attr["image"] = parseFile;
    }
    //console.log(attr);
    var partner = new Partner();
    partner.id = attr["objectId"];
    partner.set("name", attr["name"]);
    partner.set("url", attr["url"]);
    partner.set("image", attr["image"]);
    partner.save(null, {
        success: function(conference) {
            alert("success");
            var query = new Parse.Query(Partner);
            query.get(partner.id, {
              success: function(result) {
                  //results.get('image').url();
                  $("#t_n_preview").attr('src',result.get('image').url());
              },
              error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and description.
              }
            });
            updated = true;
        },
        error: function(){
            alert("update failed");
        }
    });
    //console.log(attr);
};


function save_About(){
    var about = new About();
    //console.log($("#edit_ab").val());
    about.id = $("#hidden_objid_a").val();
    about.set("content", $("#edit_ab").val());
    about.save(null, {
        success: function(conference) {
            alert("success");
        },
        error: function(){
            alert("update failed");
        }
    });
};


function login(){
    var template = _.template( $("#signin").html());
    bootbox.alert(template, function(result) {
        var username = $("#userID").val();
        var password = $("#password").val();
        console.log(username);
        console.log(password);
        Parse.User.logIn(username, password, {
          success: function(user) {
            // Do stuff after successful login.
            // console.log("logged in");
            // var currentUser = Parse.User.current();
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            console.log("failed");
            login();
          }
        });
    });
};


function delete_Conference(id){
       var conference = new Conference();
       conference.id = id;
       conference.destroy({
          success: function(myObject) {
            // The object was deleted from the Parse Cloud.
            alert("deleted");
            location.reload(false);
          },
          error: function(myObject, error) {
            alert("failed");
            // The delete failed.
            // error is a Parse.Error with an error code and description.
          }
        });
}

function delete_Report(id){
    //get checked checkboxs
        var report = new Report();
       report.id = id;
       report.destroy({
          success: function(myObject) {
            // The object was deleted from the Parse Cloud.
            alert("deleted");
            location.reload(false);
          },
          error: function(myObject, error) {
            alert("failed");
            // The delete failed.
            // error is a Parse.Error with an error code and description.
          }
        });
}

function delete_Website(id){
    //get checked checkboxs
    var website = new Website();
       website.id = id;
       website.destroy({
          success: function(myObject) {
            // The object was deleted from the Parse Cloud.
            alert("deleted");
            location.reload(false);
          },
          error: function(myObject, error) {
            alert("failed");
            // The delete failed.
            // error is a Parse.Error with an error code and description.
          }
        });
}

function delete_Partner(id){
    var partner = new Partner();
       partner.id = id;
       partner.destroy({
          success: function(myObject) {
            // The object was deleted from the Parse Cloud.
            alert("deleted");
            location.reload(false);
          },
          error: function(myObject, error) {
            alert("failed");
            // The delete failed.
            // error is a Parse.Error with an error code and description.
          }
        });
}