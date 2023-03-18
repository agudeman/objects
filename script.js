const ol = document.querySelector("#movies");
const favoriteMovies = [
    {
        Name: "Mamma Mia",
        Year: 2008,
        Director: "Phyllida Lloyd",
        Picture: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/f199259b85fbd8ceb33eb3a7bba01891_8eadda86-d651-4e6e-8c3f-2370597faf1b_480x.progressive.jpg?v=1573655032",
    },
    {
        Name: "The Pineapple Express",
        Year: 2008,
        Director: "David Gordon Green",
        Picture: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8dee0df3622af0db104c5b0802601aa6_c758b531-19a6-4bd1-ad0e-da86b2fbb133_480x.progressive.jpg?v=1573595117",
    },
    {
        Name: "Everything, Everywhere, All At Once",
        Year: 2022,
        Director: "Daniel Kwan and Daniel Scheinert",
        Picture: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/everything-everywhere-all-at-once_mpmkbaml_480x.progressive.jpg?v=1649865955",
    },
];

const template = favoriteMovies.map(
    (movie) => `
    <li>
        <p>Name: ${movie.Name}</p>
        <p>Year: ${movie.Year}</p>
        <p>Director: ${movie.Director}</p>
        <img src="${movie.Picture}" alt="${movie.Name}" width="200">
    </li>
`
);

ol.innerHTML = template.join("");
