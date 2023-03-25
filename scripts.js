



// Randomly change the background color when the user clicks anywhere on the page
document.addEventListener('click', function() {
  var colors = ['#ffc0cb', '#90ee90', '#ffa07a', '#87cefa'];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// Display a message when the user hovers over the image
var image = document.querySelector('.section img');
image.addEventListener('mouseover', function() {
  alert('Thanks for visiting my website!');
});

// Change the heading text when the user clicks on it
var heading = document.querySelector('h1');
heading.addEventListener('click', function() {
  heading.textContent = 'Welcome to my website!';
});

// Show and hide the section content when the user clicks on the heading
var sections = document.querySelectorAll('.section');
for (var i = 0; i < sections.length; i++) {
  var section = sections[i];
  var sectionHeading = section.querySelector('h2');
  var sectionContent = section.querySelector('p');
  sectionHeading.addEventListener('click', function() {
    if (sectionContent.style.display === 'none') {
      sectionContent.style.display = 'block';
    } else {
      sectionContent.style.display = 'none';
    }
  });
}

// Place random images throughout the page
const images = ['cryptic1.JPG', 'cryptic2.JPG', 'cryptic3.JPG', 'cryptic4.JPG', 'cryptic5.JPG', 'cryptic6.JPG'];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  return randomImage;
}

const randomImage = getRandomImage();
const imageContainer = document.getElementById('random-image');
imageContainer.innerHTML = `<img src="images/${randomImage}" alt="Random Image">`;


var gallery = document.querySelector('.gallery');
var images = gallery.getElementsByTagName('img');
var width = gallery.offsetWidth;
var height = gallery.offsetHeight;

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  var x = Math.floor(Math.random() * (width - img.width));
  var y = Math.floor(Math.random() * (height - img.height));
  img.style.left = x + 'px';
  img.style.top = y + 'px';
}