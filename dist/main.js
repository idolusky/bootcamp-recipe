const renderer = new Renderer

let rec = {}

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
        console.log(recipes);
        renderer.renderData(recipes)
        rec = recipes
    })
}

$("#search-button").on("click", fetchData)

$("#results").on("click", "img", function () {
    alert(rec[0].ingredients[0])
})