let images = [
  {
    url: "https://images.unsplash.com/photo-1608874973406-b6e3babbbf2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRva3lvJTIwbmlnaHR8ZW58MHx8MHx8fDA%3D",
    alt: "Rain puddle in Tokyo , Japan",
  },
  {
    url: "https://images.unsplash.com/photo-1608874973277-a34ed4aba3f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRva3lvJTIwbmlnaHR8ZW58MHx8MHx8fDA%3D",
    alt: "Giant red sign illuminating the Tokyo night sky",
  },
  {
    url: "https://images.unsplash.com/photo-1705577827337-3b7c132f79eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRva3lvJTIwbmlnaHR8ZW58MHx8MHx8fDA%3D",
    alt: "a Bright seven eleven sign",
  },
  {
    url: "https://images.unsplash.com/photo-1660292318896-0c684c801e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW8lMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Tokyo night Skyline",
  },
  {
    url: "https://images.unsplash.com/photo-1586165877141-3dbcfc059283?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW8lMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Dark Tokyo street , all stores are shut with nothing but street light illuminating",
  },
  {
    url: "https://images.unsplash.com/photo-1531164442814-c81a813fd9a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2FidWtpY2hvfGVufDB8fDB8fHww",
    alt: "The entrance to kabukicho as the archway sign brightly shines",
  },
];

const thumbnailContainer = document.getElementById("thumbnailContainer");
const display = document.getElementById("display");

function createThumbnails() {
  images.forEach(function (image) {
    let imageElement = document.createElement("img");

    imageElement.src = image.url;
    imageElement.alt = image.alt;

    imageElement.setAttribute("tabindex", 0);

    imageElement.addEventListener("click", function () {
      console.log(`Clicked on ${image.alt}`);
      createBigImage(image);
    });

    imageElement.addEventListener("keydown", function (event) {
      if (event.code === "Enter") {
        createBigImage(image);
        console.log(`Clicked on ${image.alt}`);
      }
    });

    thumbnailContainer.appendChild(imageElement);
  });
}

createThumbnails();

function createBigImage(imageParams) {
  display.innerHTML = "";
  const bigImageElement = document.createElement("img");

  bigImageElement.src = imageParams.url;
  bigImageElement.alt = imageParams.alt;

  display.appendChild(bigImageElement);
}
