//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  
  const clearDataButton = document.querySelector("#clear-data");
  if (clearDataButton) {
    let one = document.querySelector("#question-three")
    clearDataButton.addEventListener("click", () => {
      console.log(one);
    });
  }
});

