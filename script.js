const formulario = document.querySelector("form");
const ititle = document.querySelector(".title");
const iyear = document.querySelector(".year");
const iimgUrl = document.querySelector(".imgUrl");
const ishortDescription = document.querySelector(".shortDescription");
const ilongDescription = document.querySelector(".longDescription");

function jogos(){
    fetch("http://localhost:8080/games",
    {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "GET",

        body: JSON.stringify({
            title: ititle.value,
            year: iyear.value,
            imgUrl: iimgUrl.value,
            shortDescription: ishortDescription.value
        }) 
    })
      .then(function (res){console.log(res)})
      .catch(function(res){console.log(res)})  

}



