function changeBackgroundVideo(place) {
  const videoElement = document.getElementById('background-video');
  switch(place) {
    case 'bali':
      videoElement.src = 'Alffy Rev - The Beauty of Bali (ft. Meiska Adinda, Gung Indi & Gus Teja).mp4';
      break;
    case 'jogja':
      videoElement.src = 'Jogja.mp4';  // Update with actual video source
      break;
    case 'lombok':
      videoElement.src = 'Lombok.mp4';  // Update with actual video source
      break;
    // Add more cases as needed
  }
  videoElement.play();
}
