// A simple food ordering system:


let restaurantName = "Harika's 5-star Hotel"
let foodItemName = "Burger"
let pricePerItem = 80
let Quantity = 2
let customerName = "Shiva"
let isDeliveryNeeded = false

function printOrderSummary() {
    console.log("   Order Summary")
    console.log("Restaurant:" + restaurantName)
    console.log("Customer: " + customerName)
    console.log("Item: " + foodItemName)
    console.log("Quantity: " + Quantity)
    console.log("Price per item: " + pricePerItem)
    console.log("Total: ₹" + (pricePerItem*Quantity))
    console.log("Delivery Needed: " + isDeliveryNeeded ? "Yes" : "No")
}

printOrderSummary()



