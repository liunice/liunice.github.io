const fs = require('fs');
const path = require('path');

// load env file
require('dotenv').config();
const localEnvPath = path.resolve(__dirname, '.env.local');
if (fs.existsSync(localEnvPath)) {
  require('dotenv').config({ path: localEnvPath });
}

const configPath = path.resolve(__dirname, '_config.next.yml');
const tempConfigPath = path.resolve(__dirname, '_config.next.temp.yml');

// read original config file
let content = fs.readFileSync(configPath, 'utf8');

// replace placeholders ${***} with actual env value
// VALINE_APP_ID
const valineAppId = process.env.VALINE_APP_ID || '';
var updatedContent = content.replace(/\${VALINE_APP_ID}/g, valineAppId);
// VALINE_APP_KEY
const valineAppKey = process.env.VALINE_APP_KEY || '';
updatedContent = updatedContent.replace(/\${VALINE_APP_KEY}/g, valineAppKey);

// write to temp config file
fs.writeFileSync(tempConfigPath, updatedContent, 'utf8');
console.log('Successfully created temporary _config.next.temp.yml');