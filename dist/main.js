const renderer = new Renderer

const fetchData = function () {
    const input = $("#search").val().toLowerCase()
    $.get(`/recipes/${input}`, function (data) {
        const recipes = data.map(r => {
            return {
                title: r.title,
                href: r.href,
                ingredients: r.ingredients,
                thumbnail: r.thumbnail
            }
        })
        renderer.renderData(recipes)
    })
}

$("#search-button").on("click", fetchData)

