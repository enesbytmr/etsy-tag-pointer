var button = document.querySelector(`#submitButton`);
var loading = document.querySelector("#loading");
loading.style.display = "none"

button.addEventListener("click", getTags);

function getTags(event) {
  var url = document.getElementById("inputVal").value;
  var xhr = new XMLHttpRequest();
  console.log(url)
  xhr.open("GET", url, true);
  xhr.onprogress = function () {
    loading.style.display = "block"
  };
  xhr.onload = function () {
    loading.style.display = "none"
    var results = this.responseText
    console.log(results)
  }

  xhr.send()


  event.preventDefault();
}
