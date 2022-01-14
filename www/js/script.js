function DeliveryFormValidation() {
    let fname = document.Deliveryform.Name.value;
    let adr1 = document.Deliveryform.Address1.value;
    let adr2 = document.Deliveryform.Address2.value;
    let ct = document.Deliveryform.City.value;
    let parish = document.Deliveryform.Parish.value;
    let phnum = document.Deliveryform.PhoneNumber.value;
    let errortxt = "Please ";
    if (fname == null || fname ==""){
        alert("Name should not be blank");
    }
    if (adr1 == null || adr1 == "")
    {
        alert("Address Line 1 should not be blank");
    }
    if (ct == null || ct == ""){
        alert("City should not be blank");
    }
    if (parish == null || parish == ""){
        alert("Please enter your parish");
    }
    if (phnum == null || phnum == ""){
        alert("Please enter your phone number");
    }
    if (isNaN(phnum)){
        alert("Please ensure that the phone number includes no text");
    }
    return false;
}



function KFCMenu() { // Function for KFC Menu
    document.getElementById("fit1").innerHTML = "Family 12 - $5,300.00";
    document.getElementById("fit2").innerHTML = "Big Bucket - $3,985.00";
    document.getElementById("fit3").innerHTML = "Small Popcorn Chicken Combo - $500.00";
    let food1 = document.getElementById("food1").value = 5300;
    let food2 = document.getElementById("food2").value = 3985;
    let food3 = document.getElementById("food3").value = 500;

    

    document.getElementById("costprice").innerHTML = "$placeholder";
}

function DominoMenu() { // Function for Dominos Menu
    document.getElementById("fit1").innerHTML = "Large Pepperoni Pizza - $3,300.00";
    document.getElementById("fit2").innerHTML = "Hawaiian Pizza - $3,985.00";
    document.getElementById("fit3").innerHTML = "Mozzarella Stick Combo - $1,500.00";
    document.getElementById("food1").value = 5300;
}

function PizzaHutMenu() { // Function for Pizza Hut Menu
    document.getElementById("fit1").innerHTML = "Dealicious Single - $1,600.00";
    document.getElementById("fit2").innerHTML = "Dealicious Double - $3,250.00";
    document.getElementById("fit3").innerHTML = "Barbeque Chicken Pizza - $2,750.00";
    document.getElementById("food1").value = 5300;
}