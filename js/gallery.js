function upDate(previewPic) {
  console.log(previewPic.alt);
  console.log(previewPic.src);

  let image = document.getElementById("image");
  image.innerHTML = previewPic.alt;
  image.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  let image = document.getElementById("image");
  image.innerHTML = "Hover over an image below to display here.";
  image.style.backgroundImage = "url('')";
}

function addTabFocus() {
  console.log("The page is loaded, adding tabindex to the pictures");

  let pictures = document.querySelectorAll(".preview");
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].setAttribute("tabindex", "0");
  }
}
