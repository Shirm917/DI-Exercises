// Exercise Function
// You are the manager of the chocolate factory, in order to make your clients happy you will send them a gift depending on their quantity of chocolate box they ordered.
// Create a function named checkQuantityOrder, that takes one parameter, the quantity the user ordered.
// If the client ordered more between 5 and 10 boxes (included) console.log "Dear client, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear client, you won a bottle of wine"
// If the client ordered more than 20 boxes ( not included) console.log "Dear client, you won a trip to Paris"
function checkQuantityOrder(boxes) {
    if (boxes > 5 && boxes <= 10) {
        console.log("Dear client, you won a bouquet of flowers");
    } else if (boxes > 10 && boxes <= 20) {
        console.log("Dear client, you won a bottle of wine");
    } else if (boxes > 20) {
    console.log("Dear client, you won a trip to Paris");
    }
}
// Call the function a few times,
checkQuantityOrder(8);
checkQuantityOrder(15);
checkQuantityOrder(30);
// BONUS : add a parameter to the function, the name of the client. If you don't know the name of the client, call him/her "client"
// If the client ordered more between 5 and 10 boxes (included) console.log "Dear <name_client>, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear <name_client>, you won a bottle of wine"
// If the client ordered more than 20 boxes (not included) console.log "Dear <name_client>, you won a trip to Paris"
function checkQuantityOrder2(boxes, clientName = "Client") {
    if (boxes > 5 && boxes <= 10) {
        console.log(`Dear ${clientName}, you won a bouquet of flowers`);
    } else if (boxes > 10 && boxes <= 20) {
        console.log(`Dear ${clientName}, you won a bottle of wine`);
    } else if (boxes >= 20) {
    console.log(`Dear ${clientName}, you won a trip to Paris`);
    }
}
// Call the function a few times,
checkQuantityOrder2(8, "John");
checkQuantityOrder2(15);
checkQuantityOrder2(30, "David");

// Exercise 2 : ONE FUNCTION ONE ACTION

// Modify the function checkQuantityOrder, so that instead of console logging "Dear client, you won a ..." it will return the gift iself(for example the flowers, or the bouquet).
function checkQuantityOrder3(boxes) {
    let gift;
    if (boxes > 5 && boxes <= 10) {
        gift = "Bouquet";
    } else if (boxes > 10 && boxes <= 20) {
        gift = "Wine Bottle";
    } else if (boxes >= 20) {
        gift = "Paris Trip";
    }
    return gift;
}

// 2. Create a function sendGift, it retriEves the result of the function checkQuantityOrder and console log "Dear client, you won a ..."
function sendGift (x) {
    const gifts = checkQuantityOrder3(x);
    const prize = `Dear Client you won a ${gifts}`;
    console.log(prize);
}

sendGift(8);
sendGift(14);
sendGift(22);
