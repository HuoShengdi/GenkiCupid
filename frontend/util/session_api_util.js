module.exports = {
  signUp (user, success, error) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      dataType: 'json',
      data: {user},
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },
  logIn (user, success, error){
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    });
  },
  logOut (success){
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      error: function () {
        console.log("Logout error: SessionApiUtil#logout");
      }
    });
  }
};
