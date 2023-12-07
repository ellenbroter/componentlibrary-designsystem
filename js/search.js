const searchInput = document.querySelector(".search-input");
const errorMessage = document.querySelector(".error-message");
const searchButton = document.querySelector(".search-button");
let exceedCharLimit = false;

searchInput.addEventListener("input", () => {
	errorMessage.style.display = "none";
	exceedCharLimit = false;
	if (searchInput.textLength >= 50) {
	  errorMessage.style.display = "block";
	  errorMessage.textContent = "You have already typed 50 characters!";
	  exceedCharLimit = true;
	}
 });

const search = () => {
	if (searchInput.value.trim() === "") {
	  errorMessage.style.display = "block";
	  errorMessage.textContent = "Please enter a search!";
	  return;
	}
	if (exceedCharLimit) {
	  return;
	}
};

searchButton.addEventListener("click", search);