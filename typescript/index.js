const fs = require('fs');
const babelParser = require('@babel/parser');

const filename = __dirname + '/dummy.ts'; // Change this to the path of your TypeScript file

const code = fs.readFileSync(filename, 'utf8');
const ast = babelParser.parse(code, {
    sourceType: 'module', // For ES modules; use 'script' for scripts
    plugins: ['typescript']
});

console.log(JSON.stringify(ast, null, 2));
