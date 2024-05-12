let texts = [
    "Free 7 days return and exchange policy",
    "Baccha buccio -B pro",
    "made in india with love of our people",
    "Largest section of boot & sneakers",
    "Over 3 million happy customers :)"
];

let currentIndex = 0;
let dynamicTextElement = document.querySelector('.dynamic_text p');

function changeText(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % texts.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    }
    dynamicTextElement.textContent = texts[currentIndex];
}


function toggleMenu() {
    var lowerNav = document.getElementById("lower_nav");
    if (lowerNav.style.left === "-250px") {
        lowerNav.style.left = "0";
    } else {
        lowerNav.style.left = "-250px";
    }
}





document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.querySelector('.decrease-btn');
    const increaseBtn = document.querySelector('.increase-btn');
    const quantityInput = document.querySelector('.featured_quantity');

    decreaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
});

function toggleUnderline(element) {
    // Remove underline from all elements
    let allElements = document.querySelectorAll('.explore_tag p');
    allElements.forEach(el => {
        el.classList.remove('active');
    });

    // Add underline to the clicked element
    element.classList.add('active');
}

let customCurrentSlideIndex = 0;
const customCarouselItems = document.querySelectorAll('.custom-carousel-item');
const customDots = document.querySelectorAll('.custom-dot');

function customShowSlide(index) {
    if (index >= customCarouselItems.length) index = 0;
    if (index < 0) index = customCarouselItems.length - 1;
    customCarouselItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
    customDots.forEach((dot, i) => {
        dot.className = i === index ? 'custom-dot custom-active' : 'custom-dot';
    });
    customCurrentSlideIndex = index;
}

function customCurrentSlide(n) {
    customShowSlide(customCurrentSlideIndex = n);
}

customShowSlide(customCurrentSlideIndex); // Initialize the carousel display