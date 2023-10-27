const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = '0';

let location = 'RSA'; // Default location is South Africa
let currency = 'R'; // Default currency is Rand
let customers = 1;

let shipping;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

const totalCost = shoes + toys + shirts + batteries + pens;

if (location === 'RSA' || location === 'NAM') {
  if (totalCost >= 1000 && customers === 1) {
    shipping = 0;
  } else {
    if (location === 'RSA') {
      shipping = 400;
    } else if (location === 'NAM') {
      shipping = 600;
    } else {
      shipping = 800; // Default shipping cost for other countries
    }
  }
} else {
  console.log(BANNED_WARNING);
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  console.log('Price:', currency, totalCost + shipping);
}
