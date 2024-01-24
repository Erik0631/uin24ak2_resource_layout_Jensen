
const resourcesContainer = document.getElementById("resources-container")
const infoContainer = document.getElementById("info-container")

//Opprett ressursbokser for hver ressurs//
resources.forEach((resource, index) => createResourceBox(resource, index))

//Funksjon for å opprette en ressursboks//
function createResourceBox(resource, index) {
  const resourceBox = document.createElement("div") 
  resourceBox.className = "resource-box"
  //Henter category//
  resourceBox.innerHTML = `<h2>${resource.category}</h2>`
  
  //Tilpasser bredden på ressursboksen basert på kategorien//
  if (resource.category === "HTML") {
    resourceBox.classList.add("html-box") 
  } else if (resource.category === "Sanity and headless CMS") {
    resourceBox.classList.add("sanity-box")
  }

  //Legger til ressursboksen i resourcesContainer//
  resourcesContainer.appendChild(resourceBox)

  //klikk for å vise informasjon//
  resourceBox.addEventListener("click", () => showResourceInfo(index, resourceBox))
}

//Funksjon for å vise informasjonen//
function showResourceInfo(index, clickedBox) {
  //Nullstiller aktiv boksen//
  document.querySelectorAll('.resource-box').forEach(box => box.classList.remove('active'))

  //Aktiv boks//
  clickedBox.classList.add('active')
  
  const selectedResource = resources[index]

  //Henter koden fra ressurser.js og setter opp struktur for nettsiden//
  const infoBox = document.createElement("div")
  infoBox.className = "resource-info"
  infoBox.innerHTML = `
    <h2>${selectedResource.category}</h2>
    <div class="info-content">
        <p>${selectedResource.text}</p>  
        <ul>
            ${selectedResource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')} 
        </ul>
    </div>
  `
 //fjerner forgje boks så det ikke dobler seg //
  infoContainer.innerHTML = ''

  //legger til den valgte boksen//
  infoContainer.appendChild(infoBox)  

}

//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement//
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click
