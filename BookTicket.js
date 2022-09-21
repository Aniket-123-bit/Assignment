var prompt = require('prompt-sync')();
class BookTicket {
    noOfGuest;
    constructor(noOfGuest) {
      this.noOfGuest = noOfGuest;
    }
    setNoOfGuest = (noOfGuest) => {
      this.noOfGuest = noOfGuest;
    };
    viewTicket = (price) => {
      let ticket = {
        noOfGuest: this.noOfGuest,
        price: price,
      };
      console.log(ticket);
    };
  
    addDetails = (noOfGuest) => {
      let totalPrice = 0;
      for (let i = 0; i < noOfGuest; i++) {
        //console.log("enter age of each person:");
        let age = prompt(" enter age of each person: ");
        console.log(age);
        if (age <= 2) {
          totalPrice += 0;
        } else if (age > 2 && age < 18) {
          totalPrice += 100;
        } else if (age >= 18 && age < 60) {
          totalPrice += 500;
        } else if (age >= 60) {
          totalPrice += 300;
        } else {
          totalPrice += 0;
        }
      }
      console.log("totalPrice", totalPrice);
      return totalPrice;
    };
  }
  const details = new BookTicket();
  
  let guest = parseInt(prompt("enter no of guest: "));
  details.setNoOfGuest(guest);
  console.log("no of guest: ", guest);
  let price = details.addDetails(details.noOfGuest);
  console.log("viewTicket");
  details.viewTicket(price);