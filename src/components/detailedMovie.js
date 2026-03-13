import { movieGenres } from "./Movie"

export function DetailedMovie(item) {
    let container = document.querySelector(".movie-content")
    let bgBox = document.querySelector(".bg-box")

    container.innerHTML = ""

    bgBox.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
    bgBox.style.backgroundSize = "cover";
    bgBox.style.backgroundPosition = "center";

    let parentBox = document.createElement("div")
    parentBox.className = "parent-box"

    let bottomContainer = document.createElement("div")
    bottomContainer.className = "bottomContainer"

    const left = document.createElement("div");
    left.className = "cn-movie-left";

    const img = document.createElement("img");
    img.className = "movie-left-img";
    img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`;

    left.appendChild(img);

    const right = document.createElement("div");
    right.className = "cn-movie-right";

    const navigation = document.createElement("p");
    navigation.className = "navigation";
    navigation.textContent = `Home > Films > ${item.title}`;

    const title = document.createElement("h3");
    title.className = "movie-title";
    title.textContent = item.title;

    const smallTitle = document.createElement("p");
    smallTitle.className = "movie-small-title";
    smallTitle.textContent = `${item.title} (${item.release_date.slice(0, 4)})`;

    const diagrams = document.createElement("div");
    diagrams.className = "diagrams";

    for (let i = 0; i < 3; i++) {
        const btn = document.createElement("button");
        btn.className = "diagram-btns";
        diagrams.appendChild(btn);
    }

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = item.overview;

    const trailerBtn = document.createElement("button");
    trailerBtn.className = "trailer-btn";
    trailerBtn.textContent = "Watch Trailer";

    const smallData = document.createElement("div");
    smallData.className = "small-data";

    const productionCompanies = item.production_companies?.map(c => c.name).join(", ") || "—";
    const budget = item.budget > 0 ? "$" + item.budget.toLocaleString() : "—";
    const revenue = item.revenue > 0 ? "$" + item.revenue.toLocaleString() : "—";

    const data = [
        "Premiere: " + item.release_date,
        "Runtime: " + (item.runtime ? item.runtime + " min" : "—"),
        "Slogan: " + (item.tagline || "—"),
        "Genre: " + (item.genres?.map(g => movieGenres[g.id] || g.name).join(", ") || "—"),
        "Year: " + item.release_date.slice(0, 4),
        "Country: " + (item.production_countries?.map(c => c.name).join(", ") || "—"),
        "Language: " + (item.original_language?.toUpperCase() || "—"),
        "Studios: " + productionCompanies,
        "Budget: " + budget,
        "Revenue: " + revenue,
        "Status: " + (item.status || "—"),
        "Rating: " + (item.vote_average?.toFixed(1) || "—") + " (" + (item.vote_count || 0) + " votes)",
    ];

    data.forEach(elem => {
        const p = document.createElement("p");
        p.className = "movie-parameters";
        p.textContent = elem;
        smallData.appendChild(p);
    });

    right.appendChild(navigation);
    right.appendChild(title);
    right.appendChild(smallTitle);
    right.appendChild(diagrams);
    right.appendChild(description);
    right.appendChild(trailerBtn);

    parentBox.appendChild(left);
    parentBox.appendChild(right);
    bottomContainer.append(smallData);
    container.append(parentBox, bottomContainer);

    return container
}
