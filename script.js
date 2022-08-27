



/*Image Slider*/

var images = [
    'assests/Testimonial1.png',
    'assests/Testimonial2.png'
]

var num = 0;

function next() {
    var TestimonialSlider = document.getElementById('TestimonialSlider');
    num++;

    if (num >= images.length)
    {
        num = 0;
    }

    TestimonialSlider.src = images[num];
}

function prev() {
    var TestimonialSlider = document.getElementById('TestimonialSlider');
    num--;

    if (num < 0) {
        num = images.length - 1;
    }

    TestimonialSlider.src = images[num];
}
