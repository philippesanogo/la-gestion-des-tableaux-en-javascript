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

// affiche le tableau dans la console
console.log(tab);

// affiche la longueur du tableau
let longueurTab = tab.length;
console.log(longueurTab);