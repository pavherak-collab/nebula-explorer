const buttons = document.querySelectorAll(".planet-btn");

const planetImage = document.getElementById("planetImage");
const planetName = document.getElementById("planetName");
const planetFact = document.getElementById("planetFact");
const planetDistance = document.getElementById("planetDistance");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
planetImage.style.transform = "scale(1.15)";
    planetImage.style.opacity = "0";
    planetImage.style.transform = "scale(0.8)";

    setTimeout(() => {

      planetImage.src = button.dataset.image;
      planetName.textContent = button.dataset.name;
      planetFact.textContent = button.dataset.fact;
      planetDistance.textContent = button.dataset.distance;

      planetImage.style.opacity = "1";
      planetImage.style.transform = "scale(1.05)";

    }, 250);

  });

});
document.addEventListener("mousemove",(e)=>{

  const x=(e.clientX/window.innerWidth-0.5)*30;
  const y=(e.clientY/window.innerHeight-0.5)*30;

  document.querySelector(".planet-wrapper").style.transform=
  `translate(${x}px,${y}px)`;

});
