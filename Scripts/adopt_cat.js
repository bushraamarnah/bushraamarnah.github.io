const id = localStorage.getItem("cat_id");
const Url = `https://api.thecatapi.com/v1/images/${id}`;
const params = {
  method: "GET",
  headers: {
    "x-api-key": "10815387-1361-43ce-9595-7cf5b47614dc",
  },
};

async function getData() {
  const response = await fetch(Url, params);
  const data = await response.json();
  var container = document.getElementById("photo_of_cats");
  container.innerHTML += "<img src='" + data.url + "'></img>";
}

function loadDataOnStart() {
	var keys = ["name", "age", "color", "breed"];
	for (var i = 0; i < keys.length; i++) {
		if (!localStorage.getItem(keys[i]) || localStorage.getItem(keys[i]).split(" ").length == 0) {
			return;
		}
	}

	var arr_name = new Array();
  var arr_age = new Array();
  var arr_color = new Array();
	var arr_breed = new Array();

	arr_name = localStorage.getItem("name").split(" ");
  arr_age = localStorage.getItem("age").split(" ");
  arr_color = localStorage.getItem("color").split(" ");
	arr_breed = localStorage.getItem("breed").split(" ");

	var tab = document.getElementById("sub_data_table");
	for (var i = 0; i < arr_name.length; i++) {
		if (arr_name[i] == "null" || arr_age[i] == "null" || arr_color[i] == "null" || arr_breed[i] == "null") {
			continue;
		}

		var tr = document.createElement("tr");
		tab.appendChild(tr);
		var td = document.createElement("td");
		tr.appendChild(td);
		var text = document.createTextNode(arr_name[i]);
		td.appendChild(text);

		var td2 = document.createElement("td");
		tr.appendChild(td2);
		var text2 = document.createTextNode(arr_age[i]);
		td2.appendChild(text2);

		var td3 = document.createElement("td");
		tr.appendChild(td3);
		var text3 = document.createTextNode(arr_color[i]);
		td3.appendChild(text3);

		var td4 = document.createElement("td");
		tr.appendChild(td4);
		var text4 = document.createTextNode(arr_breed[i]);
		td4.appendChild(text4);
	}
}

function CreateTable() {
  var arr = new Array();
	var keys = ["name", "age", "color", "breed"];
  for (var i = 0; i < 4; i++) {
		arr[i] = document.getElementById(keys[i]).value;
    if (arr[i] == null) {
      window.alert("Please write all data");
      return;
    }
	}
	for (var i = 0; i < 4; i++) {
  	localStorage.setItem(keys[i], localStorage.getItem(keys[i]) + " " + arr[i]);
	}

	var tab = document.getElementById("sub_data_table");
  var tr = document.createElement("tr");
  tab.appendChild(tr);
  for (var i = 0; i < 4; i++) {
    var td = document.createElement("td");
    tr.appendChild(td);
    var text = document.createTextNode(arr[i]);
    console.log(arr[i]);
    td.appendChild(text);
  }
}

window.onload = function() {
  getData();
  loadDataOnStart();
};