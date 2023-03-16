//Global variables
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

//TODO
hamburger.addEventListener('click', () => 
{
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("change");

    console.log("Clicked");
});

//removing nav link from active to normal state
    navMenu.addEventListener("click", () => {
        navMenu.style.display = "none";
    })

//removing hamburger & nav link from active to normal state
    //document.querySelectorAll(".navLink").forEach(n => 
    //n.addEventListener("click", () => {
        //hamburger.classList.remove("change");
        //console.log("hamX");
    //}));


    


/*close*/
function close(){
    navMenu.style.display = "none";
}



/*
Menu
function menu(){
    
    
    let bar = document.getElementsByClassName("bar1", "bar2", "bar3");
    
    
    

    bar.classList.toggle("change");

}
*/


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