document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const tour = document.getElementById('tour').value;
  
    console.log(`Email: ${email}`);
    console.log(`Selected Tour: ${tour}`);
  
    // You can add further processing here, like sending data to the server.
  
    // Close the modal after form submission
    const bookingModal = new bootstrap.Modal(document.getElementById('booking-modal'));
    bookingModal.hide();
  });
  