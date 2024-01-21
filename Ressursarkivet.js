
const resourcesContainer = document.getElementById("resources-container")
const infoContainer = document.getElementById("info-container")


// Opprett ressursbokser for hver ressurs//
resources.forEach((resource, index) => createResourceBox(resource, index))


// Funksjon for å opprette en ressursboks//
function createResourceBox(resource, index) {
  const resourceBox = document.createElement("div")
  resourceBox.className = "resource-box"
  resourceBox.innerHTML = `<h2>${resource.category}</h2>`
  
  // Tilpasse bredden basert på kategorien//
  if (resource.category === "HTML") {
    resourceBox.classList.add("html-box") //HTML-boksen//
  } else if (resource.category === "Sanity and headless CMS") {
    resourceBox.classList.add("sanity-box") //Sanity and headless CMS-boksen//
  }

  resourcesContainer.appendChild(resourceBox)

  //klikk-lytter for å vise informasjon//
  resourceBox.addEventListener("click", () => showResourceInfo(index, resourceBox));
}

// Funksjon for å vise informasjonen for en boks//
function showResourceInfo(index, clickedBox) {
  // Fjerner aktiv klasse fra alle bokser//
  document.querySelectorAll('.resource-box').forEach(box => box.classList.remove('active'))
  
  //klikkede boksen//
  clickedBox.classList.add('active')

  const selectedResource = resources[index]

  // Opprett en ny informasjonsboks//
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

  // Fjern all eksisterende informasjon før du viser ny informasjon//
  infoContainer.innerHTML = ''

  // Legg til den valgte ressursens informasjon//
  infoContainer.appendChild(infoBox)
}

