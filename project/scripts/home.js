const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;


const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	menuButton.classList.toggle("open");
});