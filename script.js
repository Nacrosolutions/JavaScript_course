

// const [markMass, johnMass, markHeight, johnHeight] = [95, 85, 1.88, 1.76];
// console.log(markMass, johnMass, markHeight, johnHeight)

// const [markBMI, johnBMI] = [markMass / (markHeight ** 2), johnMass / (johnHeight ** 2)];

// console.log(markBMI > johnBMI ? `Mark has a higher BMI than john ,Mark BMI  ${markBMI}` : `John has higher BMI than Mark , John BMI ${johnBMI}, Mark BMI ${markBMI}`)

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI, markBMI, johnBMI)



// const firstName = 'Nabham';
// const lastName = 'Sharma';

// const birthYear = 1998;
// const year = 2037;
// const nabham = `I'm ${firstName} ${lastName} and my age is ${year - birthYear}`
// console.log(nabham)

// console.log('String with \n\ nabham')
// console.log(`string
// is
// `)


// const age = 15;
// const isOldEnough = age >= 18
// console.log(isOldEnough)
// if (isOldEnough) {
//   console.log(`Sarah can start driving as her age is above 18 `)
// }

// const birthYear = 1998;

// if (birthYear <= 2000) {
//   let centuray = 20;
// } else {
//   let centuray = 21;
// }


// Strings to Number
// const inputYear = '2001'

// console.log(typeof inputYear, inputYear)

// console.log(typeof Number(inputYear), inputYear, Number(inputYear));

// console.log('23' - '10' - 3)

// console.log('23' ** 2)

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Nabham'))
// console.log(Boolean({}))
// console.log(Boolean(''))


const money = 0
// if (money) {
//   console.log('Person is poor!!!')
// }
// else {
//   console.log('You should get a job!')
// }

// let height = 0;
// if (height) {
//   console.log('afew')
// } else {
//   console.log('Height is undefined')
// }


// const age = 18;

// if (age === 18) console.log('Yaa! ')

// const favourite = Number(prompt("Whats your favourite number"))
// console.log(typeof favourite)

// if (favourite === 23) {
//   console.log('you ')
// }

// else if (favourite === 7) {
//   console.log('7 also is a cool number')
// } else {
//   console.log('Number is not a 7 or 27 ')
// }






// const hasDriverLicence = true;
// const hasGoodVision = false;


// // AND OR operatio

// console.log(hasDriverLicence || !hasGoodVision)

// const shoulDrive = hasDriverLicence || hasGoodVision;

// if (shoulDrive) {
//   console.log('She can drive')
// }
// else {
//   console.log(`she can't drive`)
// }

// const isTired = true;
// console.log(hasDriverLicence && hasGoodVision || isTired)



const dolphins = 96 + 108 + 89;
const koalas = 88 + 91 + 110;

const avgDolphins = dolphins / 3;
const avgKolas = koalas / 3;
console.log(dolphins, koalas, `Avg of Dolphins ${avgDolphins} and avg of kolas ${avgKolas}`)

if (avgDolphins > avgKolas && avgDolphins > 100) {
  console.log('Dolphins Wins !')
}
else if (avgDolphins < avgKolas && avgKolas > 100) {
  console.log(' Koalas wins!')
}
else if (avgDolphins === avgKolas && avgDolphins > 100 && avgKolas > 100) {
  console.log('Match is Drawn ');
}
else {
  console.log('No one wins the trophy')
}







