import yaml from 'js-yaml';
import { readFileSync } from 'fs';

const readTheme = (path) => yaml.load(readFileSync(path));

const theme = readTheme(process.argv[2]);

console.log(theme);