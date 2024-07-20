const fs = require('fs');
const path = require('path');

// Path to your JSON file
const jsonFilePath = path.join(__dirname, 'fullProtocol.json');
// Path to the new JS file
const jsFilePath = path.join(__dirname, 'canonicalProtocol.js');

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  // Parse JSON data
  const jsonData = JSON.parse(data);

  // Function to convert JSON object to string with unquoted keys
  const convertObjectToString = (obj) => {
    let str = '{\n';
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        str += `  ${key}: "${obj[key]}",\n`;
      }
    }
    str = str.slice(0, -2); // Remove the trailing comma and newline
    str += '\n}';
    return str;
  };

  // Create the JavaScript file content with unquoted keys
  let jsContent = 'const canonicalProtocol = [\n';
  jsonData.forEach((item) => {
    jsContent += `${convertObjectToString(item)},\n`;
  });
  jsContent = jsContent.slice(0, -2); // Remove the trailing comma and newline
  jsContent += '\n];\n\nexport default canonicalProtocol;\n';

  // Write to the new JS file
  fs.writeFile(jsFilePath, jsContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing JS file:', err);
    } else {
      console.log('Successfully converted JSON to JS with unquoted keys');
    }
  });
});
