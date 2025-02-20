// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// GSAP Demo Animation
gsap.to("#demo",{
    rotation : 360,
    duration : 2,

})

Draggable.create("#demo")