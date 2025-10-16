document.addEventListener("DOMContentLoaded", () => {
const packageSelect = document.getElementById("Package-type");
const infoBox = document.getElementById("infobox");
const infoLabel = document.querySelector("label[for='infobox']");

function updateInfoBox() {
    const isCustom = packageSelect.value.toLowerCase() === "custom";
    infoBox.required = isCustom;
    infoLabel.textContent = isCustom
        ? "More info about your site *"
        : "More info about your site";
    infoBox.placeholder = isCustom
        ? "Please describe your custom site requirements."
        : "Describe any specifics about the site you're wanting.";
}


updateInfoBox();


packageSelect.addEventListener("change", updateInfoBox);
});
