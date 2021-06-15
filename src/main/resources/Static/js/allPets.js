var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("petCarousel");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";



}


/*
/!*
const myCarousel = new Ratslider({
    id: '#allPetsMobile',
    slides: '.petCarousel',
    create: true
});
const myCarousel = new Ratslider({
    id: '#allPetsMobile',
    slides: '.petCarousel',
    create: true,
    dots: true,
    handlers: true
});
const myCarousel = new Ratslider({
    id: '#allPetsMobile',
    slides: '.petCarousel',
    create: true,
    draggable: true
});*!/
//CAROUSEL SETTINGS
var $imagesCarousel = jQuery('.petCarousel').flickity({
    /!* options, defaults listed *!/
    accessibility: false,
    /!* enable keyboard navigation, pressing left & right keys *!/
    autoPlay: false,
    pauseAutoPlayOnHover: false,
    /!* advances to the next cell
    if true, default is 3 seconds
    or set time between advances in milliseconds
    i.e. `autoPlay: 1000` will advance every 1 second *!/
    cellAlign: 'center',
    /!* alignment of cells, 'center', 'left', or 'right'
    or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right) *!/
    // cellSelector: '.topic-switcher__item',
    /!* specify selector for cell elements *!/
    contain: false,
    /!* will contain cells to container
    so no excess scroll at beginning or end
    has no effect if wrapAround is enabled *!/
    draggable: true,
    /!* enables dragging & flickin
    freeScroll: false,
    enables content to be freely scrolled and flicked
    without aligning cells *!/
    friction: 0.2,
    /!* smaller number = easier to flick farther *!/
    initialIndex: 0,
    /!* zero-based index of the initial selected cell *!/
    lazyLoad: false,
    /!* enable lazy-loading images
    set img data-flickity-lazyload="src.jpg"
    set to number to load images adjacent cells *!/
    percentPosition: false,
    /!* sets positioning in percent values, rather than pixels
    Enable if items have percent widths
    Disable if items have pixel widths, like images *!/
    prevNextButtons: false,
    /!* creates and enables buttons to click to previous & next cells *!/
    pageDots: false,
    /!* create and enable page dots *!/
    resize: true,
    /!* listens to window resize events to adjust size & positions *!/
    rightToLeft: false,
    /!* enables right-to-left layout *!/
    watchCSS: false,
    /!* watches the content of :after of the element
    activates if #element:after { content: 'flickity' }
    IE8 and Android 2.3 do not support watching :after
    set watch: 'fallbackOn' to enable for these browsers *!/
    wrapAround: true
    /!* at end of cells, wraps-around to first for infinite scrolling *!/
});
function resizeCells() {
    var flkty = $imagesCarousel.data('flickity');
    var $current = flkty.selectedIndex;
    var $length = flkty.cells.length;
    var $imageNumLimit = 30;
    if ($length < $imageNumLimit) {
        $imagesCarousel.flickity('destroy');
    }
    jQuery('.petCarousel .image__container').removeClass("nextToSelectedLeft");
    jQuery('.petCarousel .image__container').removeClass("nextToSelectedRight");
    jQuery('.petCarousel .image__container').removeClass("nextToSelectedLeft2");
    jQuery('.petCarousel .image__container').removeClass("nextToSelectedRight2");
    jQuery('.petCarousel .image__container').eq($current - 1).addClass("nextToSelectedLeft");
    jQuery('.petCarousel .image__container').eq($current - 2).addClass("nextToSelectedLeft2");
    var $endCell;
    if ($current + 1 == $length) {
        $endCell = "0";
    } else {
        $endCell = $current + 1;
    }
    jQuery('.petCarousel .image__container').eq($endCell).addClass("nextToSelectedRight");
    if($endCell + 1 < $imageNumLimit){
        jQuery('.petCarousel .image__container').eq($endCell + 1).addClass("nextToSelectedRight2");
    } else {
        jQuery('.petCarousel .image__container').eq(0).addClass("nextToSelectedRight2");
    }
}
resizeCells();
$imagesCarousel.on('scroll.flickity', function() {
    resizeCells();
});
//HOVER FUNCTIONS
$('.image__container').bind("mouseover", function(){
    if (this.className === 'image__container nextToSelectedLeft') {
        $imagesCarousel.flickity('playLeftSlowPlayer');
    } else if (this.className === 'image__container nextToSelectedLeft2') {
        $imagesCarousel.flickity('playLeftFastPlayer');
    } else if (this.className === 'image__container nextToSelectedRight') {
        $imagesCarousel.flickity('playRightSlowPlayer');
    } else if (this.className === 'image__container nextToSelectedRight2') {
        $imagesCarousel.flickity('playRightFastPlayer');
    }
});
$('.image__container').bind("mouseout", function(){
    $imagesCarousel.flickity('pausePlayer');
});*/