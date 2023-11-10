// Set up Project

var hotel = {
  name : 'Tran',
  room : 203,
  booked : 23
};

hotel.gym  = true;
hotel.pool = false;
delete hotel.booked;

// Update HTML

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;


