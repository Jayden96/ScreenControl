document.addEventListener('DOMContentLoaded', function() {
    const screensList = document.getElementById('screens-list');

    // Example screens data
    const screens = [
        { id: 1, name: 'Screen 1', location: 'Main Street', price: '100' },
        { id: 2, name: 'Screen 2', location: 'Second Street', price: '150' },
        // Add more screens as needed
    ];

    screens.forEach(screen => {
        const screenElement = document.createElement('div');
        screenElement.classList.add('screen-item');
        screenElement.innerHTML = `
            <h3>${screen.name}</h3>
            <p>Location: ${screen.location}</p>
            <p>Price: $${screen.price}</p>
            <button class="book-slot-btn" onclick="bookSlot(${screen.id})">Book a Slot</button>
        `;
        screensList.appendChild(screenElement);
    });
});

function bookSlot(screenId) {
    // Mockup function for booking a slot
    alert(`Booking slot for screen ID: ${screenId}`);
    // Redirect to payment page or show payment modal
    window.location.href = 'payment.html'; // Assuming 'payment.html' is your payment page
}
