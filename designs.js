// Select color input
// Select size input
var height, width, color;

const inputHeight = document.querySelector('#inputHeight');
const inputWidth = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');
var selectSize = sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    height = inputHeight.value;
    width = inputWidth.value;
    makeGrid(height, width);    // When size is submitted by the user, call makeGrid()
});


/**
* @description function to create a grid of squares 
* @param int $w - number of squares across the width of the grid
* @param int $h - number of squares across the height of the grid
*/
function makeGrid(h, w) {
    // Your code goes here!
    //document.querySelector('tr').remove;
    let clearRow = document.querySelectorAll('tr');
    let clearTable = document.querySelectorAll('td');
    clearRow.forEach(function(tableRow) {
        tableRow.remove();
    })
    clearTable.forEach(function(tableContent) {
        tableContent.remove();
    })


    for (var r = 1; r <= h; r++) {
        var htmlToAdd = '<tr id=row' + r + '></tr>'
        document.querySelector('#pixelCanvas').insertAdjacentHTML("beforeend", htmlToAdd);
        for (var c = 1; c <= w; c++) {
            document.querySelector('#row' +r).insertAdjacentHTML("afterbegin", '<td></td>');
        }
    }

    let grids = document.querySelectorAll('td');
    grids.forEach(function(grid) {
        grid.addEventListener('click', function() {
            color = document.querySelector('#colorPicker').value;
            if (grid.hasAttribute('style')) {
                grid.removeAttribute('style')
            } else {
                grid.style.backgroundColor = color;
            }
        });
    });

}
