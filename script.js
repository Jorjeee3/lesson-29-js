const linkItems = document.querySelectorAll(".item-link");
const getFocus = document.querySelector(".active");

for (item of linkItems) {
    linkItems.addEventListener("click", focusItem)
}

function focusItem() {
    if (linkItems.classList.contains("active")) {
        linkItems.classList.remove("active");
    } else {
        linkItems.classList.add("active");
    }
}
