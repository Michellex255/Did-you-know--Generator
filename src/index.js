function generateInfo(event) {
  event.preventDefault();

  new Typewriter("#info", {
    strings: [
      "On Earth's smallest continent, Europe, you'll find the smallest town in the world.",
    ],
    autoStart: true,
    delay: 1,
    curser: "",
  });
}

let infoFormElement = document.querySelector("#info-generator-form");
infoFormElement.addEventListener("submit", generateInfo);
