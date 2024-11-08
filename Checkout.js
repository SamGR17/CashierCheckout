const barcodeNumbersInput = document.getElementById("barcodeNums");
const quantityNumberInput = document.getElementById("quantityNum");
const addToCartButton = document.getElementById("addToCartBtn");
const checkoutBtn = document.getElementById("checkoutButton");
const totalOfItems = document.getElementById("totalPrice");
const grandTotalOfItems = document.getElementById("grandTotalPrice");

const cartListedItems = document.getElementById("cartList");

//clicking the add to cart button adds an item to the cart
addToCartButton.addEventListener('click', addItemsToCart);

//clicking the checkout button gives the grand total price of the items in the cart
checkoutBtn.addEventListener('click', giveGrandPrice);

//adds an item from the object specified by the user along with the wanted quantity and price
function addItemsToCart(){
    const userBarcodeInput = barcodeNumbersInput.value;
    const userQuantityInput = quantityNumberInput.value;
    let foundItem = checkIfItemExists(userBarcodeInput);


    if(foundItem){
        totalOfItems.innerText = (parseFloat(totalOfItems.innerText) + (barcodeItems[userBarcodeInput].price * parseFloat(userQuantityInput))).toFixed(2);
        foundItem.querySelector(".itemQuantityNumber").innerText = parseFloat(userQuantityInput) + parseFloat(foundItem.querySelector(".itemQuantityNumber").innerText);

        return;
    }

    //adds in the item name
    let itemWord = document.createElement("p");
    itemWord.classList.add("nameOfListedItem");
    itemWord.innerText = barcodeItems[userBarcodeInput].name;
    
    //adds the price of the item
    let priceNum = document.createElement("p");
    priceNum.classList.add("priceOfListedItem");
    priceNum.innerText = "$" + barcodeItems[userBarcodeInput].price;

    //adds the quantity number
    let quantityNumSelected = document.createElement("p");
    quantityNumSelected.classList.add("itemQuantityNumber");
    quantityNumSelected.innerText = userQuantityInput;
    
    //creates a border around the other created p elements
    let itemContainer = document.createElement("div");
    itemContainer.classList.add("listedItemBorder");
    itemContainer.appendChild(itemWord);
    itemContainer.appendChild(priceNum);
    itemContainer.appendChild(quantityNumSelected);


    cartListedItems.appendChild(itemContainer);

    //adds the price of the new item listed to the total
   totalOfItems.innerText = (parseFloat(totalOfItems.innerText) + (barcodeItems[userBarcodeInput].price * parseFloat(userQuantityInput))).toFixed(2)
}

function checkIfItemExists(barcode){
    let cartItems = document.getElementsByClassName('listedItemBorder');
    
    for(let i = 0; i < cartItems.length; i++){
        let cartItemName = cartItems[i].querySelector(".nameOfListedItem").innerText;
        
        if(cartItemName === barcodeItems[barcode].name){
            return cartItems[i];
        }
    }

    return null;
}

function giveGrandPrice(){
    grandTotalOfItems.innerText = "Your grand total (including tax, 9.25%) is" + " $" + (parseFloat(totalOfItems.innerText) + (parseFloat(totalOfItems.innerText) * 0.0925)).toFixed(2);
}

//Every item you can purchase for checkout
const barcodeItems = {
    "689145740844": {
        name: "JavaScript Textbook",
        price: 34.95
    },
    "4549292070248": {
        name: "Photo Paper",
        price: 10.99
    },
    "092265222983": {
        name: "First Aid Kit",
        price: 20.99
    },
    "X002ELVL3J": {
        name: "Box of Pencils (50ct.)",
        price: 15.99
    },
    "860004186236": {
        name: "N95 Face Masks",
        price: 15.99
    },
    "036000214000": {
        name: "Kleenex",
        price: 3.99
    },
    "8809568749985": {
        name: "Hand Sanitizer",
        price: 7.99
    },
    "036500060480": {
        name: "Printed Paper",
        price: 9.99
    },
    "085014561877": {
        name: "Brush Pens",
        price: 10.99
    },
    "X0032YGP2T": {
        name: "Multiport Adapter",
        price: 25.99
    },
    "9780134682334": {
        name: "iOS Programming Textbook",
        price: 119.99
    },
    "718103230759": {
        name: "Spiral Notebook",
        price: 1.99
    },
    "888462022224": {
        name: "iPad Mini",
        price: 599.99
    }
}