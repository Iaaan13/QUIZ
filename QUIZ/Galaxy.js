 const seconds = document.querySelector(".seconds .number"),
 minutes = document.querySelector(".minutes .number"),
 hours = document.querySelector(".hours .number"),
 days = document.querySelector(".days .number");

let secValue = 11,
 minValue = 2,
 hourValue = 2,
 dayValue = 9;

const timeFunction = setInterval(() => {
 secValue--;

 if (secValue === 0) {
   minValue--;
   secValue = 60;
 }
 if (minValue === 0) {
   hourValue--;
   minValue = 60;
 }
 if (hourValue === 0) {
   dayValue--;
   hourValue = 24;
 }

 if (dayValue === 0) {
   clearInterval(timeFunction);
 }
 seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
 minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
 hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
 days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1s

const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");

        const indicator = document.querySelector(".indicator");

        indicator.style.left = `${index * 95 + 48}px`;
    })
})
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
