const toggleTheme = (): void => {
  const body = document.body;

  // Toggle the "dark-mode" class on the body element
  body.classList.toggle("dark-mode");

  // Save the user's preference in localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle") as HTMLButtonElement;

  if (!toggleButton) {
    console.error("Toggle button not found!");
    return;
  }

  // Check localStorage for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Add an event listener to the toggle button
  toggleButton.addEventListener("click", toggleTheme);
});
