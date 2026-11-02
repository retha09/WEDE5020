document.addEventListener("DOMContentLoaded", function () {
    
    // GENERAL COAL-FIRED ENQUIRIES FORM LOGIC
    const bookingForm = document.querySelector("form:not(#contactForm)");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const nameInput = bookingForm.querySelector('input[type="text"]');
            const emailInput = bookingForm.querySelector('input[type="email"]');
            const typeSelect = bookingForm.querySelector("select");

            if (nameInput.value.trim() === "") {
                alert("Please enter your full name before submitting.");
                nameInput.focus();
                return;
            }
            if (emailInput.value.trim() === "") {
                alert("Please enter a valid email address.");
                emailInput.focus();
                return;
            }
            if (typeSelect.value === "Select an option..." || typeSelect.value === "") {
                alert("Please select a booking type from the dropdown menu.");
                typeSelect.focus();
                return;
            }

            alert("Thank you, " + nameInput.value + "!\n\nYour " + typeSelect.value + " request has been received. Our team will contact you shortly.");
            bookingForm.reset();
        });
    }

    // NEW CONTACT FORM VALIDATION & PROCESS RESPONSE LOOP
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const cName = document.getElementById("contactName");
            const cEmail = document.getElementById("contactEmail");
            const cSubject = document.getElementById("contactSubject");
            const cMessage = document.getElementById("contactMessage");

            // Validation Checking Blocks
            if (cName.value.trim() === "") {
                alert("Contact Error: Please provide your name.");
                cName.focus();
                return;
            }
            if (cEmail.value.trim() === "") {
                alert("Contact Error: Please provide your email address.");
                cEmail.focus();
                return;
            }
            if (cSubject.value === "") {
                alert("Contact Error: Please select a subject topic.");
                cSubject.focus();
                return;
            }
            if (cMessage.value.trim() === "") {
                alert("Contact Error: Message body box cannot be empty.");
                cMessage.focus();
                return;
            }

            // Immediate Process Response Feedback
            alert("Message Transmitted Successfully!\n\nThank you, " + cName.value + ". Your inquiry regarding '" + cSubject.value + "' has been processed efficiently. A representative will email you back at " + cEmail.value + " within 24 hours.");
            contactForm.reset();
        });
    }

    // INTERACTIVE GALLERY LIGHTBOX MODULE
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const allImages = document.querySelectorAll("main img, .menu-image");

    if (lightbox && lightboxImg && closeBtn) {
        allImages.forEach(function (image) {
            image.addEventListener("click", function () {
                lightboxImg.src = this.src;
                lightboxImg.alt = this.alt;
                lightbox.style.display = "flex";
            });
        });

        closeBtn.addEventListener("click", function () {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

    // DYNAMIC CONTENT MENU FILTER SEARCH ENGINE
    const searchInput = document.getElementById("menuSearchInput");
    const menuItems = document.querySelectorAll(".menu-item");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const filterValue = this.value.toLowerCase().trim();

            menuItems.forEach(function (item) {
                const itemText = item.textContent.toLowerCase();
                if (itemText.includes(filterValue)) {
                    item.style.display = "block"; 
                } else {
                    item.style.display = "none"; 
                }
            });
        });
    }
});
