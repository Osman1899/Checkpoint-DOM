// let parent = document.querySelector("#parent");
// let fils = document.querySelectorAll("#fils");

// for (i=0; i < fils.length; i++) {
//     let plus = fils[i].children[2];
//     let moin = fils[i].children[3];
//     let prix = fils[i].children[4];
//     let total = fils[i].children[5];
//     let valeur = fils[i].children[6].children[0]
//  console.log(valeur);
//     plus.addEventListener("click", () => {
//         let btnplus= valeur.innerHTML
//         btnplus++;
//     })}
let parent = document.querySelector("#parent");
let fils = document.querySelectorAll("#fils");

for (let i = 0; i < fils.length; i++) {
    let plus = fils[i].children[2];
    let moin = fils[i].children[4];
    let prix = fils[i].children[3];
    let total = fils[i].children[5].children[0].innerHTML;
    let valeur = fils[i].children[6].children[0];
    console.log(total);

    plus.addEventListener("click", () => {
        let btnplus = parseInt(prix.innerHTML);
        btnplus++;
        valeur.innerHTML = btnplus * total;
        prix.innerHTML = btnplus;
    });

    moin.addEventListener("click",() => {
        let btnmoin = parseInt(prix. innerHTML);
        if (btnmoin > 0) {
            btnmoin--;
            valeur.innerHTML= btnmoin * total;
            prix.innerHTML = btnmoin;
        }
    })
}
