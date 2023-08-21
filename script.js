var crsr = document.querySelector('#cursor')
var blurs = document.querySelector('#cursor-blur')

document.addEventListener('mousemove', function (dets) {
    crsr.style.left = dets.x + 'px'
    crsr.style.top = dets.y + 'px'
    blurs.style.left = dets.x - 150 + 'px'
    blurs.style.top = dets.y - 150 + 'px'
})


var head = document.querySelectorAll('#nav h4')
// console.log(head)
head.forEach(function (e) {
    e.addEventListener('mouseenter', function () {
        crsr.style.scale = 3
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    e.addEventListener('mouseleave', function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
});

gsap.to('#nav', {
    backgroundColor: 'rgba(0, 0, 0, 0.724)',
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: true
    }
})

gsap.to('#main', {
    backgroundColor: 'black',
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: true
    }
})

gsap.from('#about img, #about-us', {
    scale: 1.3,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: 'top 70%',
        end: 'top 65%',
        scrub: 3
    }
})
gsap.from('.cards', {
    scale: 0.8,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".cards",
        scroller: "body",
        start: 'top 70%',
        end: 'top 65%',
        scrub: 3
    }
})
gsap.from('#food-img', {
    scale: 0.7,
    scrollTrigger: {
        trigger: "#food-img",
        scroller: "body",
        start: 'top 70%',
        end: 'top 65%',
        scrub: 3
    }
})
gsap.from('#drink', {
    x:-300,
    scrollTrigger: {
        trigger: "#drink",
        scroller: "body",
        start: 'top 70%',
        end: 'top 65%',
        scrub: 5
    }
})

gsap.from('#colon1', {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: 'top 50%',
        end: "top 45%",
        scrub: 4
    }
})

gsap.from('#colon2', {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers: true,
        start: 'top 75%',
        end: "top 70%",
        scrub: 4
    }
})

gsap.from('#page4 h1', {
    y: 70,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: 'top 75%',
        end: "top 70%",
        scrub: 3
    }
})

gsap.from('#page4 .elem', {
    scale:1.3,
    scrollTrigger: {
        trigger: "#page4 .elem",
        scroller: "body",
        // markers: true,
        start: 'top 75%',
        end: "top 70%",
        scrub: 3
    }
})

gsap.from('#footer', {
    bottom:150,
    scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        // markers: true,
        start: 'top 75%',
        end: "top 70%",
        scrub: 4
    }
})

// Get the button:
let mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.transition = 'all 5s ease'
    mybutton.style.scrollBehavior = 'smooth'
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

