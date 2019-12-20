// $(function() {});

$('#create-event').on('click', function () {
    alert('criando evento');
});

$.getJSON('./data.json', function (data) {
    $.each(data, function (_, value) {
        var item = [], activeClass;

        ["Nome", "Data", "Local"].forEach(function (field) {
            item.push("<td>" + value[field] + "</td>");
        });

        if (value["Ativo"] === "Sim") {
            activeClass = "success";
        } else {
            activeClass = "danger"
        }

        item.push("<td class='text-" + activeClass + "'>" + value["Ativo"] + "</td>");

        // ["Ver", "Editar", "Excluir"];

        $("<tr/>", {html: item.join("")}).appendTo("#data");
    });
});
