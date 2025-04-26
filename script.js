// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef
// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

async function getChefBirthday(id) {
  try {
    // Recupero la ricetta
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!recipeResponse.ok) {
      throw new Error('Errore nel recupero della ricetta');
    }
    const recipeData = await recipeResponse.json();
    
    // Estraggo userId dalla ricetta
    const userId = recipeData.userId;
    
    // Recupero le informazioni dello chef
    const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    if (!chefResponse.ok) {
      throw new Error('Errore nel recupero delle informazioni dello chef');
    }
    const chefData = await chefResponse.json();
    
    // Restituisco la data di nascita dello chef
    return chefData.birthDate;
  } catch (error) {
    console.error(error);
  }
}
// stampo in console il risultato della consegna
getChefBirthday(1).then(birthday => console.log("Data di nascita dello Chef:", birthday)); 
