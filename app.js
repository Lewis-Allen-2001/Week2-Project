let images = [
  {
    url: "./assets/Tokyo1.jpg",
    alt: "Rain puddle in Tokyo , Japan",
  },
  {
    url: "./assets/Tokyo2.jpg",
    alt: "Giant red sign illuminating the Tokyo night sky",
  },
  {
    url: "./assets/Tokyo3.jpg",
    alt: "a Bright seven eleven sign",
  },
  {
    url: "./assets/Tokyo4.jpg",
    alt: "Tokyo night Skyline",
  },
  {
    url: "./assets/Tokyo5.jpg",
    alt: "Dark Tokyo street , all stores are shut with nothing but street light illuminating",
  },
  {
    url: "./assets/Tokyo6.jpg",
    alt: "The entrance to kabukicho as the archway sign brightly shines",
  },
];

const imageContainer = document.getElementById("imageContainer");
const displayImage = document.getElementById("displayImage");

function createImages() {
  images.forEach(function (image) {
    let imageElement = document.createElement("img");

    imageElement.src = image.url;
    imageElement.alt = image.alt;

    imageElement.setAttribute("tabindex", 0);

    imageElement.addEventListener("click", function () {
      console.log(`Clicked on ${image.alt}`);
      createLargeImage(image);
    });

    imageElement.addEventListener("keydown", function (event) {
      console.log(event);
      if (event.code === "Enter") {
        createLargeImage(image);
      }
    });

    imageContainer.appendChild(imageElement);
  });
}

createImages();

function createLargeImage(imageParams) {
  displayImage.innerHTML = "";

  const largeImageElement = document.createElement("img");

  largeImageElement.src = imageParams.url;
  largeImageElement.alt = imageParams.alt;

  displayImage.appendChild(largeImageElement);
}
