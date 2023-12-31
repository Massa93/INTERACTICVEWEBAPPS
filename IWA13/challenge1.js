let state = 'idle';
let user = null;
let calculated = '1';

const logCalc = () => { 
    const isString = typeof calculated === 'string'; 
    const calculatedAsNumber = isString ? parseInt(calculated, 10) : parseFloat(calculated);
    calculated = calculatedAsNumber + 1;
}

const calcUser = () => {
  logCalc();
  if (calculated > 2) user = 'John';
  if (calculated > 2) state = 'requesting';
  if (calculated > 3) state = 'idle';
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`);
	}
}

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
