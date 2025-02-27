document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".ingredient").forEach(ingredient => {
        ingredient.addEventListener("mouseover", () => {
            const info = ingredient.getAttribute("data-info");
            const tooltip = document.createElement("div");
            tooltip.className = "tooltip";
            tooltip.innerText = info;
            document.body.appendChild(tooltip);
        });
        ingredient.addEventListener("mouseout", () => {
            document.querySelector(".tooltip").remove();
        });
    });
});
