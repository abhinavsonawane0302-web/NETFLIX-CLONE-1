

const addMovieBtn = document.getElementById("addMovieBtn")
const movieContainer = document.getElementById("movieContainer")
const movieform = document.getElementById("movieform")
const moviename = document.getElementById("moviename")
const imgurl = document.getElementById("imgurl")
const description = document.getElementById("description")
const rating = document.getElementById("rating")
const Cancel = document.getElementById("Cancel")
const moviemodal = document.getElementById("moviemodal")
const closemodalBtn = document.getElementById("closemodalBtn")
const addmovie = document.getElementById("addmovie")
const Updatebtn = document.getElementById("Updatebtn")
const modaltitle = document.getElementById("modaltitle")



let moviearr = [

    {
        name:"The Fast and the Furious",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SuDf_oH4lj9YNW4lmNOvGBIZ5IcQp-oX5sryTJ5xR4s6KTm6bdH3PJ7pPuOXF3WpbWol&s=10",
        description: "A spate of high-speed robberies in LA brings street racer Dominic Toretto and his crew under the LAPD scanner.FBI agent Brian goes undercover and befriends Toretto in a bid to investigate the matter",
        rating: "5",
        id: "1"


    },

    {
        name:"2 Fast 2 Furious",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KgKJXMLYIM2NAi1fKV4RWWvsIH8SONKNq5D6rp2tioh4-WA77_bPthvaLHrb70CPtDjV&s=10",
        description: "A spate of high-speed robberies in LA brings street racer Dominic Toretto and his crew under the LAPD scanner.FBI agent Brian goes undercover and befriends Toretto in a bid to investigate the matter",
        rating: "5",
        id: "2"


    },

    {
        name:"The Fast and the Furious: Tokyo Drift",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QzjtMRGD0ky6jZ1OCahgoxH4ULqoED0qenp1e2k0uXCoO272nz-NQJXwNwSNi4iPdzru3w&s=10",
        description: "A spate of high-speed robberies in LA brings street racer Dominic Toretto and his crew under the LAPD scanner.FBI agent Brian goes undercover and befriends Toretto in a bid to investigate the matter",
        rating: "5",
        id: "3"


    },

    {
        name:"Fast & Furious",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEOOdfcMaY9WgIuXwc_weJdBNW9BnD7FbMQYvVQ4-Ww&s=10",
        description: "A spate of high-speed robberies in LA brings street racer Dominic Toretto and his crew under the LAPD scanner.FBI agent Brian goes undercover and befriends Toretto in a bid to investigate the matter",
        rating: "5",
        id: "4"


    },


    
    {
        name:"Fast Five",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDz5WS9kzSb87rb2z6G4VYBqjnkRhRnZc1Lhl-1X9fg&s=10",
        description: "A spate of high-speed robberies in LA brings street racer Dominic Toretto and his crew under the LAPD scanner.FBI agent Brian goes undercover and befriends Toretto in a bid to investigate the matter",
        rating: "5",
        id: "5"


    },


    
    {
        name:"Fast & Furious 6",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS0HA91pwiEP_jam-1OBQKRyNsXFj0a0QjvJlHROH3OQ&s",
        description: "A spate of high-speed robberies in LA brings street racer Dominic Toretto and his crew under the LAPD scanner.FBI agent Brian goes undercover and befriends Toretto in a bid to investigate the matter",
        rating: "5",
        id: "6"


    }



]


// localStorage.setItem("movies",JSON.stringify(moviearr))




//let movies = JSON.parse(localStorage.getItem("movies"))


function readcard(arr) {
    let result = ``;
    arr.forEach(ele => {
        result += ` 

                    <div class="col-md-3" id="${ele.id}">
                         <div class="card mt-3 movieCard">
                            <div class="card-header d-flex justify-content-between">
                                <h4 class="movieTitle">${ele.name}</h4>
                                <h5><span class="badge badge-success">${ele.rating}</span></h5>
                            </div>
                            <div class="card-body">
                                  <figure class="py-0">
                                       <img src="${ele.img}" alt="fast&furious" class="card-img">
                                        <figcaption>
                                             <h5>${ele.name}</h5>
                                             <p>${ele.description}</p>
                                        </figcaption>

                                    </figure>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                  <button onclick="onedit(this)" class="btn btn-sm net-sec-btn" data-edit-id="${ele.id}">Edit</button>
                                  <button onclick="ondelete(this)" class="btn btn-sm net-pri-btn" data-delete-id="${ele.id}">Delete</button>
                             </div>
                        </div>
                    </div>
        
        `


    })

    movieContainer.innerHTML = result;
}

readcard(moviearr)



function oncreate(ele) {
    ele.preventDefault()

    let movieobj = {

        name: moviename.value,
        img: imgurl.value,
        description: description.value,
        rating: rating.value,
        id: Date.now().toString()

    }

    moviearr.push(movieobj)
    movieform.reset()



   // localStorage.setItem("movies",JSON.stringify(movies))




    let moviecol = document.createElement("div")

    moviecol.classList = "col-md-3"
    moviecol.id = movieobj.id
    moviecol.innerHTML = `

                         <div id="${movieobj.id}">
                         <div class="card mt-3 movieCard">
                            <div class="card-header d-flex justify-content-between">
                                <h4 class="movieTitle">${movieobj.name}</h4>
                                <h5><span class="badge badge-success">${movieobj.rating}</span></h5>
                            </div>
                            <div class="card-body">
                                  <figure class="py-0">
                                       <img src="${movieobj.img}" alt="fast&furious" class="card-img">
                                        <figcaption>
                                             <h5>${movieobj.name}</h5>
                                             <p>${movieobj.description}</p>
                                        </figcaption>

                                    </figure>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                  <button onclick="onedit(this)" class="btn btn-sm net-sec-btn" data-edit-id="${movieobj.id}">Edit</button>
                                  <button onclick="ondelete(this)" class="btn btn-sm net-primary-btn" data-delete-id="${movieobj.id}">Delete</button>
                             </div>
                        </div>
                    </div>
        
    
    
    `
    movieContainer.append(moviecol)

    movieform.reset()

    moviemodal.style.display = "none"

}


function onedit(ele) {
    let editid = ele.getAttribute("data-edit-id")

    editId = editid

    let editobj = moviearr.find(e => e.id === editid)

    moviename.value = editobj.name
    imgurl.value = editobj.img
    description.value = editobj.description
    rating.value = editobj.rating

    addmovie.classList.add("d-none")
    Updatebtn.classList.remove("d-none")

    Updatebtn.setAttribute("data-edit-id",editid)

    moviemodal.style.display ="flex"

    modaltitle.innerText ="Update Movie"

}

function onupdate() {
    let updateid = this.getAttribute("data-edit-id")

    

    let getindex = moviearr.findIndex(u => u.id === updateid)
    



        moviearr[getindex].name = moviename.value,
        moviearr[getindex].img = imgurl.value,
        moviearr[getindex].description = description.value,
        moviearr[getindex].rating = rating.value,
        

   // localStorage.setItem("movies", JSON.stringify(movies));

    

    readcard(moviearr)

    Updatebtn.classList.add("d-none")
    addmovie.classList.remove("d-none")

    moviemodal.style.display = "none"

    modaltitle.innerText = "Add Movie"

    movieform.reset()

}

function ondelete(ele){

    let deleteid = ele.getAttribute("data-delete-id")

    let movieindex = moviearr.findIndex(d => d.id === deleteid)

    let confirmdelete = confirm(`are you sure you wont to delete movie ?`)

    if(!confirmdelete){
        return;
    }


    moviearr.splice(movieindex,1)

  //  localStorage.setItem("movies", JSON.stringify(movies))

    readcard(moviearr)

}



movieform.addEventListener("submit", oncreate)
Updatebtn.addEventListener("click", onupdate)

addMovieBtn.addEventListener("click", function () {
    moviemodal.style.display = "flex"
})

closemodalBtn.addEventListener("click", function () {
    moviemodal.style.display = "none"

    movieform.reset()
})



