if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to example.";
  };
  Template.hello.rendered = function () {
    $('#selecting').selecting({
      bare: false,
      remote: {
        url: '/example.json',
        data: {}
      }
    });
    $('#selecting_bare').selecting({
      remote: {
        url: '/example.json',
        data: {}
      }
    });
  };
}
