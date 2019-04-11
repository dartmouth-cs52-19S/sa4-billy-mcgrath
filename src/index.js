// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let count = 0;

function increment() {
  $('#main').html(`You've been on this page for ${count} seconds.`);
  count += 1;
}

setInterval(increment, 1000);
