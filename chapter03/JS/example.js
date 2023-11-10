(function(){
  // PART 1 : CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS
  // Create a hotel object using object literal syntax


  var hotel = {
    name : 'Tran',
    roomRate : 240,
    discount : 15,
    offerPrice: function(){
      var offRate = this.roomRate * ((100 - this.discount) / 100);
      return offRate;
    }
  };

  // Write out the hotel name, standard rate, and the special rate
  var hotelName, roomRate, specialRate;

  hotelName = document.getElementById('hotelName');
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name;
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
  specialRate.textContent = '$' + hotel.offerPrice();


  // PART 2 : CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER

  var expiryMSG;
  var today;
  var elEnds;

  function offerExpires(today){
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // Add 7 days times (added in millisecond)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    //Create arrays to hold the names of days/months
    dayNames = ['Sunday','monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];

    //Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    //Create the message 

  expiryMSG = 'Offer expires next';
  expiryMSG += day + '<br/>(' + date + '' + month + '' + year + ')';
  return expiryMSG;
  }

  today = new Date();
  elEnds = document.getElementById('offerEnds');
  elEnds.innerHTML = offerExpires(today);

  // finish the immediately invoked function expression

}());