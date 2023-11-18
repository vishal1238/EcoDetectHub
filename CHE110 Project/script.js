function detectRenewableEnergy() {
  var energySource = document.getElementById("energySource").value;
  var resultElement = document.getElementById("result");

  if (energySource === "solar" || energySource === "wind" || energySource === "hydro" || energySource === "geothermal" || energySource === "biomass") {
      resultElement.textContent = "This is a renewable energy source.";
  } else {
      resultElement.textContent = "This is a Non-renewable energy source.";
  }
}
