const accessKey = "zX8e5DsL4bFKR3PCCnJQ5NVhmRmtH53Ekz" // in the github is not completed

const searchForm = document.getElementById("search-box");
const inputBox = document.getElementById("input-box");
const searchResult = document.getElementById("search-result");
const ShowMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = inputBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        //place the image in the a tag
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    ShowMoreBtn.style.display = "block"
}

ShowMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImage();
})