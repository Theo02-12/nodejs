const title = document.querySelector('#name');
fetch('http://localhost:3000')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        title.innerHTML = `Bonjour ${data.name}`;
        const img = new Image();
        img.src = data.img;
        document.body.appendChild(img);
    })