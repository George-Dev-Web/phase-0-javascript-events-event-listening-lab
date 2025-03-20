function addingEventListener() {
  const button = document.getElementById("button");
  if (button) {
    button.addEventListener("click", function () {
      alert("Button clicked!");
    });
  } else {
    console.error("Element with ID 'button' not found.");
  }
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", addingEventListener);
