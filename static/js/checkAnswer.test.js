const { checkAnswer, changeAnswer } = require('./javascript');

describe('checkAnswer', () => {
it('should return true when the submitted answer matches the expected Java answer', () => {
changeAnswer(1);
const submittedAnswer = "int[] arr = new int[10];";
expect(checkAnswer(submittedAnswer)).toBe(true);
});

it('should return true when the submitted answer matches the expected Python answer', () => {
changeAnswer(2);
const submittedAnswer = "arr = [0] * 10";
expect(checkAnswer(submittedAnswer)).toBe(true);
});

it('should return true when the submitted answer matches the expected C answer', () => {
changeAnswer(3);
const submittedAnswer = "int arr[10] = {0};";
expect(checkAnswer(submittedAnswer)).toBe(true);
});

});
