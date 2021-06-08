const card = document.querySelector(".card");
const imageZoom = document.querySelector(".image-zoom");
const blocFocusTop = document.querySelector(".bloc-focus-top");
const blocFocusBottom = document.querySelector(".bloc-focus-bottom");
const blocContent = document.querySelector(".bloc-content-show");
const title = document.querySelector(".bloc-content-show h2");
const separation = document.querySelector(".bloc-content-show hr");
const downloadLogo = document.querySelector(".bloc-content-show img");
const allTxt = document.querySelectorAll(".bloc-content-show p");

const TLANIM = gsap.timeline({paused: true});

TLANIM  //change l'image de scal 1 à scale 2, la déplace sur les axes X & Y (équivalent à un transform: translate)
.fromTo(imageZoom, {scale: 1}, {scale: 2, y:-50, x:200, duration: 0.4, ease:ExpoScaleEase.config(1,2, "power2.inOut")})
//ExpoScaleEase est un plugin ajouté à greensock pour scale l'image de 1 à 2 en ease-in-out

.to(blocFocusTop, {top: -30, left: -30, duration:0.1},0.5)
.to(blocFocusBottom, {bottom: -30, right: -30, duration:0.1},"-=0.1")
.to(blocContent, {bottom: 200, duration: 0.2}, "-=0.1")
.from(title, {opacity: 0, duration: 0.2}, "-=0.1")
.from(downloadLogo, {scale: 0, duration: 0.2})
.from(separation, {width: 0, duration: 0.2,}, "-=0.2")
.from(allTxt, {opacity: 0, duration: 0.3, stagger: 0.2})    //stagger= délai d'attente entre 2 éléments

card.addEventListener("mouseenter", () =>{
    TLANIM.play();
})

card.addEventListener("mouseleave", () =>{
    TLANIM.reverse();
})

