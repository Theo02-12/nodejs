const title = document.querySelector('#name');
const container = document.querySelector('#row')
const newRow = document.querySelector('#newRow')
const showArticle = document.querySelector('#showArticle')
const deleteFetch = document.querySelector('#deleteFetch')
let count = 0;


deleteFetch.addEventListener('click', () => {
    container.remove();
    location.reload();
})


showArticle.addEventListener('click', () => {

    count++;
    console.log(count);
    if (count == 1) {
        fetch('http://localhost:3000/api')
            .then(res => res.json())
            .then(data => {
                data.articles.forEach(element => {
                    const srcImg = "http://127.0.0.1:5500/" + element.img;
                    container.innerHTML += `
                        <div class="row my-3" id="newRow">
                            <div class="col-10">
                                <div class="card mx-3 d-flex flex-row mw-50"">
                                    <img src="${srcImg}" class="card-img-top w-25 object-fit-cover" alt="...">
                                    <div class="card-body ">
                                    <h5 class="card-title">${element.name}</h5>
                                    <p class="card-text">${element.description}</p>
                                    <a href="#" class="btn btn-primary">Acheter</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <i class="bi bi-hand-thumbs-up text-primary"></i>
                                <i class="bi bi-hand-thumbs-down"></i>
                            </div>
                        </div>`;
                });
            })
    }

})
