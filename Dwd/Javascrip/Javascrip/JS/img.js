const images = [
    "https://i.pinimg.com/474x/1c/71/eb/1c71eb71932ab32d020bc527bdc9d6ce.jpg",
    "https://i.pinimg.com/474x/eb/02/e3/eb02e369095580dc7f73b753f6b6ad2b.jpg",
    "https://i.pinimg.com/474x/75/c8/98/75c8981db57bcd2991f4a7256d5561e3.jpg",
    "https://i.pinimg.com/474x/e8/50/a2/e850a22bc7b5d2fcfa2df3cb4cbd7d07.jpg",
    
  ];
  // function getImagebyIndex(index) {
  //   return images[index];
  // }
  
let indexOfCurrentImgDisplay = 0;
document.getElementById("image").src = images[0];

function getTagByID(id){
    return document.getElementById(id);
}

function nextButton(){
    if(indexOfCurrentImgDisplay<images.length-1){
        indexOfCurrentImgDisplay = indexOfCurrentImgDisplay + 1;
    }
    else{
        indexOfCurrentImgDisplay =  0;
    }
    const image = getTagByID("image");
    image.src = images[indexOfCurrentImgDisplay];

}

function preBotton(){
    if(indexOfCurrentImgDisplay>0){
        indexOfCurrentImgDisplay = indexOfCurrentImgDisplay -1;

    }
    else{
        indexOfCurrentImgDisplay -= 1;
    }
    const image = getTagByID("image");
    image.src = images[indexOfCurrentImgDisplay];
}






//   function getTagByID(id) {
//     return document.getElementById(id);
//   }
  
//   let indexOfCurrentImg = 0;
  
//   const preBtn = getTagByID("preBtn");
//   const nextBtn = getTagByID("nextBtn");
  
//   preBtn.addEventListener("click", () => {
   
//     if (indexOfCurrentImg > 0) {
//       indexOfCurrentImg -= 1;
//     }
//     console.log(indexOfCurrentImg);
    
  
//     const image = getTagByID("image");
//     image.src = images[indexOfCurrentImg];
  
//   });
  
//   nextBtn.addEventListener("click", () => {
      
//       const image = getTagByID("image");
//       image.src = images[indexOfCurrentImg];
//       if (indexOfCurrentImg < images.length - 1) {
//           indexOfCurrentImg += 1;
//       }
//     console.log(indexOfCurrentImg);
  
//   });
  
  
//   const defaultImg = getTagByID("image");
//   defaultImg.src = images[0]
  