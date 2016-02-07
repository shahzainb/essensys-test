'use strict';

import fetch from 'node-fetch';

export async function getData() {
  console.log('Getting Data');
  let csvData = await getCSVData();
  let columnNames;
  let finalData = [];
  
  csvData = csvData.split('\n');
  columnNames = csvData[0].split(',');
  csvData.splice(0, 1);

  csvData.forEach(item => {
    let obj = {};
    let currentLine = item.split(",");
    let length = item.replace(/,/g, '').length;
    
    columnNames.forEach((header, index) => {
      obj[header] = currentLine[index];
    });

    if (length !== 1 && length !== 0) {
      finalData.push(obj);  
    }
  });

  return finalData;
}

function getCSVData () {
  console.log('Getting CSV Data');
  return new Promise((resolve, reject) => {
    fetch('http://localhost:9966/test_csv.csv')
      .then(res => res.text())
      .then(res => {
        console.log('Got data');
        resolve(res);
      })
      .catch(err => {
        console.log(err);
      })
  });
}