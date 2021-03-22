const selectEl = (el) => document.querySelector(el);
const selectAllEl = (el) => document.querySelectorAll(el);

selectEl(".mobile-menu").addEventListener("click", () => {
	selectEl("header").classList.toggle("active");
});

// selectEl(".nav-link-search").addEventListener("click", () => {
// 	selectAllEl("#item-to-hide").forEach((el) => {
// 		el.classList.add("hide-item");
// 		selectEl(".search-form-container").classList.add("active");
// 	});
// });

// selectEl(".close-button").addEventListener("click", () => {
// 	selectAllEl("#item-to-hide").forEach((el) => {
// 		el.classList.remove("hide-item");
// 		selectEl(".search-form-container").classList.remove("active");
// 	});
// });

// const itemLength = selectAllEl(".hide-item").length;

// selectAllEl(".hide-item").forEach((el) => {
// 	el.style.transitionDelay = `${itemLength / 10} s`;

// 	itemLength--;
// });
