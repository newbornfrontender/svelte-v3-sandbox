import App from './App.html';

const app = new App({
  target: document.querySelector('main'),
  props: {
    msg: 'world',
  },
});

app.msg = 'everybody';

app.$destroy();
