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
  containerResult.innerHTML = "";

  let table = document.createElement("table");
  table.setAttribute("class", "tableResult");
  let tblBody = document.createElement("tbody");
  let row = document.createElement("tr");

  let idTitle = "";
  insertContent(idTitle, "th", "id", row);

  let contactTitle = "";
  insertContent(contactTitle, "th", "Contact_no", row);

  let lastnameTitle = "";
  insertContent(lastnameTitle, "th", "Lastname", row);

  let dateTitle = "";
  insertContent(dateTitle, "th", "Date created", row);
  tblBody.appendChild(row);

  dataInfo.map((item) => {
    let row = document.createElement("tr");

    let idField = "";
    insertContent(idField, "td", item.id, row);

    let contactField = "";
    insertContent(contactField, "td", item.contact_no, row);

    let lastnameField = "";
    insertContent(lastnameField, "td", item.lastname, row);

    let dateField = "";
    insertContent(dateField, "td", item.createdtime, row);

    tblBody.appendChild(row);
  });
  table.appendChild(tblBody);
  containerResult.appendChild(table);
}

function insertContent(nameVar, element, content, parent) {
  nameVar = document.createElement(element);
  nameVar.innerHTML = content;
  parent.appendChild(nameVar);
}

getResponse();
