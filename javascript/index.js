const fs = require('fs');
const babelParser = require('@babel/parser');

// Function to read the JavaScript file and parse it into an AST
function parseJavaScriptFile(filePath) {
    try {
        const code = fs.readFileSync(filePath, 'utf8');
        const ast = babelParser.parse(code, {
            sourceType: 'module',  // Consider the code as an ES module
            plugins: [
                'jsx',          // If you're dealing with JSX
                'typescript'    // If the code might have TypeScript
            ]
        });
        console.log(JSON.stringify(ast, null, 2));
    } catch (error) {
        console.error('Error reading or parsing file:', error);
    }
}

// Path to the JavaScript file
const filePath = __dirname + '/dummy.js';

// Parse the file
parseJavaScriptFile(filePath);
