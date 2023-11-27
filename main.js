const btnFilter = document.querySelector('.icon-filter')

btnFilter.addEventListener('click', () => {

    const containerFilter = document.querySelector('.container-filter')

    containerFilter.classList.toggle('active')
})


const myURL= "https://pokeapi.co/api/v2/type" ;

const button= document.querySelector(".button");

const input = document.querySelector("#nameInput");

function fetchTipo(name) {
    const url = myURLUrl + name; // toma la url del api, y agrega el nombre (valor del input)
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("no se pudo conectar con la API");
        }
        return response.json(); // Convierto los datos a JSON
      })
      .then((data) => {
        console.log(data); // Muestro en consola los datos
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  button.addEventListener("click", function () {
    fetchTipo(input.value);
  });