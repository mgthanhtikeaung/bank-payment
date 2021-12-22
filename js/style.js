let home = document.getElementById("home");
let content = document.getElementById("contact");
let about = document.getElementById("about");
let blog = document.getElementById("blog");
let carrer = document.getElementById("carrers");

document.getElementById("btnClose").addEventListener("click",function(){
    console.log("this is click")
    document.getElementById("btnClose").classList.toggle("fa-times");
})

$(window).on("load",function(){
    $('.loader-container').fadeOut(500,function(){
      $(this).remove();
    });
  });

let header = document.querySelector(".header");
let scrollToTop = document.querySelector(".scroll-to-top")

var headerControl = new Waypoint({
    element: document.getElementById('two'),
    handler: function(direction) {
        header.classList.toggle("shadow");
     header.classList.toggle("animate__slideInDown")

        if(direction === "down"){
        scrollToTop.style.display = "block"
        scrollToTop.classList.add("animate__slideInUp")
        }
        else{
        scrollToTop.style.display = "none"
        scrollToTop.classList.remove("animate__slideInDown")
        
        }
    },
    
    offset: '75%'
  })

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();



  home.addEventListener("click",function(){
    console.log("this is home")
    home.classList.add("active-nav")
    about.classList.remove("active-nav")
    content.classList.remove("active-nav")
    blog.classList.remove("active-nav")
    carrer.classList.remove("active-nav")
  })


  content.addEventListener("click",function(){
    console.log("this is content")
    home.classList.remove("active-nav")
    about.classList.remove("active-nav")
    content.classList.add("active-nav")
    blog.classList.remove("active-nav")
    carrer.classList.remove("active-nav")
  })

  about.addEventListener("click",function(){
    home.classList.remove("active-nav")
    about.classList.add("active-nav")
    content.classList.remove("active-nav")
    blog.classList.remove("active-nav")
    carrer.classList.remove("active-nav")
  })

  blog.addEventListener("click",function(){
    home.classList.remove("active-nav")
    about.classList.remove("active-nav")
    content.classList.remove("active-nav")
    blog.classList.add("active-nav")
    carrer.classList.remove("active-nav")
  })

  carrer.addEventListener("click",function(){
    home.classList.remove("active-nav")
    about.classList.remove("active-nav")
    content.classList.remove("active-nav")
    blog.classList.remove("active-nav")
    carrer.classList.add("active-nav")
  })

  
  