function getResponse() {
  let btnShowResult = document.getElementById("showResult");

  btnShowResult.addEventListener("click", function () {
    fetch("http://localhost/prueba/index.php?loadData")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (err) {
        console.log("Error", err);
      });
  });
}

getResponse();
