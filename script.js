$('#create-event').on('click', function () {
    alert('criando evento');
});


// setTimeout(function () {
//     alert('alert');
// }, 1000);

$("#table-event").hide();

$.getJSON('./data.json', function (data) {
    var items = [];
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

            ["eye", "edit", "trash-alt"].forEach(function (value) {
                btnGroup.push(
                    "<button type='button' class='btn'>" +
                    "<i class='text-primary fa-lg far fa-" + value + "'></i>" +
                    "</button>"
                );
            });

            item.push("<td>" +
                "<span class='btn-group btn-group-sm' role='group' aria-label='Ações com a linha'>" +
                btnGroup.join(' ') + "</span>" +
                "</td>"
            );

            items.push("<tr>" + item.join() + "</tr>");
            // $("#table-app").fadeIn('slow', function () {
            //     $("<tr/>", {html: item.join("")}).append("#data");
            // });
        }
    );
    // $("#loading").fadeOut(3000, function () {
    //     $("#table-app").show();
    // });
});
