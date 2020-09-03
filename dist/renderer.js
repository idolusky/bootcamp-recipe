class Renderer {


    renderData = function (recipe) {
        $("#results").empty()
        const source = $("#recipe-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({ recipe })
        $('#results').append(newHTML);
    }

}