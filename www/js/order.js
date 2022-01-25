if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    function removeCartItem(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }
    
    function quantityChanged(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('foodtitle')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('homebtmlogo')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    var ttotal;
    var taxtotal;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
    taxtotal = total + (total *0.165);
    document.getElementsByClassName('cart-totaltax')[0].innerText = '$' + taxtotal;
    ttotal = taxtotal+500;
    document.getElementsByClassName('cart-totaltdel')[0].innerText = '$' + ttotal;
    return ttotal;
}
}
function PassValue(){
    var cost = updateCartTotal();
    localStorage.setItem("moneyvalue", cost);
    return false;

}

function ToggleDisplay1(){ // SHows Delivery Section when user clicks next
    const delivery = document.querySelector(".delivery");
    delivery.style.display = delivery.style.display === 'block' ? 'none': 'block';
}

function ToggleDisplay2(){ // SHows payment section when user clicks next
    const delivery = document.querySelector(".paymentpart");
    delivery.style.display = delivery.style.display === 'block' ? 'none': 'block';
}

function ToggleDisplay3(){
    const delivery = document.querySelector(".orderconf");
    delivery.style.display = delivery.style.display === 'block' ? 'none': 'block';
}

function CompleteFormValidation() {
    
    let fname = document.Deliveryform.name.value;
    let adr1 = document.Deliveryform.line1.value;
    let adr2 = document.Deliveryform.line2.value;
    let ct = document.Deliveryform.city.value;
    let parish = document.Deliveryform.parish.value;
    let phnum = document.Deliveryform.phone.value;
    let checker = true;
    if (fname == null || fname ==""){
        alert("Name should not be blank");
        checker = false;
    }
    if (adr1 == null || adr1 == "")
    {
        alert("Address Line 1 should not be blank");
        checker = false;
    }
    if (ct == null || ct == ""){
        alert("City should not be blank");
        checker = false;
    }
    if (parish == null || parish == ""){
        alert("Please enter your parish");
        checker = false;
    }
    if (phnum == null || phnum == ""){
        alert("Please enter your phone number");
        checker = false;
    }
    if (isNaN(phnum)){
        alert("Please ensure that the phone number includes no text");
        checker = false;
    }
    if(checker == true){
        window.location.href = '#payment';
        ToggleDisplay2();
        
    }
}

function ValidatePayment(){
    let CardNumber = document.Payment.Card.value;
    let Security = document.Payment.CVV.value;
    let Expiry = document.Payment.Expiration.value;
    let checker = true;
    

    if (CardNumber == null || CardNumber == ""){
        alert("Please enter your card number");
        checker = false;
    }
    if (Expiry == null || Expiry == ""){
        alert("Please enter your expiry date");
        checker = false;
    }
    if (Security == null || Security == ""){
        alert("Please enter your security code");
        checker = false;
    }
    if(isNaN(CardNumber)){
        alert("Please ensure that the card number includes no letters");
        checker = false;
    }
    if(isNaN(Security)){
        alert("Please ensure that the expiry date includes no letters");
        checker = false;
    }
    if(isNaN(Expiry)){
        alert("Please ensure that the Security Code includes no letters")
        checker = false;
    }
    if(checker == true){
        var datee = new Date();
        alert("Order placed Successfully! Completed at " + datee);
        window.location.href='index.html';
    }
}
