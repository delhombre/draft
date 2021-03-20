const selectEl = (el) => document.querySelector(el);

selectEl(".mobile-menu").addEventListener("click", () => {
	selectEl("header").classList.toggle("active");
});
