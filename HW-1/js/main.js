'use strict';

var a = 5;
var i;

var body = '';
for (i = 0; i < a; i++) {
    body += 'if (' + i + ' === arg) console.log(arg);';
}
var functWithIf = new Function ('arg', body);

functWithIf(1);
functWithIf(2);
functWithIf(3);
functWithIf(4);
functWithIf(5);

var newBody = '';
for (i = 0; i < a; i++) {
    newBody += 'switch (' + i + ') {case arg: console.log(arg); break; }';
}
var functWithSwitch = new Function ('arg', newBody);

functWithSwitch(1);
functWithSwitch(2);
functWithSwitch(3);
functWithSwitch(4);
functWithSwitch(5);

console.time('if');
for (i = 0; i < a; i++) {
    functWithIf(i);
}
console.timeEnd('if');

console.time('switchCase');
for (i = 0; i < a; i++) {
    functWithSwitch(i);
}
console.timeEnd('switchCase');


