// ========================================================
// TEACHER"S SOLUTION
// ========================================================

// I don't like how the photos are inserted on the page. That's a lot of code to so something that should only be one line.

// const imageContainer = document.querySelector("#image-container");
// const loader = document.querySelector("#loader");

// let ready = false;
// let imagesLoaded = 0;
// let totalImages = 0;
// let photosArray;

// // Unsplash API
// const count = 3;
// const apiKey = "LDmbxWDGW4mB9j2uS9XwanJAkfT2f7_q32NA4AhGsg4";
// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// // Check if all images were loaded
// function imageLoaded() {
//   imagesLoaded++;
//   if (imagesLoaded === totalImages) {
//     ready = true;
//     loader.hidden = true;
//   }
// }

// // Helper Function to Set Attributes on DOM Elements
// function setAttributes(element, attributes) {
//   for (const key in attributes) {
//     element.setAttribute(key, attributes[key]);
//   }
// }

// // Create Elements For Links & Photos, Add to DOM
// function displayPhotos() {
//   imagesLoaded = 0;
//   totalImages = photosArray.length;

//   // Run function for each object in photosArray
//   photosArray.forEach((photo) => {
//     // Create <a> to link to full photo
//     const item = document.createElement("a");
//     setAttributes(item, {
//       href: photo.links.html,
//       target: "_blank",
//     });
//     // Create <img> for photo
//     const img = document.createElement("img");
//     setAttributes(img, {
//       src: photo.urls.regular,
//       alt: photo.alt_description,
//       title: photo.alt_description,
//     });
//     // Event Listener, check when each is finished loading
//     img.addEventListener("load", imageLoaded);
//     // Put <img> inside <a>, then put both inside imageContainer Element
//     item.appendChild(img);
//     imageContainer.appendChild(item);
//   });
// }

// // Load photos from Unsplash
// async function getPhotos() {
//   try {
//     const response = await fetch(apiUrl);
//     photosArray = await response.json();
//     displayPhotos();
//   } catch (error) {}
// }

// // Check to see if scrolling near bottom of page. If so, load more images.
// window.addEventListener("scroll", () => {
//   if (
//     window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
//     ready
//   ) {
//     ready = false;
//     getPhotos();
//   }
// });

// // On Load
// getPhotos();

// ========================================================
// STUDENT SOLUTION
// ========================================================

// The code below is a nice student solution found in the comments section of this page: https://www.udemy.com/course/javascript-web-projects-to-build-your-portfolio-resume/learn/lecture/20630644#questions/13538286

// This solution solves the ugly HTML insertion in the teacher's solution. However, I am not totally should this code is checking that the images are loaded.

// const imageContainer = document.getElementById('image-container');
// const loader = document.getElementById('loader');

// let ready = false;
// let imagesLoaded = 0;
// let totalImages = 0;
// let photosArray = [];

// // Unsplash API
// let photosToLoad = 3;

// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${photosToLoad}`;

// //check if all imaged were loaded
// function allImagesLoaded() {
//   imagesLoaded++;
//   if (imagesLoaded === totalImages) {
//     //checks to see if the initial call has finished
//     //if so it changed the photosLoadedCount to 30 photos
//     totalImages === 3 ? photosToLoad = 30 : '';
//     ready = true;
//     loader.hidden = true;
//   }
// }

// function createHTMLToInsert(photoLink, photoUrl, photoDescription) {
//   return `
//   <a href="${photoLink}" target="_blank">
//     <img class="newImg" src="${photoUrl}" alt="${photoDescription}" title="${photoDescription}"/>
//   </a>
//   `;
// }

// function insertHTMLToContainer(html) {
//   imageContainer.insertAdjacentHTML('beforeend', html);
// }

// //Create elements for links and photos, add to DOM
// function displayPhotos() {
//   //increases totalImages array to include new photos added
//   //after initial set up
//   totalImages += photosArray.length;

//   //Run function for each object
//   photosArray.forEach(photo => {

//     //create vars from photos array
//     const photoLink = photo.links.html;
//     const photoUrl = photo.urls.regular;
//     const photoDescription = photo.alt_description;

//     //create html to insert
//     const html = createHTMLToInsert(photoLink, photoUrl, photoDescription);

//     //insert html to container
//     insertHTMLToContainer(html);

//     //checks to see if all images are loaded
//     allImagesLoaded();
//   });
// }

// //Get photos from Unsplash API
// async function getPhotos() {
//   try {
//     const res = await fetch(apiUrl);
//     photosArray = await res.json();
//     if (!photosArray) throw new Error('No photo\'s loaded');
//     displayPhotos();
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// //check to see if scrolling near bottom of page, load more photos
// window.addEventListener('scroll', () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
//     ready = false;
//     getPhotos();
//   }
// });

// //On load
// getPhotos();

// ========================================================
// MY SOLUTION
// ========================================================

// This basically the same as the solution above, minus a couple of functions. It seems silly to have two functions for two lines of code. The entire HTML output in this solution occurs in the the displayPhotos() function.

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
let photosToLoad = 3;
const apiKey = "LDmbxWDGW4mB9j2uS9XwanJAkfT2f7_q32NA4AhGsg4";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${photosToLoad}`;

//check if all imaged were loaded
function checkIfAllImagesLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    //checks to see if the initial call has finished
    //if so, it changed the photosLoadedCount to 6 photos
    totalImages === 3 ? (photosToLoad = 6) : "";
    ready = true;
    loader.hidden = true;
  }
}

//Create elements for links and photos, add to DOM
function displayPhotos() {
  //increases totalImages array to include new photos added
  //after initial set up
  totalImages += photosArray.length;

  //Run function for each object
  photosArray.forEach((photo) => {
    //create vars from photos array

    //create html to insert
    const photoHTML = `<a href="${photo.links.html}" target="_blank"><img class="newImg" src="${photo.urls.regular}" alt="${photo.alt_description}" title="${photo.alt_description}"/></a>`;

    //insert html to container
    imageContainer.insertAdjacentHTML("beforeend", photoHTML);

    //checks to see if all images are loaded
    checkIfAllImagesLoaded();
  });
}

//Get photos from Unsplash API
async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    photosArray = await res.json();
    if (!photosArray) throw new Error("No photo's loaded");
    displayPhotos();
  } catch (error) {
    console.log(error.message);
  }
}

//check to see if scrolling near bottom of page, load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

//On load
getPhotos();
