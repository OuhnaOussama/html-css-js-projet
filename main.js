//hamburger-menu

document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('hidden');
});

// Slider

const slides = document.querySelectorAll(".slide")
var counter = 0;
console.log(slides)


document.addEventListener("DOMContentLoaded", function() {
    // les references to images and buttons
    var images = document.querySelectorAll('.slide');
    var prevButton = document.getElementById('prev');
    var nextButton = document.getElementById('next');
    var currentIndex = 0;

    // Function pou afficher l' ancien image el le rencent image 
    function showImage(index) {
        for (var i = 0; i < images.length; i++) {
            if (i === index) {
                images[i].classList.remove('hidden');
            } else {
                images[i].classList.add('hidden');
            }
        }
    }

    // Function to show the previous image
    function showPrevImage() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    }

    // Function to show the next image
    function showNextImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    }

    // Add event  to  the buttons
    prevButton.addEventListener('click', function() {
        showPrevImage();
    });

    nextButton.addEventListener('click', function() {
        showNextImage();
    });

    // Show the initial image
    showImage(currentIndex);
});

//Rotation de limage 

document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById('rotateImage');
    // Appliquer l'animation de rotation
    image.style.animation = 'rotateAnimation 30s linear infinite';
});
