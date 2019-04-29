// 'use strict';

// function zero(a) {
//   if (a < 10) {
//     a = '0' + a;
//   }
//   return a;
// }

// function time(h, m, s) {
//   let hours = h,
//       minutes = m,
//       seconds = s;     
//   let t = setInterval(function() {
//     document.querySelector('body').textContent = zero(hours) + ':' + zero(minutes) + ':' + zero(seconds);
//     (seconds > 0) ? seconds -=1 : (seconds == 0 && minutes > 0) 
//                   ? (seconds = 59, minutes -= 1) : (seconds == 0 && minutes == 0 && hours > 0) 
//                   ? (seconds = 59, minutes = 59, hours -= 1) 
//                   : (clearInterval(t), document.querySelector('body').textContent = 'Время вышло');
//   }, 1000);
// }

// time(10, 0, 0);


'use strict';

function zero(a) {
  if (a < 10) {
    a = '0' + a;
  }
  return a;
}

setInterval(function() {
  let now = new Date();
  document.querySelector('body').textContent = zero(now.getHours()) + ':' + zero(now.getMinutes()) + 
        ':' + zero(now.getSeconds());
}, 1000);