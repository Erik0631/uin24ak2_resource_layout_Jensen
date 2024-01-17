const resourcesContainer = document.getElementById("resources-container");
const infoContainer = document.getElementById("info-container");

// Funksjon for å opprette en ressursboks
function createResourceBox(resource, index) {
  const resourceBox = document.createElement("div");
  resourceBox.className = "resource-box";
  resourceBox.innerHTML = `<h2>${resource.category}</h2>`;
  resourcesContainer.appendChild(resourceBox);

  // Legg til klikk-lytter for å vise informasjon
  resourceBox.addEventListener("click", () => showResourceInfo(index, resourceBox));
}

// Funksjon for å vise informasjonen for en ressurs
function showResourceInfo(index, clickedBox) {
  // Fjern aktiv klasse fra alle bokser
  document.querySelectorAll('.resource-box').forEach(box => box.classList.remove('active'));
  
  // Legg til aktiv klasse på den klikkede boksen
  clickedBox.classList.add('active');

  const selectedResource = resources[index];

  // Opprett en ny informasjonsboks
  const infoBox = document.createElement("div");
  infoBox.className = "resource-info";
  infoBox.innerHTML = `
    <h2>${selectedResource.category}</h2>
    <div class="info-content">
        <p>${selectedResource.text}</p>
        <ul>
            ${selectedResource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
        </ul>
    </div>
  `;

  // Fjern all eksisterende informasjon før du viser ny informasjon
  infoContainer.innerHTML = '';

  // Legg til den valgte ressursens informasjon
  infoContainer.appendChild(infoBox);
}

// Opprett ressursbokser for hver ressurs
resources.forEach((resource, index) => createResourceBox(resource, index));
