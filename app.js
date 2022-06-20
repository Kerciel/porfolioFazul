const titlespan = document.querySelectorAll('h1 span');
const dive = document.querySelectorAll('div img'); 


window.addEventListener('load', () =>{
    const TL = gsap.timeline({pausde: true});

    TL
    
    .staggerFrom(titlespan, 1,{top:-50 , opacity:0, ease: "power2.out"}, 0.3)
    .staggerFrom(dive,1, {opacity:0, ease: "power2.out"}, 1 , "-=1")
    
     
    TL.play();
});

