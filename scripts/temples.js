//navigation bars
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});




// footer info
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;