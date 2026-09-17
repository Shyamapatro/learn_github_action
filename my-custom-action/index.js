// This is the actual logic of our Custom Action!
// In an enterprise action, you would use the '@actions/core' npm package, 
// but we will keep this simple using standard Node.js environment variables.

// GitHub automatically passes all 'inputs' as environment variables starting with INPUT_
const person = process.env.INPUT_WHO_TO_GREET || 'World';

console.log(`\n======================================================`);
console.log(`🎉 HELLO ${person.toUpperCase()}!`);
console.log(`👋 This greeting is coming from your very own Custom Action!`);
console.log(`======================================================\n`);
