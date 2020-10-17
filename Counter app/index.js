/**To clone rows */
let first_row = document.querySelector('.row');
for (let i = 0; i < 3; i++) {
    let new_row = first_row.cloneNode(true);
    first_row.parentNode.appendChild(new_row);
    new_row.setAttribute('id', i + 2);
}

let totalProducts = document.getElementById('nmb-product-txt');
let nmbItemTxt = document.querySelectorAll('.nmb-item-txt');
let nmbItemDiv = document.querySelectorAll('.nmb-item-div');
let minusBtn = document.querySelectorAll('.minus-btn');

/**add event listener for row, then check if the clicked item is the button (+ or -) or one of it children (div, p, ...) */
document.querySelectorAll('.row').forEach(row => {
    row.addEventListener('click', (e) => {
        let id = row.getAttribute('id') - 1;
        /**Here we check if the clicked item is plus button or one of it children */
        if (row.children.namedItem('signs').children.namedItem('plus-btn').contains(e.target)) {
            if (nmbItemTxt[id].innerText === "Zero") {
                nmbItemTxt[id].innerText = "1";
                totalProducts.innerText = +totalProducts.innerText + 1;
                nmbItemDiv[id].classList = ('nmb-item-div-active');
                minusBtn[id].classList.remove('not-valid');
            }
            else
            nmbItemTxt[id].innerText = +nmbItemTxt[id].innerText + 1;
        }
            
            /**Here we check if the clicked item is minus button or one of it children */
        else if (row.children.namedItem('signs').children.namedItem('minus-btn').contains(e.target)) {
            if (nmbItemTxt[id].innerText !== "Zero") {
                if (nmbItemTxt[id].innerText === "1") {
                    nmbItemTxt[id].innerText = "Zero";
                    totalProducts.innerText = +totalProducts.innerText - 1;
                    nmbItemDiv[id].classList = ('nmb-item-div');
                    minusBtn[id].classList.add('not-valid');
                } else
                    nmbItemTxt[id].innerText = +nmbItemTxt[id].innerText - 1;
            }
        }
    });
});

document.getElementById('reset-btn').addEventListener('click',(e)=>{
    totalProducts.innerText='0';
    nmbItemTxt.forEach(txt => txt.innerText ='Zero');
    nmbItemDiv.forEach(div=> div.classList ="nmb-item-div");
    minusBtn.forEach(btn => btn.classList.add('not-valid'));
    // ??? is it better to loop on the rows, not every element type one by one (like: edit p tags then divs then buttons.)
});



/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////

// plusBtn.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         if (nmbItemTxt.innerText === "Zero") {
//             nmbItemTxt.innerText = "1";
//             totalProducts.innerText = +totalProducts.innerText + 1;
//             nmbItemDiv.classList = ('nmb-item-div-active');
//             minusBtn.classList.remove('not-valid');
//         }
//         else
//             nmbItemTxt.innerText = +nmbItemTxt.innerText + 1;
//     });
// }

// );



// minusBtn.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         if (nmbItemTxt.innerText !== "Zero") {
//             if (nmbItemTxt.innerText === "1") {
//                 nmbItemTxt.innerText = "Zero";
//                 totalProducts.innerText = +totalProducts.innerText - 1;
//                 nmbItemDiv.classList = ('nmb-item-div');
//                 minusBtn.classList.add('not-valid');
//             } else
//                 nmbItemTxt.innerText = +nmbItemTxt.innerText - 1;
//         }
//     })
// });
