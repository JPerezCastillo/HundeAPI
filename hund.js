const Hund = document.getElementById("hund");
const API = "https://dog.ceo/api/breeds/image/random";
const spinner = document.getElementById("spinner");
spinner.classList.add("notvisible");
document.getElementById("like").addEventListener("click",()=>rankingHund("+"));
document.getElementById("dislike").addEventListener("click",()=>rankingHund("-"));

const likeH = document.getElementById("likeH");
const dislikeH = document.getElementById("dislikeH")

likeH.classList.add("notvisible");
dislikeH.classList.add("notvisible");

document.getElementById("springen").addEventListener("click",newHund);

Hund.addEventListener("load" ,() => {
    Hund.classList.toggle("notvisible", false);
    spinner.classList.toggle("notvisible", true)
})

function rankingHund(ranking) { 
    const newImage = document.createElement("img");
    newImage.src= Hund.src;

    if(ranking === "+"){
        likeH.appendChild(newImage);
        likeH.classList.toggle("notvisible", false)
    }else{
        dislikeH.appendChild(newImage);
        dislikeH.classList.toggle("notvisible", false)
    }
    newHund();

}
async function newHund() {
   spinner.classList.toggle("notvisible", false);
    Hund.classList.toggle("notvisible", true);
    const res= await fetch(API);
    const resJson = await res.json();
    console.log(resJson);
    Hund.src = resJson.message
   
}


newHund();

// externa API ,leer resultado manipular dom , hover 