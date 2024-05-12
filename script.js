// For Announcement Animation Component
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


// quantity changing logic for featured product
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

// for changing the list item in collection section
function toggleUnderline(element) {
    let allElements = document.querySelectorAll('.explore_tag p');
    allElements.forEach(el => {
        el.classList.remove('active');
    });
    element.classList.add('active');
}

//to show the prev footer as a carousel section

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

customShowSlide(customCurrentSlideIndex);