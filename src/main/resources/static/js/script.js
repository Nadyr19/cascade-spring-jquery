let baliseBouton1 = document.getElementById("bouton1");
console.log(baliseBouton1);


baliseBouton1.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")

    let baliseSection = document.querySelector("section")
    baliseSection.remove()

    let pageHtml = 
    `
    <section>
    <p>Observe bien l'image qu'il faudra choisir pour obtenir les ingrédients nécessaires </p>
    
      <div class="conteneur">
        <img src="/images/exercice/ex1/lvl2/1.png" alt=""/>
        <p>Un Pommier</p>
        <img src="/images/exercice/ex1/arrow1.png" alt=""/>
        <img src="/images/composants/pomme.png" alt=""/>
        <p>Pomme</p>
      </div>
      <div class="conteneur">
        <img src="/images/exercice/ex1/lvl2/2.png" alt=""/>
        <p>Une Poule</p>
        <img src="/images/exercice/ex1/arrow1.png" alt=""/>
        <img src="/images/composants/oeuf.png" alt=""/>
        <p>Un Oeuf</p>
      </div>
      <div class="conteneur">
        <img src="/images/exercice/ex1/lvl2/3.png" alt=""/>
        <p>Une Vache</p>
        <img src="/images/exercice/ex1/arrow1.png" alt=""/>
        <img src="/images/composants/beurre.png" alt=""/>
        <p>Une Plaquette de Beurre</p>
      </div>
      <div class="conteneur">
        <img src="/images/exercice/ex1/lvl2/4.png" alt=""/>
        <p>Du Blé</p>
        <img src="/images/exercice/ex1/arrow1.png" alt=""/>
        <img src="/images/composants/farine.png" alt=""/>
        <p>Un paquet de Farine</p>
      </div>
      <div class="conteneur">
        <img src="/images/exercice/ex1/lvl2/5.png" alt=""/>
        <p>De la Canne à Sucre</p>
        <img src="/images/exercice/ex1/arrow1.png" alt=""/>
        <img src="/images/composants/sucre.png" alt=""/>
        <p>Un Morceau de Sucre</p>
      </div>
  </section>
    <button id="bouton2">COMMENCER L'EXERCICE</button>`

    
    //let baliseBouton = document.getElementById("bouton1");
   // baliseBouton.id = "bouton2"

    let main = document.querySelector("main")
    main.innerHTML = pageHtml
});


//let baliseBouton2 = document.getElementById("bouton2");
//console.log(baliseBouton2);


let baliseBouton2 = document.getElementById("bouton2");
console.log(baliseBouton2+"vous avez cliqué sur bouton2");

baliseBouton2.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")

    let baliseSection2 = document.querySelector("section")
    baliseSection2.remove()

    let pageHtml2 = 
    `
    <section>
    <p>Observe bien l'image qu'il faudra choisir pour obtenir les ingrédients nécessaires </p>
    
      <div class="conteneur">
        <img src="/images/exercice/ex1/lvl2/1.png" alt=""/>
        <p>Un Pommier</p>
        <img src="/images/exercice/ex1/arrow1.png" alt=""/>
        <img src="/images/composants/pomme.png" alt=""/>
        <p>Pomme</p>
      </div>`

      let main = document.querySelector("main")
      main.innerHTML = pageHtml2
});
/*
<img id="premiereImage" src="image.jpg" alt="Ceci est une image de test" class="photo flexCenter"></img>

let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est une image de test modifiée");
baliseImage.src = "cheminImage.jpg";
baliseImage.classList.add("nouvelleClasse")
baliseImage.classList.remove("photo")



//II Créez un nouvel élément dans une page web
//1) 1ere méthode

let nouvelElement = document.createElement("div");
// Récupérer un élément parent existant
let parentElement = document.getElementById("conteneur");

// Ajouter le nouvel élément au parent
parentElement.appendChild(nouvelElement);



// Définition des variables contenant le texte du titre et du paragraphe
let contenuTitre = "Azertype"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"

// Création d'un div avec createElement. Dans cette div, on va créer un titre h1 et un paragraphe p
let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h1")
let nouveauParagraphe = document.createElement("p")

// On ajoute du texte dans le titre et le paragraphe
nouveauTitre.textContent = contenuTitre
nouveauParagraphe.textContent = contenuParagraphe

// On ajoute le titre et le paragraphe dans la div
nouvelleDiv.appendChild(nouveauTitre)
nouvelleDiv.appendChild(nouveauParagraphe)

// On ajoute la div dans le body
let body = document.querySelector("body")
body.appendChild(nouvelleDiv)

//2) 2e méthode: l’interpolation pour générer du HTML

let contenuTitre = "Azertype"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"

let div = `
    <div>
        <h1>${contenuTitre}</h1>
        <p>${contenuParagraphe}</p>
    </div>
    `;

    Insérez votre HTML grâce à innerHTML:
Maintenant que le code HTML est généré, comme avec createElement, 
nous devons l’insérer dans un élément existant de la page. 
Pour cela, on choisit la balise qui va contenir notre code HTML, 
et on met simplement ce code HTML dans la propriété innerHTML :

let body = document.querySelector("body")
body.innerHTML = div
*/