function showReservations() {
    const reservations = document.getElementById('reservations');
    reservations.style.display = 'block';
    reservations.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservation-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const specialRequests = document.getElementById('special-requests').value.trim();
        
        // Validation
        let isValid = true;
        let errors = [];
        
        if (!name) {
            isValid = false;
            errors.push('Name is required');
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            isValid = false;
            errors.push('Valid email is required');
        }
        
        if (!phone) {
            isValid = false;
            errors.push('Phone is required');
        }
        
        if (!date) {
            isValid = false;
            errors.push('Date is required');
        }
        
        if (!time) {
            isValid = false;
            errors.push('Time is required');
        }
        
        if (!guests) {
            isValid = false;
            errors.push('Number of guests is required');
        }
        
        if (isValid) {
            // Simulate successful reservation
            alert('Reservation submitted successfully! We will contact you shortly.');
            form.reset();
        } else {
            alert('Please correct the following errors:\n' + errors.join('\n'));
        }
    });

    // Handle missing images by replacing them with a placeholder
    const menuImages = document.querySelectorAll('.category-image, .menu-item img');
    menuImages.forEach(img => {
        const placeholderUrl = 'https://placehold.co/600x400/E07A5F/ffffff?text=Timim+Food';
        
        img.addEventListener('error', function() {
            this.src = placeholderUrl;
        });

        // Check if image is already broken (loaded with 0 height)
        if (img.complete && img.naturalHeight === 0) {
            img.src = placeholderUrl;
        }
    });
});