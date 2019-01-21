import App from './App.html';

new App({
  target: document.querySelector('main'),
  props: {
    html: '<b>Hello world!</b>'
  },
});
