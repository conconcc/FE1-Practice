
import { name, greet } from './module.js';

console.log(name); // 'Module'
greet(); // 'Hello from the module!'

import defaultFunction from './module.js';
defaultFunction(); // 'Default export function'

const { name, greet } = require('./module.js');

console.log(name); // 'Module'
greet(); // 'Hello from the module!'