let menu = document.getElementById("menu-layout"),
  dropdown = document.getElementById("dropdown");
let numProduct = document.getElementById("badge"),
  totalPrice = document.getElementById("totalPrice");

function createElement(imgSrc, productPrice, productHeading) {
  let num;
  dropdown.insertAdjacentHTML(
    "afterbegin",
    `<div class = "dropdown-item d-flex">
       <img class="img-dropdown rounded" src="${imgSrc}"></img>
       <div class="ml-3 w-100">
         <h5 class="text-capitalize font-weight-bold">${productHeading}</h5>
         <div class="d-flex align-items-center justify-content-between">
         <span class="text-carrot font-weight-bold">$${productPrice}</span>
         <div>
           <button class="btn pr-0">
             <svg class="icon-drop-buy">
               <use xlink:href="img/sprite.svg#icon-shopping-cart"></use>
             </svg>
           </button>
           <button class="btn px-0 ml-3">
            <svg class="icon-drop-del">
              <use xlink:href="img/sprite.svg#icon-trash" data-remove-product></use>
            </svg></button>
          </div>
        </div>
      </div>
    </div>`
  );
  +numProduct.innerHTML++;
  num = +totalPrice.innerHTML + +productPrice;
  totalPrice.innerHTML = num.toFixed(2);
}
function removeElement(target) {
  let num;
  let elem = target.closest(".dropdown-item");
  let productPrice = elem.lastElementChild.lastElementChild.firstElementChild.innerText.slice(
    1
  );

  elem.remove();
  +numProduct.innerHTML--;
  num = +totalPrice.innerHTML - +productPrice;
  totalPrice.innerHTML = num.toFixed(2);
}

menu.onclick = function(e) {
  let target = e.target;

  if (target.dataset.addTo == undefined) return;

  let imgSrc = target.closest(".card").firstElementChild.getAttribute("src");
  let productPrice = target.previousElementSibling.innerText.slice(1);
  let productHeading = target.closest(".card-body").firstElementChild.innerText;

  createElement(imgSrc, productPrice, productHeading);
};
dropdown.onclick = function(e) {
  let target = e.target;

  if (target.dataset.removeProduct == undefined) return;

  removeElement(target);
};
