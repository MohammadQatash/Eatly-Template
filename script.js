// Open & Close moblie menu
const menuBtn = document.getElementById('navbarMenu');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');
menuBtn.addEventListener('click', function() {
    sideMenu.style.width = "280px"
})
closeMenu.addEventListener('click', function() {
    sideMenu.style.width = "0"
})

//Scrolled Navbar
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}); 

// Slider Our Best Programs
let sliderContainer = document.getElementById("sliderContainer");
var itemDisplay = 0;
const slider = document.querySelector('.slider-items');
const boxes = document.querySelectorAll('.box');

if (window.innerWidth > 990) {
    itemDisplay = sliderContainer.getAttribute("item-display-d");
    calcWidthOfBoxes();
}
if (window.innerWidth > 700 && window.innerWidth < 990) {
    itemDisplay = sliderContainer.getAttribute("item-display-t");
    calcWidthOfBoxes()
}
if (window.innerWidth > 280 && window.innerWidth < 700) {
    itemDisplay = sliderContainer.getAttribute("item-display-m");
    calcWidthOfBoxes()
}
function calcWidthOfBoxes() {
    let sliderShowing = document.querySelector('.slider');
    let sliderBox = sliderShowing.getBoundingClientRect();
    let sliderWidth = sliderBox.width - 30;
    let boxWidth = sliderWidth / parseInt(itemDisplay);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.width = boxWidth + 'px';
    }
}

let currentIndex = 0;
const slideWidth = boxes[0].clientWidth;
let prev = document.getElementById('previous');
let next = document.getElementById('next');
prev.classList.add('prevent');
function previousSlide() {
    if (currentIndex > 0) {
        currentIndex -= parseInt(itemDisplay);
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        next.classList.remove('prevent');
        if(currentIndex == 0) {
            prev.classList.add('prevent');
        }
    }
}

function nextSlide() {
    if (currentIndex + parseInt(itemDisplay) < boxes.length) {
        prev.classList.remove('prevent');
        currentIndex += parseInt(itemDisplay);
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        if(currentIndex + parseInt(itemDisplay) >= boxes.length) {
            console.log('no');
            next.classList.add('prevent');
        }
    } 
}

// Slider Menu
const menuSlider =  document.getElementById("menuSlider");
const menuSliderItems =  document.querySelectorAll(".menu-slider-items");
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPosition = 0;
let itemWidth = menuSliderItems[0].clientWidth + 14.6;
if (window.innerWidth < 700) {
    itemWidth = (menuSliderItems[0].clientWidth / 2) + 14.6;
}
nextBtn.addEventListener('click', () => {
    currentPosition -= itemWidth * 2;
    if (currentPosition < -itemWidth * (menuSliderItems.length - 2)) {
        currentPosition = 0;
    }
    menuSlider.style.transform = `translateX(${currentPosition}px)`;
});

prevBtn.addEventListener('click', () => {
    currentPosition += itemWidth * 2;
    if (currentPosition > 0) {
        currentPosition = -itemWidth * (menuSliderItems.length - 2);
    }
    menuSlider.style.transform = `translateX(${currentPosition}px)`;
});

// Slider About Us
const aboutUsSlider =  document.getElementById("aboutUsSliderItems");
const aboutUsSliderItems =  document.querySelectorAll(".about-us-slider-items");
const prevBtnAbout = document.getElementById('prevBtnAbout');
const nextBtnAbout = document.getElementById('nextBtnAbout');
let currentPositionAbout = 0;
let itemWidthAbout = aboutUsSliderItems[0].clientWidth + 14.6;

function nextItem() {
    currentPositionAbout -= itemWidthAbout;
    if (currentPositionAbout <= (-itemWidthAbout * (menuSliderItems.length - 2))) {
        currentPositionAbout = 0;
    }
    aboutUsSlider.style.transform = `translateX(${currentPositionAbout}px)`;
}
function prevItem() {
    currentPositionAbout += itemWidthAbout;
    if (currentPositionAbout > 0) {
        currentPositionAbout = -itemWidthAbout * (menuSliderItems.length -3);
    }
    aboutUsSlider.style.transform = `translateX(${currentPositionAbout}px)`;
}

// Animation Elements in scrolling page
const scrollOffset = 100;
const scrollElements = document.querySelectorAll(".animation");

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset);
};

const displayScrollElement = (element) => {
    element.classList.add(element.dataset.animation);
};

const hideScrollElement = (element) => {
    element.classList.remove(element.dataset.animation);
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, scrollOffset)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

window.addEventListener('resize', function() {
    window.location.reload();
});