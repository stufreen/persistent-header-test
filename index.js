import React from 'react';
import ReactDOM from 'react-dom';
import * as Turbolinks from 'turbolinks';

console.log('JS has loaded')

// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(
//     <div className="react-component" />,
//     document.getElementById("react-component-wrapper")
//   );
// });

Turbolinks.start();

document.addEventListener("turbolinks:request-start", function (event) {
  console.log(event)
});

document.addEventListener("turbolinks:load", function () {
  ReactDOM.render(<div className="react-component" />, document.getElementById("react-component-wrapper"));
});