const imgInput = document.querySelector('#imgInput')
const imgSearchBtn = document.querySelector('#imgBtn')
const searchMoreBtn = document.querySelector('#searchMoreBtn')
const mainResult = document.getElementById('mainResult')

const accessKey = 'Pyf9qezBkjT22LCK13m5dhrXbFhBy2yIPnN6-y6EV_E';
let page = 1;
let keyword = '';

async function searchImg(){
    keyword  = imgInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    const results = data.results;
    results.map((result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.style.width = '350px'
        image.style.height = '300px'
        image.style.borderRadius = '10px';
// ==============================
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
// ==============================
        imageLink.appendChild(image);
        mainResult.appendChild(imageLink);
    })
}

// -------------------------------
imgSearchBtn.addEventListener('click', ()=>{
    mainResult.innerHTML = '';
    searchImg()

    setTimeout(()=>{
        searchMoreBtn.style.display = 'block';
    }, 1000)

})

// ---------------------------------
searchMoreBtn.addEventListener('click', () => {
    page++;
    searchImg();
})
