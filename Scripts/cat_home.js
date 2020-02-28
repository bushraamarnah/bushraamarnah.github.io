
/* ... slider ... */
var slideIndex = 0;
function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/* ... api code ... */ 

const Url = "https://api.thecatapi.com/v1/images/search?limit=15&size=med";
const params = { 
	method: "GET",  
	headers: {
		"x-api-key":"10815387-1361-43ce-9595-7cf5b47614dc",
	},
};

function onClick(id) {
	localStorage.setItem("cat_id", id);
	location.href = "adopt_cat.html";
}

async function getData() { 
	const response = await fetch(Url , params);
	const data = await response.json();
	var container = document.getElementById("cats_container");
	for (var i = 0; i < data.length; i++) {
		var id = data[i].id
		var clickEl = 'onclick="onClick(id)"';
		container.innerHTML += "<div "+ clickEl +" class='col' id=" + data[i].id +"> <img src='" + data[i].url + "'></img> </a> </div>";
	}
}

/* ... main ... */ 

showSlides();
getData();