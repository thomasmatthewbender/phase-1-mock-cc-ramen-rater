// write your code here


// write your own pseudocode based on instructions: when the page loads, 1)  request the ramen data, then 2) display each ramen in img tag <img src="" alt="">, then 3) each ramen img tag should be in the ramen-menu div 
/*
let ramenMenu = document.getElementById('ramen-menu')

const requestRamen = async () => {
  console.log('Getting ramen ...')
  let req = await fetch('http://localhost:3000/ramens')
  let res = await req.json()
  console.log("Response", res)
  res.forEach((element) => {
    console.log('Element', element)
    let img = document.createElement('img')
    img.setAttribute('src', element.image)
    // ^ would also work in most situations: img.src = element.img
    ramenMenu.appendChild(img)
  })
}



requestRamen()

*/

let ramenMenu = document.getElementById('ramen-menu')
let ramenImage = document.getElementById('r-img')
let ramenName = document.getElementById('r-name')
let ramenRestaurant = document.getElementById('r-restaurant')

const requestRamen = async () => {
  let req = await fetch('http://localhost:3000/ramens')
  let res = await req.json()
  // array of objects
  res.forEach((element) => {
    let img = document.createElement('img')
    img.setAttribute('src', element.image)
    img.addEventListener('click', () => {
      ramenImage.setAttribute('src', element.image)
      ramenName.innerHTML = element.name
      ramenRestaurant.innerHTML = element.restaurant
    })
    ramenMenu.appendChild(img)
  })
}

requestRamen()




















/*
const ramenApi = () => {
  return fetch('http://localhost:3000/ramens')
    .then(response => response.json())
  }


  const ramenImage = () => {document.createElement('img')
  
  image.src  = '/Users/thomasbender/Development/code/phase-1/phase-1-mock-cc-ramen-rater/assets'

  document.querySelector('.container').appendChild(image)
  }

const ramenImages = Array.from(ramenApi)

document.getElementById('ramen-menu').innerHTML = ramenApi



function clickHandler() {
  console.log('added new ramen');
}

const btn = document.querySelector('ramen-menu');
btn.addEventListener('click', clickHandler);

const newTH = document.createElement('th');
newTH.addEventListener( 'click', function(){
  // delete the column here
} );


const response = fetch("http://localhost:3000/ramens") // return value of this method call will be a promise object
.then(resp => resp.json()) //return another promise
.then(characters => {
  // handle this array of characters so that each character renders to the DOM

  //forEach
  characters.forEach(renderPokemon)

  */