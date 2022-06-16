// variable
const btnScan = document.querySelector("#btnA");
const btnArgent = document.querySelector("#btnB");
const list = document.querySelector("ul");

let newEntry = document.querySelector("#newItem");
let payment = document.querySelector("#payment");
let makeList = document.createElement("li");
let listOfItemBought = [];
let total = 0;

// 1st function to scan new items
function scan() {
    total = 0;
    if (newEntry.value > 0) {
        listOfItemBought.push(newEntry.value);
    } else {
        document.querySelector("#ifOk").textContent = "Please insert a valid amount !";
    }
    makeList.textContent = listOfItemBought;
    for (i = 0; i < listOfItemBought.length; i++) {
        total += parseInt(listOfItemBought[i]);
        console.log(total);
    }
    document.querySelector("#amountToPay").textContent = total + " €";
}

// 2nd function to pay
function pay() {
    let tenBill = 0;
    let fiveBill = 0;
    let oneBill = 0;

    document.querySelector("#totalDisplay").textContent = payment.value + " €";
    if (total == payment.value) {
        document.querySelector("#ifOk").textContent = "Thank you !";
        document.querySelector("#ifNeeded").textContent = "See you soon !";
    } else if (total > payment.value) {
        let toReturn = (payment.value - total) / -1;
        document.querySelector("#ifOk").textContent =
            "You didn't put enough money !";
        document.querySelector("#ifNeeded").textContent =
            "It is missing " + toReturn + " €";
    } else {
        let toReturn = payment.value - total;
        document.querySelector("#ifOk").textContent = "Thank you !";
        document.querySelector("#ifNeeded").textContent =
            "Amount returned: " + toReturn + " €";
        while (toReturn >= 10) {
            toReturn -= 10;
            tenBill += 1;
        }
        while (toReturn > 5 && toReturn < 10) {
            toReturn -= 5;
            fiveBill += 1;
        }
        while (toReturn > 0 && toReturn <= 4) {
            toReturn -= 1;
            oneBill += 1;
        }
        document.querySelector("#ten").textContent = "x" + tenBill;
        document.querySelector("#five").textContent = "x" + fiveBill;
        document.querySelector("#one").textContent = "x" + oneBill;
    }
}

// my events
btnScan.addEventListener("click", scan);
btnArgent.addEventListener("click", pay);
