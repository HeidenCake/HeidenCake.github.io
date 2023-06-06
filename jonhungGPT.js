const searchInput = document.getElementById("search-input");
const outputBox = document.getElementById("output-box");

searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const searchTerm = searchInput.value;
    outputBox.textContent = `Hi! I am jonhungGPT! I have added whatever you wrote, which is: "${searchTerm}", into my database, I am currently still in the developing phase...` ;
    searchInput.value = "";
  }
});

  