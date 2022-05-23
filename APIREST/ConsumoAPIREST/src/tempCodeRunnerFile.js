const URL = 'https://dog.ceo/api/breeds/image/random';


// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img')
//         img.src = data[0].url;
//     }); 


const getDog = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    
    const img = document.querySelector('img')
    img.src = data.message;
}

getDog();