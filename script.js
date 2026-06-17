const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

}
   // Date and time in footer
        function updateDateTime() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
        }
        
        // Update date time immediately and then every second
        updateDateTime();
        setInterval(updateDateTime, 1000);

        const products = [
    "🔥 Premium Streetwear Hoodie",
    "🔥 Urban Graphic T-Shirt",
    "🔥 Cargo Pants Collection",
    "🔥 Limited Edition Jacket"
];

const randomProduct =
products[Math.floor(Math.random() * products.length)];

document.getElementById("featuredProduct").innerHTML =
randomProduct;

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

    });

}

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (lightbox && lightboxImg) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "block";
            lightboxImg.src = img.src;

        });

    });

}

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}
        