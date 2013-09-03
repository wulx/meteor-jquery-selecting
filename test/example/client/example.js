if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to example.";
  };
  Template.hello.rendered = function () {
    $('#selecting').selecting({
      debug: true,
      bare: false,
      remote: {
        url: '/example.json',
        data: {}
      }
    });
    $('#selecting_bare').selecting({
      debug: true,
      remote: {
        url: '/example.json',
        data: {}
      }
    });
  };
}
