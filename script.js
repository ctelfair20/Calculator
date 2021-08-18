// Goal: dymanically insert calculator buttons 

/*
createRow(numOfRows)
 - adds rows to the calculator
 param = the number of rows to create
 */

function createRow(numOfRows) {
    // access parent element
    const rowContainer = document.querySelector('.calculator-buttons-container');
    // iterate over number
    for (let i = 1; i <= numOfRows; i++) {
        // create ul element
        const rowList = document.createElement('ul');
        // give ul element a class of row and an id of i
        rowList.setAttribute('id', `${i}`);
        rowList.className = 'row';
        // append ul element to parent
        rowContainer.appendChild(rowList);
    }
}

createRow(5);

// - create a function that adds buttons to the rows
function createButton(numOfButtons, parentEle) {
    //

}