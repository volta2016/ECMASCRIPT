//open close principle
// these principies keep that the entities of software, class, module, function must be open for their extension but close for their modification
//Modules, function and classes can extend to new characteristics
function processPayment(price, cardDetails) {
  //logic to process the payment with the credit card
  console.log(`Processing payment of ${price} with the credit card...`);
}

//extension
// This principle say the subclasses must be suitable by their base class
// that is to say, the object of a class can be replaced by the object of an
// subclasses without effect on the correction of the program
function processPaymentwithPaypal(price, paypalDetails) {
  //logic to process the payment with the credit card
  console.log(`Processing payment of ${price} with the credit card...`);
}
