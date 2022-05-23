const URL = 'https://api.waifu.pics/sfw/waifu';


// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img')
//         img.src = data[0].url;
//     }); 


const images = document.getElementsByClassName('image')
const getDog = async (image) => {
    const response = await fetch(URL);
    const data = await response.json();
    image.src = data.url;
}
const getWaifu = () => {Array.prototype.forEach.call(images, image => {
        getDog(image);
        })
    }


getWaifu();

const btn = document.getElementById('btn')
btn.onclick = () => getWaifu();

const reload = () => getWaifu();