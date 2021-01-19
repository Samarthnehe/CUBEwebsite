
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Speedcubers", "Creators", "Record Breakers", "Innovators"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



const map = document.querySelector('#contact')

// simulates arriving at #Who-We-Are for the purpose of this example
    
        addEventListener('DOMContentLoaded', event => {
        if (window.location.hash === 'contact') {
            map.scrollIntoView({behavior: "smooth", block: "start"});
        }
        });
window.onload=()=>{
  // var switcher= document.getElementById("switch");
  // var toggler2=document.getElementById("toggler2");
  // var toggler1=document.getElementById("toggler1");
  
  // // console.log(switcher);
  // console.log(toggler1);
  // toggler2.onclick=()=>{
  //   document.getElementsByClassName("team")[0].style.display="none";
  // }
  // toggler1.onclick=()=>{
  //   document.getElementsByClassName("team")[1].style.display="none";
  // }
  var toggleSwitch = document.getElementById('switch');
  var toggleContainer = document.getElementById('switch-container');
  var toggleContainer
var toggleNumber;
var t2 = document.getElementsByClassName("team")[1];
var t1 = document.getElementsByClassName("team")[0];

toggleSwitch.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
		toggleContainer.style.backgroundColor = 'rgb(86,96,158)';
		t1.style.display = "none";
		//t1.style.visibility = "hidden";
		// t1.style.clipPath = 'inset(0 0 0 50%)';
		t2.style.display = "block";
		//t1.style.visibility = "visible";
		// t2.style.clipPath = 'inset(0 50% 0 0)';
		
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
		toggleContainer.style.backgroundColor = '#5141B0';
		t1.style.display = "block";
		//t1.style.visibility = "visible";
		// t1.style.clipPath = 'inset(0 50% 0 0)';
		t2.style.display = "none";
		//t1.style.visibility = "hidden";
		// t2.style.clipPath = 'inset(0 0 0 50%)';
	}
	console.log(toggleNumber)
});

}
 