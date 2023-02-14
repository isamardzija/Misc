function main() {
  const submitRecipe = document.querySelector("#submitRecipe");
  const newRecipe = document.querySelector("#newRecipe");
  const defaultSubmit = submitRecipe.textContent;
  const allRecipes = document.querySelector(".allRecipes");

  // učitaj sve recepte prilikom loada webstranice
  loadAllRecipes();

  // prilikom submittanja forme za nove recepte, posalji POST fetch API
  newRecipe.addEventListener("submit", zapisiRecept);

  async function zapisiRecept(e) {
    e.preventDefault();
    const recept = new FormData(newRecipe);
    submitRecipe.textContent = "Upisujem...";
    try {
      const posaljiRecept = await fetch("http://localhost:3000/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(recept)),
      }).then((posaljiRecept) => posaljiRecept.json());
      console.log(posaljiRecept);
      newRecipe.reset();
      submitRecipe.textContent = defaultSubmit;
      const successMessage = document.createElement("p");
      successMessage.classList.add("success");
      successMessage.textContent = `Recept uspješno upisan.`;
      newRecipe.append(successMessage);
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    } catch (err) {
      console.log("Dogodila se pogreška!", err);
      submitRecipe.textContent = defaultSubmit;
      const errorMessage = document.createElement("p");
      errorMessage.classList.add("error");
      errorMessage.textContent = "Došlo je do pogreške!";
      newRecipe.append(errorMessage);
      setTimeout(() => {
        errorMessage.remove();
      }, 5000);
    }
  }
  async function loadAllRecipes() {
    const dohvatiRecepte = await fetch("http://localhost:3000/api/recipes/");
    const parsajRecepte = await dohvatiRecepte.json();
    const sviRecepti = parsajRecepte.docs;
    console.log(parsajRecepte);
    sviRecepti.forEach((recept) => {
      const jedanRecept = document.createElement("section");
      const naslovRecepta = document.createElement("h2");
      const obrisiRecept = document.createElement("button");
      const urediRecept = document.createElement("button");
      //
      jedanRecept.setAttribute("id", recept.id);
      urediRecept.classList.add("urediRecept");
      obrisiRecept.classList.add("obrisiRecept");
      naslovRecepta.classList.add("naslovRecepta");
      naslovRecepta.textContent = recept.title;
      const tekstRecepta = document.createElement("p");
      naslovRecepta.classList.add("tekstRecepta");
      tekstRecepta.textContent = recept.instructions;
      obrisiRecept.textContent = "X";
      urediRecept.textContent = "Edit";
      obrisiRecept.addEventListener("click", deleteThisRecipe);
      urediRecept.addEventListener("click", editThisRecipe);
      //
      jedanRecept.append(
        naslovRecepta,
        urediRecept,
        obrisiRecept,
        tekstRecepta
      );
      allRecipes.append(jedanRecept);
    });
  }

  async function deleteThisRecipe(element) {
    element.target.parentElement.remove();
    fetch(
      `http://localhost:3000/api/recipes/${element.target.parentElement.id}`,
      {
        method: "DELETE",
      }
    );
  }

  function editThisRecipe(element) {
    console.log(element);
  }
}

main();
