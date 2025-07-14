

function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex' 
  } 
  
  function hidesidebar() {
    const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none' 
  }




// slide show

  let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start the slideshow
showSlides();





