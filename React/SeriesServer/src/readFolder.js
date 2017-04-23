const fs = require('fs');

module.exports = function readFolderContents(folder) {
    const seriesNames = fs.readdirSync(folder);
    const series = getSeries(folder, seriesNames);
    return series;
}

function getSeries(folder, seriesNames) {
    let contentsOfFolder = [];
    let series = [];
    seriesNames.forEach(show => {
       series.push({
           show_name: show,
           list_of_episodes: fs.readdirSync(folder + "/" + show) 
       })
    })
    return series;
}