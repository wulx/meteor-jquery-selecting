Package.describe({
  summary: "selecting -- a jquery plugin for chained selecting, coded by CoffeeScript"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/jquery-selecting/jquery.selecting.js', 'client');
});
