const {Exercise} = require("../Exercise.js");
const assert = require("assert");

const exercise = new Exercise();

describe("aboveBelow()", () => {
	const max = 100;
	const count = 25;
	let arr = [];
	for (let i = 0; i < count; i++) {
		arr.push(Math.floor(Math.random() * max));
	}

	it("should detect when all are below", () => {
		assert.deepEqual(exercise.aboveBelow(arr, max), { above: 0, below: count });
	});
	it("should detect when all are above", () => {
		assert.deepEqual(exercise.aboveBelow(arr, -1), { above: 25, below: 0 });
	});

	it("should detect when some are equal", () => {
		let checking = arr[0];
		let amoutEqual = arr.filter(part => part === checking).length;
		let aboveBelow = exercise.aboveBelow(arr, checking);
		assert.equal(aboveBelow.below + aboveBelow.above, count - amoutEqual);
	});
});

describe("stringRotation()", () => {
	let tests = [
		{
			"what": "should not change with 0 rotation",
			"input": ["Lorem ipsum dolor sit amet", 0],
			"output": "Lorem ipsum dolor sit amet"
		},
		{
			"what": "should rotate one letter",
			"input": ["Lorem ipsum dolor sit amet", 1],
			"output": "tLorem ipsum dolor sit ame"
		},
		{
			"what": "should rotate with more than one letter",
			"input": ["Lorem ipsum dolor sit amet", 9],
			"output": " sit ametLorem ipsum dolor"
		}
	];

	for (let test of tests) {
		it(test.what, () => {
			assert.equal(exercise.stringRotation(...test.input), test.output);
		});
	}
});