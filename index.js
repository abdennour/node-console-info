const data = {
 icon: '\u2139',

 blueBg: "\x1b[44m",
 blueFg: "\x1b[34m",
 whiteFg: "\x1b[37m",

 reset: "\x1b[0m",
 reverse: "\x1b[7m"
};

console.info = function() {
 console.log(data.blueBg + data.whiteFg, data.icon, data.reset, data.blueFg, ...arguments, data.reset);
};
module.exports = console.info ;
