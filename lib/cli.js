#!/usr/bin/env node

import fs from 'fs';
import program from 'commander';
import path from 'path';
import stripJsonComments from 'strip-json-comments';
import { endsWith } from 'lodash';
import * as helpers from './helpers';
import { ConfigurationError } from './errors';
import { version } from '../package.json';

function readJSONConfig() {
  // get CONFIG from heroku env variable
  if (process.env.CONFIG) {
    return JSON.parse(process.env.CONFIG);
  }
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
