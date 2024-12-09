// app.js


document.addEventListener('DOMContentLoaded', function() {
    // Select the install button
    const installButton = document.getElementById('install-button');
  

    if (installButton) {
      // Add a click event listener to the install button
      installButton.addEventListener('click', function() {
        // Log a message to the console when the button is clicked
        console.log('Install button clicked');
      });
    }
  
    // Log a message to the console when the DOM is fully loaded
    console.log('DOM fully loaded and parsed');
  });
  