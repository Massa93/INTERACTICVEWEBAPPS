// scripts.js

/*import company form 'configuration'
import year form 'configuration'*/

import{company, year} from './configuration.js';

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;