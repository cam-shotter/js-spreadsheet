const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const colLength = 100;
const rowLength = 100;
let columnHeaders = [];
let rowHeaders = []

// document.onload(drawGraph());

function drawGraph() {
    fillHeaders(colLength, rowLength)
    constructGrid(colLength, rowLength)
    console.log("row: ", rowHeaders);
    console.log("col: ", columnHeaders);
}

function fillHeaders(columnLength, rowLength) {
    for (let x = 0; x < columnLength; x++) {
        columnHeaders.push(stringAt(x));
    }

    for (let y = 0; y < rowLength; y++) {
        rowHeaders.push(y);
    }
}

function stringAt(index) {
    let str = '';
    let cindex = index;
    while (cindex >= alphabet.length) {
        cindex /= alphabet.length;
        cindex -= 1;
        str += alphabet[parseInt(cindex, 10) % alphabet.length];
    }
    const last = index % alphabet.length;
    str += alphabet[last];
    return str;
}

function constructGrid() {
    let table = document.getElementById('spreadsheetCanvas');
    let tableWidth = colLength+1;
    let tableHeight = rowLength+1;
    for (let y = 0; y < tableHeight; y++) {
        if (y === 0) {
            let header = table.createTHead();
            let row = table.insertRow(y);
            for (let x = 0; x < tableWidth; x++) {
                let cell = row.insertCell(x);
                if (x === 0) {
                    return;
                } else {
                    cell.innerHTML = columnHeaders[y]
                }
            }
        } else {
            let row = table.insertRow(y);
            for (let x = 0; x < tableWidth; x++) {
                let cell = row.insertCell(x);
                if (x === 0) {
                    cell.innerHTML = rowHeaders[x];
                }
            }
        }
    }
}
