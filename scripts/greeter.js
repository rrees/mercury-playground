
var hg = require('mercury/index.js');
var h = require('mercury/index.js').h;

function HelloApp() {
	return hg.struct({});
}

HelloApp.render = function render() {
	return h('h1', 'Hello world')
}

if(document.getElementById('hello')) {
	hg.app(document.body, HelloApp(), HelloApp.render);
}

function GreetingsApp() {
    var state = hg.struct({
        text: hg.value(''),
        handles: hg.value(null)
    });

	state.handles.set(
		hg.handles({
			change: function (state, data) {
				state.text.set(data.text);
			}
		}, state));

    return state;
}

GreetingsApp.render = function render(state) {
    return h('div', [
        h('p', [
            'Greetings, ',
			h('input', {
				value: state.text,
				name: 'text',
				type: 'text',
				placeholder: 'Enter your name',
				'ev-event': hg.changeEvent(state.handles.change)
				})
        ]),
        h('p', 'Hello, ' + state.text)

    ]);
};

if(document.getElementById('greetings')) {
	hg.app(document.body, GreetingsApp(), GreetingsApp.render);
}