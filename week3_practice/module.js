export const name = 'Module';
export function greet() {
    console.log('Hello from the module!');
}


export default function() {
    console.log('Default export function');
}

module.exports = {
    "type": "module",
    greet: function() {
        console.log('Hello from the module!');
    }
};
