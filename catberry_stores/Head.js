'use strict';

const PAGES = {
	index: {
		title: '',
		description: 'ewfe'
	},
	second: {
		title: 'second',
		description: 'second'
	}
};

class Head {

	/**
	 * Loads data from somewhere.
	 * @returns {Object} Data object.
	 */
	load() {
		return PAGES[this.$context.state];
	}
}

module.exports = Head;

