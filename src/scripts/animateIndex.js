import anime from 'animejs/lib/anime.es.js';

let imgIng  = document.getElementById("image-index-ing");
let imgComb = document.getElementById("image-index-comb");
let imgRen  = document.getElementById("image-index-ren");

// ─── Estado inicial ────────────────────────────────────────────────────────────
// Los tres paneles empiezan pequeños y semitraslúcidos
anime.set("#image-index-ing",  { translateX: 0, translateY: 0, scale: 0.8, opacity: 0.5 });
anime.set("#image-index-comb", { translateX: 0, translateY: 0, scale: 0.8, opacity: 0.5 });
anime.set("#image-index-ren",  { translateX: 0, translateY: 0, scale: 0.8, opacity: 0.5 });

// ─── Helpers ───────────────────────────────────────────────────────────────────
function shrink(id) {
    anime({ targets: id, translateX: 0, translateY: 0, scale: 0.8, opacity: 0.5,
            begin: (a) => { a.animatables[0].target.style.zIndex = 0; } });
}
function expand(id, tx, ty) {
    anime({ targets: id, translateX: tx, translateY: ty, scale: 1, opacity: 1,
            begin: (a) => { a.animatables[0].target.style.zIndex = 1; } });
}

// ─── Panel IZQUIERDO (Oil & Gas) → avanza hacia el centro (derecha y arriba) ──
imgIng.addEventListener("mouseover", () => {
    expand("#image-index-ing",  100, -15);   // se adelanta hacia el centro
    shrink("#image-index-comb");
    shrink("#image-index-ren");
});

// ─── Panel CENTRAL (Combustible) → avanza hacia adelante (solo sube) ──────────
imgComb.addEventListener("mouseover", () => {
    expand("#image-index-comb", 0, -20);     // se adelanta hacia el frente
    shrink("#image-index-ing");
    shrink("#image-index-ren");
});

// ─── Panel DERECHO (Energías Renovables) → avanza hacia el centro (izq y arr) ─
imgRen.addEventListener("mouseover", () => {
    expand("#image-index-ren", -100, -15);   // se adelanta hacia el centro
    shrink("#image-index-ing");
    shrink("#image-index-comb");
});
