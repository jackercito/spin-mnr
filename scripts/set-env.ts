import { writeFile } from 'fs';
import { argv } from 'yargs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
const isProd = environment === 'prod';

//const environment_file = (isProd) ? ".prod" : ".dev"

//const targetPath = './src/environments/environment' + environment_file +'.ts';
const targetPath = './src/environments/environment.base.ts';
const envConfigFile = `
export const _environment = {
  production: ${isProd},
  RETURN_URL: "${process.env.RETURN_URL}",
  CLIENT_ID: "${process.env.CLIENT_ID}",
  CLIENT_DOMAIN: "${process.env.CLIENT_DOMAIN}",
  RESPONSE_TYPE: "${process.env.RESPONSE_TYPE}",
  AUDIENCE: "${process.env.AUDIENCE}",
  REDIRECT: "${process.env.REDIRECT}",
};
`
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
