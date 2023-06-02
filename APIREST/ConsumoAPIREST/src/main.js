const URL = 'https://api.waifu.pics/sfw/cry';


// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img')
//         img.src = data[0].url;
//     }); 


const images = document.getElementsByClassName('image')
const imagen = document.querySelectorAll('.image')
const imageArray = [...imagen]
const getDog = async (image, link) => {
    const response = await fetch(link);
    const data = await response.json();
    image.src = data.url;
}
// const getWaifu = () => {Array.prototype.forEach.call(images, image => {
//         getDog(image);
//         })
//     }

const getWaifu = (link) => {
    imageArray.forEach((imag, i) => {
        getDog(imagen[i], link)
    })
}

getWaifu(URL);

const btn = document.getElementById('btn')
btn.onclick = () => getWaifu(URL);

const reload = () => getWaifu(URL);


const btnSC = document.querySelector('#btn-sc')

const changeSC = () => {
    const urlSC = 'https://api.waifu.pics/sfw/megumin';
    getWaifu(urlSC)
}