Package.describe({
  summary: "Manipulate the DOM using CSS selectors",
  version: '2.2.4'
});

Package.onUse(function (api) {
  api.use('modules');

  // Note that you can `meteor npm install jquery` (any version) into your
  // application's node_modules directory, and the meteor/jquery package
  // will use that version instead of 1.12.1.
  api.mainModule('main.js', 'client');

  api.export('$', 'client');
  api.export('jQuery', 'client');
});
