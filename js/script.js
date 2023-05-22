const inputFile = document.getElementById('input-file');
const previewImage = document.getElementById('preview-image');

inputFile.addEventListener('change', () => {
  const file = inputFile.files[0];
  const reader = new FileReader();

  previewImage.style.display = "block"
  
  reader.addEventListener('load', () => {
      previewImage.setAttribute('src', reader.result);
    });
    
    if (file) {
        reader.readAsDataURL(file);
    }
    
    inputFile.style.display = "none"
    document.querySelector('.img').style.display= "none"
});



// const inputVideo = document.getElementById('video');
// const videoPreview = document.getElementById('video-preview');

// inputVideo.addEventListener('change', () => {
//   const file = inputVideo.files[0];
//   const reader = new FileReader();

  
//   reader.onload = () => {
//     const videoElement = document.createElement('video');
//     videoElement.src = reader.result;
//     videoElement.controls = true;
//     videoPreview.appendChild(videoElement);
//     videoPreview.style.display = 'block'
//   }

//   reader.readAsDataURL(file);
// });
