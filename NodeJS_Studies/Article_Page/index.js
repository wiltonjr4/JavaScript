import chalk from 'chalk';
import fs from 'fs';

function extractLinks(textTest) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const resultsArray = [];
    let temp;
    while((temp = regex.exec(textTest)) !== null) {
        resultsArray.push({ [temp[1]]: temp[2] })
    }
    return resultsArray.length === 0 ? 'Not exist links' : resultsArray;
}

function handleError(error){
    throw new Error(chalk.red(error.code, 'No such FILE or DIRECTORY'));
}

async function getArchive(archivePath) {
    const encoding = 'utf-8';
    try{
        const text = await fs.promises.readFile(archivePath, encoding)
        return (extractLinks(text));
    } catch(error) {
        handleError(error);
    }
}

//getArchive('./archives/text1.md');

export default getArchive;



