function showSpinner() {
  document.getElementById("loading-spinner").classList.remove("hidden");
}
function hideSpinner() {
  document.getElementById("loading-spinner").classList.add("hidden");
}

function displayinfo(response) {
  hideSpinner();
  console.log("info generated");

  new Typewriter("#info", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    curser: "",
  });
}

function generateInfo(event) {
  event.preventDefault();

  document.getElementById("info").innerHTML = "";
  showSpinner();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d374t43e29a36b438a5593oaba8810fc";
  let context =
    "You are an expert on funny fun random information about the world and everything in it and love to give short funny random fact. Your mission is to give no more then 3 short lines of funny fun random facts in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the information.";
  let prompt = `User instructions: Generate short funny fun random info about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating info");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayinfo);
}

let infoFormElement = document.querySelector("#info-generator-form");
infoFormElement.addEventListener("submit", generateInfo);
