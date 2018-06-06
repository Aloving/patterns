// First variant
class Observable {
	constructor(source) {
		this.source = source.split('');
		this.result = this.source;
	}

	filter(predicate) {
		this.result = this.result.filter(predicate);
		return this;
	}

	map(callback) {
		this.result = this.result.map(callback);
		return this;
	}

	subscribe(next) {
		for (let item of this.result) {
			next(item);
		}
	}
}

new Observable('Observable')
	.map(letter => letter.toUpperCase())
	.filter(letter => 'OBS'.includes(letter))
	.subscribe(console.log)
