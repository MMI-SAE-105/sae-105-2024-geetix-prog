const accordions = document.querySelectorAll(".accordeon");

accordions.forEach((accordeon) => {
    const d_elements = accordeon.querySelectorAll("details");

    d_elements.forEach((detail) => {
        detail.addEventListener("toggle", () => {
            if (detail.open) {
                d_elements.forEach((ele) => {
                    if (ele !== detail) {
                        ele.removeAttribute("open");
                    }
                });
            }
        });
    });
});