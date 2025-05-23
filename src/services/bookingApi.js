// src/services/bookingApi.js

let bookings = [];

export const getBookings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...bookings]);
    }, 300);
  });
};

export const findBookingById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Current bookings:', bookings)
      const found = bookings.find(b => String(b.id) === String(id))
      resolve(found || null)
    }, 300)
  })
}


export const addBooking = (newBooking) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bookingWithId = { id: String(Date.now()), ...newBooking };
      bookings.push(bookingWithId);
      resolve(bookingWithId);
    }, 500);
  });
};

export const deleteBooking = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      bookings = bookings.filter((b) => b.id !== id);
      resolve(id);
    }, 500);
  });
};

export const updateBooking = (id, updatedData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = bookings.findIndex((b) => b.id === id);
      if (index !== -1) {
        bookings[index] = { ...bookings[index], ...updatedData };
        resolve(bookings[index]);
      } else {
        reject("Booking not found");
      }
    }, 500);
  });
};
