import fetch from 'node-fetch';

function handlingError(error) {
    throw new Error(error.message);
}

async function checkStatus(urlsArray) {
    try{
        const arrayStatus = await Promise.all(urlsArray.map(async url => {
            const res = await fetch(url)
            return res.status;
        }))
        return arrayStatus;
    } catch(error) {
        handlingError(error);
    }
}

function generateURLsArray(linksArray) {
    return linksArray.map(linkObject => Object.values(linkObject).join())
}

async function validateURLs(linksArray) {
    const links = generateURLsArray(linksArray);
    const linkStatus = await checkStatus(links);
    
    const results = linksArray.map((object, index) => ({
        ...object, status: linkStatus[index]
    }))

    return results;
}

export default validateURLs;