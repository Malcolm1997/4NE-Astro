import anime from 'animejs/lib/anime.es.js';
	
let imgIng = document.getElementById("image-index-ing")
let imgRen = document.getElementById("image-index-ren")

imgIng.addEventListener("mouseover", () => {
    anime({
        targets: "#image-index-ing",
        translateX:150,
        scale: 1,
        opacity: 1,
        begin: (anim)=>{
            anim.animatables[0].target.style.zIndex = 1;
        }
    })

    anime({
        targets: "#image-index-ren",
        translateX:0,
        scale: .8,
        opacity: .5,
        begin: (anim)=>{
            anim.animatables[0].target.style.zIndex = 0;
        }
    })
});

imgRen.addEventListener("mouseover", () => {
    anime({
        targets: "#image-index-ren",
        translateX:-150,
        scale: 1,
        opacity: 1,
        begin: (anim)=>{
            anim.animatables[0].target.style.zIndex = 1;
        }
    })

    anime({
        targets: "#image-index-ing",
        translateX:0,
        scale: .8,
        opacity: .5,
        begin: (anim)=>{
            anim.animatables[0].target.style.zIndex = 0;
        }
    })
});

anime.set("#image-index-ing", {
    translateX:0,
    scale: .8,
    opacity: .5,
})

anime.set("#image-index-ren", {
    translateX:-150,
})
