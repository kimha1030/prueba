function getResponse() {
  let btnShowResult = document.getElementById("showResult");

  btnShowResult.addEventListener("click", function () {
    fetch("http://localhost/prueba/index.php?loadData")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        printData(data);
      })
      .catch(function (err) {
        console.log("Error", err);
      });
  });
}

function printData(data) {
  let dataInfo = data.data.result;
  let containerResult = document.getElementById("containerResult");
  dataInfo.map((item) => {
    let id = item.id;
    let contact = item.contact_no;
    let lastname = item.lastname;
    let createdTime = item.createdtime;
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `id: ${id}, Contact: ${contact}, Lastname: ${lastname}, Date created: ${createdTime}`;
    containerResult.append(paragraph);
  });
}

getResponse();
