// 7

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => getPhotos(json));

const getPhotos = photos => {
    const allPhoto = document.getElementById('photos');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div onclick=" loadDetails('${photo.thumbnailUrl}')" class="col">
                <div class="card h-100">
                <img src="${photo.thumbnailUrl}" />
                    <div class="card-body">
                        <h5 class="card-title">${photo.title.slice(0, 40)}</h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>        
            `;
        allPhoto.appendChild(div);
    });
};
// onclick= "loadDetails('${photo.thumbnailUrl}')"

function loadDetails(id) {
    const url = `https://via.placeholder.com/150/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
};
// loadDetails('92c952');
