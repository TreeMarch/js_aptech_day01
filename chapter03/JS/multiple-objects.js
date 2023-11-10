// Create the template for objects that are hotels 
function Hotel(name, rooms, booked){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function(){
    return this.rooms - this.booked;
  };
}

// Create two hotel objects
  // this.name = name;
  var tranHotel = new Hotel('Tran', 40,25);
  var phamHotel = new Hotel('Pham', 120,77);

  //Update the HTML for the page
  var details1 = tranHotel.name + 'rooms';
      details1 += tranHotel.checkAvailability();
  var elHotel1 = document.getElementById('hotel1');
  elHotel1.textContent = details1;

  var details2 = phamHotel.name + 'rooms';
      details2 += phamHotel.checkAvailability();
  var elHotel2 = document.getElementById('hotel2');
  elHotel2.textContent = details2;

