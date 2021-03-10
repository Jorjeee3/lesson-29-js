const linkItems = document.querySelectorAll(".item-link");

function focusItem() {


    for (linkItem of linkItems) {

        if (linkItem.classList.contains("active")) {
            linkItem.classList.remove("active");
        }
        
    }

    this.classList.add("active")


}

for (linkItem of linkItems) {
    linkItem.addEventListener("click", focusItem)
}

