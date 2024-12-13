const accordeon = document.querySelector(".accordeon");
const d_element = accordeon.querySelectorAll("details");

d_element.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      
        if (detail.open) {
            d_element.forEach((ele) => {
                if (ele !== detail) {
        
                    ele.removeAttribute("open");
                }
            });
        }
    });
});