window.onload = achar("load");

function achar(situacao) {
  if (situacao == "load") {
    $.ajax({
      url: "/jasonalunos",
      type: "GET",
      data: {
        mandioca: " ",
      },
    })
      .done(function (json) {
        let list = "";
        for (let i in json) {
          list += "<tr>";
          list += "<td>" + json[i].nome + "</td>";
          list += "<td>" + json[i].email + "</td>";
          list += "</tr>";
        }
        $("#tabelote tbody").html(list);
        // // console.log(spanLength);
      })
      .fail(function (jqXHR, textStatus, msg) {
        alert(msg);
      });
  } else {
    $.ajax({
      url: "/jasonalunos",
      type: "GET",
      data: {
        mandioca: $("input[name='aluno10']").val(),
      },
    })
      .done(function (json) {
        let list = "";
        for (let i in json) {
          list += "<tr>";
          list += "<td>" + json[i].nome + "</td>";
          list += "<td>" + json[i].email + "</td>";
          list += "</tr>";
        }
        $("#tabelote tbody").html(list);
      })
      .fail(function (jqXHR, textStatus, msg) {
        alert(msg);
      });
  }
}
