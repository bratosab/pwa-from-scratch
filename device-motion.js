const handleMotionEvent = (event) => {
  const el = document.getElementById("motion");
  console.log(event);
  // el.innerText = (Math.round((event.acceleration.x + Number.EPSILON) * 100) / 100) + ' m/s2';
  // el.innerText = event.rotationRate.beta;
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(console.log);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

const locationBtn = document.getElementById("location");
locationBtn.addEventListener("click", (event) => getLocation());
window.addEventListener("devicemotion", handleMotionEvent, true);