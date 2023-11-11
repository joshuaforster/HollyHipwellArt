document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-reviews");
    const leftArrow = document.getElementById("leftarrow");
    const rightArrow = document.getElementById("rightarrow");

    let currentIndex = 0;

    // Function to show a specific testimonial by index
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = "block";
            } else {
                testimonial.style.display = "none";
            }
        });
    }

    // Initial display
    showTestimonial(currentIndex);

    // Event listener for clicking the right arrow
    rightArrow.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    // Event listener for clicking the left arrow
    leftArrow.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });
});