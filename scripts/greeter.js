
var hg = require('mercury/index.js');
var h = require('mercury/index.js').h;

function App() {
	return hg.struct({});
}

App.render = function render() {
	return h('h1', 'Hello world')
}

console.log(hg);

hg.app(document.body, App(), App.render);