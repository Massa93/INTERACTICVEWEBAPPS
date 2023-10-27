const year = 2050;
const personType = 'student'; // Changed variable name from 'status'
let count = 0;

if (year === 2050) {
  console.log('January', 'New Year’s Day');
  console.log('March', 'Human Rights Day');
  const month = 'April';
  console.log(month, 'Family Day');
  console.log(month, 'Freedom Day');
  count += 4;

  if (personType === 'student') { // Changed variable name here as well
    console.log('June', 'Youth Day');
    count += 1;
  }

  
  console.log('August', "Women’s Day");
  console.log('September', 'Heritage Day');
  const decemberMonth = 'December';
  console.log(decemberMonth, 'Day of Reconciliation');
  count += 3;

  personType = 'parent';
  if (personType === 'parent') { // Changed variable name here as well
    console.log(decemberMonth, 'Christmas Day');
    count += 1;
  }

  console.log(decemberMonth, 'Day of Goodwill');
  count += 1;
}

console.log('Your person type is:', personType); // Updated log message
console.log('The year is:', year);
console.log('The total holidays is:', count);
