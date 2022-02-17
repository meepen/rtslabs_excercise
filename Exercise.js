module.exports.Exercise = class Exercise {
	aboveBelow(arr, threshold) {
		return {
			below: arr.filter(part => part < threshold).length,
			above: arr.filter(part => part > threshold).length
		};
	}

	stringRotation(inputString, rotationAmount) {
		// Ensure that the rotation amount is within bounds of inputString length
		rotationAmount %= inputString.length;
		return inputString.slice(-rotationAmount) + inputString.slice(0, -rotationAmount);
	}
};