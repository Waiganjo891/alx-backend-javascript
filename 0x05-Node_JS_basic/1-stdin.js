#!/usr/bin/env node

const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display welcome message
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Capture user input
rl.on('line', (input) => {
    console.log(`Your name is: ${input}`);
    rl.close();
});

// Handle the readline close event
rl.on('close', () => {
    console.log("This important software is now closing");
});

module.exports = rl;
