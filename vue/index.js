const fs = require('fs');
const { parse } = require('@vue/compiler-sfc');
const babelParser = require('@babel/parser');

console.log("Current working directory:", process.cwd());

const filename = __dirname + '/dummy.vue'; // Change this to the path of your Vue file

const code = fs.readFileSync(filename, 'utf8');
const { descriptor } = parse(code);

if (descriptor.script) {
    const scriptContent = descriptor.script.content;
    const ast = babelParser.parse(scriptContent, {
        sourceType: 'module', // Change this depending on your module system
        plugins: ['typescript'] // This assumes the script uses TypeScript
    });
    console.log(JSON.stringify(ast, null, 2));
} else {
    console.log("No script tag found in the Vue file.");
}
