

const [markMass, johnMass, markHeight, johnHeight] = [95, 85, 1.88, 1.76];
console.log(markMass, johnMass, markHeight, johnHeight)

const [markBMI, johnBMI] = [markMass / (markHeight ** 2), johnMass / (johnHeight ** 2)];

console.log(markBMI > johnBMI ? 'Mark has a higher BMI than john' : 'Mark has low BMI tha John')

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI, markBMI, johnBMI)