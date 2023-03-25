

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
  