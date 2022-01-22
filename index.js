

// let prenom = prompt("entre votre nom et prénom" ) 
// let ville = prompt ('la ville ou tu habite' ,'')
// alert ("Bonjour" +" "+ prenom + " " + "de"+ " " + ville)



//let Nombre1 = prompt("entre 1 nombres à virgules")
//let Nombre1trunc = Math.trunc(Nombre1)
//let Nombre2 = prompt ("un autre ")
//let calcul = Nombre1trunc/Nombre2
//alert ("le résultat est"+ " "+ calcul )


 // 
//  let res = 0 ;


//  for (i = 0; i <= Number(pointure); i++) { 
    

//  res += i

//    }


//   alert (res)

//-------------------------





//object = {heure:23, minute:59}



//function test(obj){ 
 //   obj.minute++
    
//     if (obj.minute == 60  )  {
//         obj.minute = 0
//         obj.heure++
//     }

//     if (obj.heure == 24) {
//         obj.heure = 0
//     }

//     return obj

// }

// test (object)

//------------------------------------------------------------------------------------------


let naissance = prompt ("quel est votre date de naissance") ;
let pointure = prompt ("quel est t'as pointure") ;

alert ((((Number(pointure) *2)+5 )*50) - (naissance) + 1766)

//-------------------------------------------------------------------------------------------

let calculPN = (Number(pointure) *2 )
let calcul1 = (calculPN + 5)
let calcul2 = (calcul1*50)
let calcul3 = (calcul2 - Number(naissance))
let calcul4 = (calcul3 + 1766)

alert (calcul4)

//---------------------------------------------------------------------------------------------

//le prompt ne crée que des string donc forcer le int avec ex : Number(pointure)



//----------------------------------------------------------------------------------------------

// if (Number(naissance) > Number(pointure)) {

// alert (naissance);

// } else {

//     alert (pointure);

// }



// Exercice 1 :
// let hello = "Hello world !"
// alert (hello)


//Exercice 2 :
// let lastName = "Nom"
// let firstName = "Prenom"
// let city = "Ville"
// alert ( "Nom : "+ firstName + "\nPrénom : "+ lastName + "\nVille : "+ city)


//Exercice 3 :
// let Name = prompt("Votre nom ?");
// alert("Bonjour, " + Name);


//Exercice 4 :
// let lastName = prompt("Quel est votre nom ?");
// let firstName = prompt("Quel est votre prénom ?");
// let city = prompt("D'où venez vous ?");
// alert ( "Bonjour "+ firstName+" " + lastName +" qui vient de "+ city)

//Exercice 5 :
// let Nombre1 = prompt("Quel est votre premier nombre à virgule ?");
// let Nombre1Trunc = Math.trunc(Nombre1);
// let Nombre2 = prompt("Quel est votre deuxieme nombre à virgule ?");
// let calcul = (Nombre1Trunc * Nombre2)
// alert ( "Le resultat est : " + calcul)

//Exercice 6 :
// let Nombre1 = prompt("Quel est votre premier nombre à virgule ?");
// let Nombre2 = prompt("Quel est votre deuxieme nombre à virgule ?");
// let calcul = (Nombre1 / Nombre2)
// alert ( "Le resultat est : " + calcul)

//Exercice 7 :
// Soluce 1 :
// let pointure = prompt("votre pointure")
// let resultatX2 = (pointure * 2)
// resultat5 = resultatX2 + 5
// resultat50 = resultat5 * 50
// resultat = parseInt(resultat50)

// let annee_naissance = prompt("votre année de naissance")
// annee_naissance = parseInt(annee_naissance)
// reponse = resultat + annee_naissance
// parseInt(reponse)
// alert(reponse)

// Soluce 2 :
// let naissance = prompt ("quel est votre date de naissance") ;
//alert ((((Number(pointure) 2)+5 )50) - (naissance) + 1766)

//---------------------------------------------------------------------------------------------

//JAKE

//1 tout faire dans un alert : fini

// 2 mettre un chiffre dans poiture et un autre dans naissance et retournée le plus grand

//ajouter 1minute tout le temp et les faire se réinitialiser