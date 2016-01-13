function sessionFactory() {
  var authenticated = false;

  function authenticate() {
    authenticated = true;
  }

  function invalidate() {
    authenticated = false;
  }

  function isAuthenticated() {
    return authenticated;
  }

  return {
    authenticate: authenticate,
    invalidate: invalidate,
    isAuthenticated: isAuthenticated
  }
}

function constituentStoreFactory() {
  var constituent = {
          id: 1,
          name: "Mr. Bill Murray",
          image: "http://fillmurray.com/200/200",
          altImage: "Bill Murray Picture",
          code: "Constituent codes"
        }

  function get(id) {
    return constituent;
  }

  return {
    get: get
  };
}

function ConstituentController(constituentStore, constituentId) {
  this.constituent = constituentStore.get(constituentId);
}
ConstituentController.$inject = ['constituentStore', 'constituentId']

function NavbarController(session) {
  this.authenticate = session.authenticate;
  this.invalidate = session.invalidate;
  this.isAuthenticated = session.isAuthenticated;
}
NavbarController.$inject = ['session'];

angular.module('bootstrapDemo', ['sky'])
  .factory('session', sessionFactory)
  .factory('constituentStore', constituentStoreFactory)
  .controller('NavbarController', NavbarController)
  .value('constituentId',1)
  .controller('ConstituentController', ConstituentController)