// Variables pour le nombre de produits commandés
let mobileIphone = 0;
let mobileSamsung = 0;
let mobilePixel = 0;
let mobileNokia = 0;

// Variable pour le nombre total de produits
let totalProduits = mobileIphone + mobileSamsung + mobilePixel + mobileNokia;

// Variables pour les prix et le coût total de la commande
let priceMobileIphone = 1000; // Prix exemple pour le produit 1
let priceMobileSamsung = 750; // Prix exemple pour le produit 2
let pricemobilePixel = 200; // Prix exemple pour le produit 3
let pricemobileNokia = 250; // Prix exemple pour le produit 4


//Variable total
let totalPrice = (mobileIphone * priceMobileIphone) + (mobileSamsung * priceMobileSamsung) + 
                  (mobilePixel * pricemobilePixel) + (mobileNokia * pricemobileNokia);


// function 
function displayResumeOrder(numberProduct, amount) {
    if (numberProduct > 0) {
        return "Vous avez commandé " + numberProduct + " produits pour un total de " + amount + " euros";
    } else {
        return "Vous n’avez pas encore commandé de produit";
    }
}

// Création d'objets pour chaque produit
let mobileIphoneObj = { quantite: 0, prix: 10 };
let mobileSamsungObj = { quantite: 0, prix: 15 };
let mobilePixelObj = { quantite: 0, prix: 20 };
let mobileNokiaObj = { quantite: 0, prix: 25 };

// Création d'un tableau pour tous les produits
let allProducts = [mobileIphone, mobileSamsung, mobilePixel, mobileNokia]
