const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const colLength = 100;
const rowLength = 100;
let columnHeaders = [];
let rowHeaders = []

function drawGraph() {
    fillHeaders(colLength, rowLength)
    constructGrid()
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
        let row = table.insertRow(y);
        for (let x = 0; x < tableWidth; x++) {
            let cell = row.insertCell(x);
            if (y < 1 && x > 0) {
                cell.innerHTML = columnHeaders[x-1]
            }
            if (x < 1 && y > 0) {
                cell.innerHTML = rowHeaders[y]
            }
            if (y > 0 && x > 0) {
                cell.innerHTML = `<input class="input-cell" type="text" id="${columnHeaders[x - 1]}${rowHeaders[y-1]} placeholder=""/>`
            }
            
        } 
    }
}

document.addEventListener('click', function (event) {
    console.log(event)
    event.target.addEventListener("input", function (event) {
        console.log("input: ", event)
    })
})
