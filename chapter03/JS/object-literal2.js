// Set up the object

var hotel = {
  name : 'Pham',
  rooms : 120,
  booked: 77,
  checkAvailability: function(){
    return this.rooms - this.booked;
  }
};

//Update the HTML
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = rooms.checkAvailability();