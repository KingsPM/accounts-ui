Package.describe({
  name: 'std:accounts-ui',
  version: '1.4.0',
  summary: 'Accounts UI for React in Meteor 1.6+',
  git: 'https://github.com/kingspm/accounts-ui',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use('ecmascript');
  api.use('accounts-base');
  api.use('check');
  api.use('random');
  api.use('email');
  api.use('session');
  api.use('react-meteor-data@0.2.15');
  api.use('tmeasday:check-npm-versions@0.3.0');

  api.imply('accounts-base');

  api.use('accounts-oauth', {weak: true});
  api.use('accounts-password', {weak: true});

  api.addFiles('check-npm.js', ['client', 'server']);

  api.mainModule('main_client.js', 'client');
  api.mainModule('main_server.js', 'server');
});
