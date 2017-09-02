angular.module('starter.services', [])

.factory('Profiles', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var profiles = [{
    id: 0,
    name: 'Anoop Kumar',
    deseg: 'Team Lead',
    face: 'img/150x165/anoop-kumar.png'
  }, {
    id: 1,
    name: 'Vijay Kumar',
    deseg: 'Project Manager',
    face: 'img/150x165/vijay-kumar.png'
  }, {
    id: 2,
	name: 'Durgesh Soni',
	deseg: 'Team Lead',
    face: 'img/150x165/durgesh-soni.png'
  }, {
    id: 3,
	 name: 'Manish Mittal',
    deseg: 'Project Manager',
    face: 'img/150x165/manish-mittal.png'
  }, {
    id: 4,
	name: 'Vinay Kumar',
	deseg: 'UI Designer',
    face: 'img/150x165/vinay-kumar.png'
  }, {
    id: 5,
	name: 'Ankit Gera',
	deseg: 'System Administrator',
    face: 'img/150x165/ankit-gera.png'
  }];

  return {
    all: function() {
      return profiles;
    },
    remove: function(id) {
      profiles.splice(profiles.indexOf(id), 1);
    },
    get: function(profileId) {
      for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id === parseInt(profileId)) {
          return profiles[i];
        }
      }
      return null;
    }
  };
})
    .factory('API', function ( $http) {
  var base = "http://35.202.90.95:8080/Wallet/";
  var base2= "http://104.155.174.157:8080/fullom/";
  //var base = "http://180.151.3.101/dbtmobile/";
  //var base2= "http://180.151.3.101/dbtmobile/";
        return {
          get_details : function (url) {
            return $http.get(base+url,
                        {
                          method : 'GET',  
                          headers:{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                        }
                        );
            
          },
          post_details2 : function (form) {
            return $http.post(base2,
                      form,
                        {
                          method : 'POST',  
                         // headers:{"Content-Type": "application/json"}
                          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                        }
                        );
            
          },
          post_details : function (form,url) {
            return $http.post(base+url,
                       form,
                        {
                          method : 'POST',  
                          headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                        }
                        );
            
          }
        }
    });
