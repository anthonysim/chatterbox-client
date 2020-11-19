var Friends = {
  $user: $('.username'),

  initialize: function () {

    Friends.toggleStatus();
    Friends.$user.on('click', Friends.toggleStatus);
  },

  toggleStatus: function() {
    console.log('Friends.$user', Friends.$user);
    setTimeout(function() {
      console.log($('.username'));
    }, 3000);
  }
};

// GOAL: when we click on a name, the status will change to 'friends' and it will in bold.

// messagesView
// Look at friendStatus
// if it's true, while we're rendering the page
//https://api.jquery.com/toggleclass/ https://api.jquery.com/toggleclass/

// Add a proptery for 'friendStatus' (by default it's false)
// When you click on a username
// Gets the text to find that username
// Updates the friendStatus to true
//






// toggleStatus: function() {
//   console.log('Friends.$user', Friends.$user);
//   setTimeout(function() {
//     console.log($('.username'));
//   }, 3000);
// }