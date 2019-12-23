$('#create-event').on('click', function () {
    alert('criando evento');
});

$("#table-event").hide();

$.getJSON('./data.json', function (data) {
    var items = [];
    var actions = [
        {name: "ver", icon: "eye", class: "see"},
        {name: "editar", icon: "edit", class: "edit"},
        {name: "remover", icon: "trash-alt", class: "remove"}
    ];
    $.each(data, function (_, value) {
            var item = [];
            var activeClass;
            var btnGroup = [];


            ["Nome", "Data", "Local"].forEach(function (field) {
                item.push("<td class='text-muted'>" + value[field] + "</td>");
            });

            if (value["Ativo"] === "Sim") {
                activeClass = "success";
            } else {
                activeClass = "danger"
            }

            item.push("<td class='text-" + activeClass + "'>" + value["Ativo"] + "</td>");

            actions.forEach(function (value) {
                btnGroup.push(
                    "<button type='button' class='btn'>" +
                    "<span class='sr-only'>" + value.name + "</span>" +
                    "<i class='" + value.class + " text-primary fa-lg far fa-" + value.icon + "'></i>" +
                    "</button>"
                );
            });

            item.push("<td>" +
                "<span class='btn-group btn-group-sm' role='group' aria-label='Ações com a linha'>" +
                btnGroup.join(' ') + "</span>" +
                "</td>"
            );

            items.push("<tr>" + item.join() + "</tr>");
        }
    );

    function handleClick(action) {
        alert("Você clicou para " + action + " o item.");
    }

    $("#loading").fadeOut(3000, function () {
        $("#data").append(items.join(""));
        $("#table-event").fadeIn(1000, function () {
            actions.forEach(function (value) {
                $("." + value.class).click(function () {
                    handleClick(value.name);
                })
            })
        });
    });
});
