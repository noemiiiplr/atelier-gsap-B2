// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);


/* Section 1 --------------------------------------------------------------------------- */
//  Animation Draggable
Draggable.create(".noemi",{
    type: "x,y", // type: 'rotation' // Si l'on veut le tourner bounds: "#section1"
    bounds: "#section1",// "Ne sort pas de la class ou l'ID nommé
    dragResistance: 0.5, // Entre 0 et 1
    // inertia: true,
    cursor: "url(assets/img/yellow-heart.png)",

    onClick: function(){
        console. log('Je clic')
         },

    onDrag: function(){
        console. log( 'Je déplace')
        },
    
    onRelease: function () { 
        gsap.to(this.target, { x: 0, y: 0, duration: 0.5, ease: "circ.out" });
    }
})




/* Section 2 --------------------------------------------------------------------------- */

gsap.to(".imageApropos",{
    scrollTrigger: {
        trigger: '#section2',
        start: 'top 60%' ,
        end: 'bottom 50%',
        scrub: 1,
        //markers: true,
        id: "section2",
        toggleActions: 'play none reverse reset',
    },
    rotation : 360,
    duration : 2,
    zIndex : 2,
})



/* Section 3 --------------------------------------------------------------------------- */

/* Section 4 --------------------------------------------------------------------------- */




//  Animation Zoom

let tlZoom = gsap.timeline({
    repeat: 0,
    yoyo: false,
})

tlZoom.from('title',  {scale:200,})


//  Animation Zoom

/*function zoom (){

    let zoom = document.getElementById("section1")
    zoom.from("")
}
zoom()*/


let mm =gsap.matchMedia();
mm.add({isMobile : "(max-width:799px)",
    isDesktop : "(min-width:800px)",
},(context)=>{
    let {isMobile,isDesktop} = context.conditions;


//  Animation TimeLine

let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
})

tl.to('.imageBrandboard',  {
    y :isMobile ? 15:100, 
    stagger : 0.5,})

})