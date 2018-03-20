import 'popper.js';
import 'bootstrap';
import 'bootstrap/scss/bootstrap';

import {Config} from './config';

$(function () {
  let loaderText: string = 'Hello Console by jquery ready!';
  console.log(loaderText);
  Config.loader();
});
