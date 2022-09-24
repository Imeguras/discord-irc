#!/usr/bin/env node

import 'fs';
import program from 'commander';
import 'path';
import 'strip-json-comments';
import 'lodash';
import * as helpers from './helpers';
import './errors';
import { version } from '../package.json';

function readJSONConfig() {
  // get CONFIG from heroku env variable
  if (process.env.CONFIG) {
    return JSON.parse(process.env.CONFIG);
  }
  console.log('Yeah... you werent able to specify the config');
  return {};
}

function run() {
  program
    .version(version)
    .option(
      '-c, --config <path>',
      'Sets the path to the config file, otherwise read from the env variable CONFIG_FILE.'
    )
    .parse(process.argv);
  helpers.createBots(readJSONConfig());
}

export default run;
