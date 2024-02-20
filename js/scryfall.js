function scryfallSearchFunction() {
    var x = document.getElementById("myText").value;
// api url
const api_url = 
      "https://api.scryfall.com/cards/search?q="+x;
 
// Defining async function
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response){}
    show(data);
}
// Calling that async function
getapi(api_url);
 
// Function to define innerHTML for HTML table
function show(data) {
    let card = 
        ``;
   
    // Loop to access all rows
    for (let r of data.data) {
        card += `
        <div class="card mb-3" style="max-width: auto;">
        <div class="row g-0">
          <div class="col-md-4">
          <img src=${r.image_uris.art_crop} class="img-fluid rounded-start" alt=${r.name}>
          </div>
          <div class="col-md-8">
          <div class="card-body">
          <h5 class="card-title"><a href="${r.scryfall_uri}">${r.name}</a></h5>
          <p class="card-text"><small class="text-body-secondary">${r.type_line}</p></small>
          <p class="card-text">${r.oracle_text}</p>
          <p class="card-text">
        </div>      
          </p>
          <p class="card-text"><small class="text-body-secondary">Released ${r.released_at}</small></p>
          </div>
          </div>
        </div>
      </div>
          <br>`;
}
    // Setting innerHTML as tab variable
    document.getElementById("magiccards").innerHTML = card;
}
}
