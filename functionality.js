/* Function that gets Rid of the Preloader
   When Page Loads, this function gets Triggered
*/
window.addEventListener("load", function() {

  // Code to Disable Right Click on Webpage
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Access the Preloader
  const preloader = this.document.getElementById("preloader");
  preloader.classList.add("preloader-finish");
  
  console.log("Website Loaded :)");

  alert("The Data used in this Website is Imaginary and just for Project purposes :)");
});