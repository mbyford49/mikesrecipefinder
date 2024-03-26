const openModalButton = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalSpan = document.getElementsByClassName("close-modal");

openModalButton.addEventListener("click", function() {
    modal.classList.remove("hidden");
});


// ****JIM YOUTUBE CODE



// const searchTerms = ["fish","bacon", "broccoli"];

// const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];

// const YOUTUBE_API_KEY = "";

// added dynamic searches into API request
const searchHandler = (e)=>{
    e.preventDefault()
    console.log("searching")
    const ingredient1 = document.getElementById("ingredient1").value
    const ingredient2 = document.getElementById("ingredient2").value
    const ingredient3 = document.getElementById("ingredient3").value
    const ingredients = [ingredient1,ingredient2, ingredient3] ;

    console.log(ingredients)

    const url = `https://api.spoonacular.com/recipes/search?apiKey=444f40431ebe48f792441b4ccde7ecca&number=3&ingredients="${ingredient1},${ingredient2},${ingredient3}` ;
  
  
    const youtubeurl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${ingredient1}+${ingredient2}+${ingredient3}&key=AIzaSyCTDKpNNSBmISaHBE4GB_8ibaWi7_bt7-Q`;

        

fetch(url)
  .then(response => response.json())
  .then(data => {
    fetch(youtubeurl)
    .then(response => response.json())
    .then(data =>{

      const resultsh3 = document.getElementById("results")
    for (i=0; i<3; i++){
      console.log(data)
      const videoTitle = data.items[i].snippet.title
      const videoURL = `https://www.youtube.com/watch?v=${data.items[i].id.videoId }`
     

      //Make the html to store info

      const nameHtml = document.createElement("h3")
      const nameURL = document.createElement("h5")
      

      
      //Put the info into html
      
      nameHtml.textContent = videoTitle
      nameURL.textContent = videoURL
      

      //append the newly created html element

      resultsh3.append(nameHtml, nameURL,)
    }

      console.log(data)
    })

    // store refence to and existing point on the page
    console.log(data)
    const resultsh2 = document.getElementById("results")
    for (i=0; i<3; i++){
        const dishName = data.results[i].title
        const dishURL = data.results[i].sourceUrl
        

        //Make the htmal to store info

        const nameHtml = document.createElement("h3")
        const nameURL = document.createElement("h5")
        

        
        //Put the info into html
        
        nameHtml.textContent = dishName
        nameURL.textContent = dishURL
        

        //append the newly created html element

        resultsh2.append(nameHtml, nameURL, )
    }

  
    console.log(data);

//     document.querySelector(".iframeClass").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
});
}
const searchButton5= document.getElementById("submit")
searchButton5.addEventListener("click",searchHandler)




// SET AND GET FROM LOCAL STORAGE 

// const ingredients = {ingredient1,ingredient2,ingredient3}


// localStorage.url = 
// localStorage.getItem("url")

// document.getElementById("youtubeResult").innerHTML = localStorage.getItem("url");

// document.getElementById("youtubeResult").innerHTML = localStorage.getItem("url");



