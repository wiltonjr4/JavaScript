import chalk from 'chalk';
import validateURLs from './http-validation.js';
import getArchive from './index.js';

const path = process.argv;

async function processText(archivePath) {
    const result = await getArchive(archivePath[2]);

    if(path[3] === 'validate') {
        console.log(chalk.yellow('Validated Links'), await validateURLs(result))    
    } else {
       console.log(chalk.yellow('Links List'), result);
    }
}

processText(path);