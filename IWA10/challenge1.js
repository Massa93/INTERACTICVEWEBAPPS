const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: 'Day of Reconciliation',
    date: new Date(`${currentYear}-12-16`),
  },
  1: {
    id: 1,
    name: 'Workers Day',
    date: new Date(`${currentYear}-04-01`),
  },
  2: {
    id: 2,
    name: 'Day of Goodwill',
    date: new Date(`${currentYear}-12-26`),
  },
  3: {
    id: 3,
    name: 'New Year Day',
    date: new Date(`${currentYear}-01-01`),
  },
  4: {
    id: 4,
    name: 'Womens Day',
    date: new Date(`${currentYear}-08-09`),
  },
  5: {
    id: 5,
    name: 'Heritage Day',
    date: new Date(`${currentYear}-09-24`),
  },
  6: {
    id: 6,
    name: 'Christmas Day',
    date: new Date(`${currentYear}-12-25 13:25`),
  },
  7: {
    id: 7,
    name: 'Youth Day',
    date: new Date(`${currentYear}-06-16`),
  },
  8: {
    id: 8,
    name: 'Human Rights Day',
    date: new Date(`${currentYear}-03-21`),
  },
};

const christmas = 6;
const futureId = 9;

// Check if the futureId (9) holiday exists
if (holidays[futureId]) {
  console.log(holidays[futureId].name);
} else {
  console.log(`ID ${futureId} not created yet`);
}

// Create a copy of the Christmas object with changes
const copied = { ...holidays[christmas] };
copied.name = 'X-mas';
copied.date.setHours(0, 0); // Set time to midnight

// Check if the new date is earlier
const isEarlier = copied.date < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);

// Log changes made to the copied object
console.log('ID change:', holidays[christmas].id !== copied.id || copied.id);
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name);
console.log('Date change:', holidays[christmas].date.getTime() !== copied.date.getTime() || copied.date);

// Find the first and last holiday dates in the year
const holidayDates = Object.values(holidays).map(holiday => holiday.date);
const firstHoliday = new Date(Math.min(...holidayDates));
const lastHoliday = new Date(Math.max(...holidayDates));

const formatDate = date => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

console.log('The first holiday in the year as date:', formatDate(firstHoliday));
console.log('The last holiday in the year as date:', formatDate(lastHoliday));

// Generate a random holiday date
const randomHoliday = holidayDates[Math.floor(Math.random() * holidayDates.length)];
console.log('A randomly selected holiday date:', formatDate(randomHoliday));
