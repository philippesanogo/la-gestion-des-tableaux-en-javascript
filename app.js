/**
 * La gestion des tableaux en JavaScript
 */


// exemple de gestion d'un tableau:
console.log(`Exemple de gestion d'un tableau:`);


// déclaration et assignation du tableau
let tab = ["hello", 45, true, 12.5];

// retourner le tableau
tab.reverse();

// ajoute 12 au debut du tableau
tab.unshift(12);

// ajoute au revoir et merci à la fin du tableau
tab.push("au revoir", "merci");

// enlever merci
tab.pop();

// enlever 12
tab.shift();

// ajouter "false" en position 2 sur le tableau
tab.splice(2, 0, false);

// remplacer "hello" par "hi"
tab.splice(4, 1, "hi");

// affiche le tableau sous forme de tableau
console.table(tab);

console.log("-----------");


// affiche le tableau dans la console
console.log(tab);

// affiche la longueur du tableau
let longueurTab = tab.length;
console.log(longueurTab);

console.log("-----------");




/**
 * Parcourir le tableau "tab"
 */

// méthode 1:
console.log(`Parcourir le tableau "tab" ci-dessous:`);
console.log(`méthode 1. "for()"`);
for (let index = 0; index < tab.length; index++) {
    const element = tab[index];
    console.log(element);

}


// méthode 2
console.log("-----------");
console.log(`méthode 2. "foreach()"`);
tab.forEach((elem) => {
    console.log(elem);
})


// méthode 3
console.log("-----------");
console.log(`méthode 3. "for...in"`);

for (let elem in tab) {
    console.log(tab[elem]);
}

// méthode 4
console.log("-----------");
console.log(`méthode 4. "for...of"`);
for(let valeur of tab){
    console.log(valeur);
}

