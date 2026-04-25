document.addEventListener("DOMContentLoaded", function() {
    // Select the red phone icon circle
    const whatsappBtn = document.querySelector('.phone-box i');

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // International format: country code + number (no leading 0 or +)
            const phoneNumber = "2349023558113"; 
            const message = "Hello, I would like to make an inquiry.";
            
            // Create the WhatsApp URL
            const url = `https://wa.me/${2349023558113}?text=${encodeURIComponent(message)}`;
            
            // Open in a new tab
            window.open(url, '_blank');
        });
    }
});