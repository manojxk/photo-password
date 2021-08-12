var thisForm = document.getElementById("form");
thisForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  var formData = new FormData(thisForm);
  var url = formData.get("url");
  var chars = formData.get("chars");
  if (chars != null) {
    chars = "true";
  } else {
    chars = "false";
  }
  var caps = formData.get("caps");
  if (caps != null) {
    caps = "true";
  } else {
    caps = "false";
  }
  var length = formData.get("length");

  const URL= "https://fun9799.herokuapp.com/" +  url + "/" + caps + "/" + chars +  "/" +  length.toString()

  console.log(URL)

  var x = document.getElementById("optional");
  x.style.display = "none";
  document.getElementById("demo").style.display = "block";

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(URL, requestOptions)
    .then(response => response.json())
    .then(result => {
      document.getElementById("demo").innerHTML = "Code: " + result.code;
      document.getElementById("demo").style.color = "#313131";
    })
    .catch(error => {
      document.getElementById("demo").innerHTML = error;
    document.getElementById("demo").style.color = "red";
    });

  thisForm.reset();
});

var toggle = document.getElementById("toggle");
toggle.addEventListener("click", async function (e) {
  e.preventDefault();
  var x = document.getElementById("optional");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("demo").style.display = "none";
  } else {
    x.style.display = "none";
  }
});
