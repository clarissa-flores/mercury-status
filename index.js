// Fetch the Mercury Retrograde status from the API
async function fetchMercuryRetrogradeStatus() {
  const response = await fetch("https://mercuryretrogradeapi.com/");
  const data = await response.json();
  return data.is_retrograde;
}

// Update the h1 and paragraph elements with the Mercury Retrograde status
async function updateMercuryRetrogradeStatus() {
  const isRetrograde = await fetchMercuryRetrogradeStatus();
  const mercuryRetrogradeStatusElement = document.getElementById(
    "mercury-retrograde-status"
  );
  mercuryRetrogradeStatusElement.innerHTML = isRetrograde ? "Yes" : "No";

  // Add a blurb underneath the yes or no text based on the Mercury Retrograde status
  const mercuryRetrogradeParagraphElement = document.getElementById(
    "mercury-retrograde-blurb"
  );
  mercuryRetrogradeParagraphElement.innerHTML = isRetrograde
    ? "Mercury is currently in retrograde. This can be a time of communication problems, travel delays, and technical difficulties. It's important to be patient and flexible during this time."
    : "Mercury is not currently in retrograde. This is a good time to focus on communication, travel, and new projects.";
}

// Update the Mercury Retrograde status when the web page loads
window.onload = updateMercuryRetrogradeStatus;

// Display in light/dark mode based on user default
(function () {
  const htmlElement = document.querySelector("html");
  if (htmlElement.getAttribute("data-bs-theme") === "auto") {
    function updateTheme() {
      document
        .querySelector("html")
        .setAttribute(
          "data-bs-theme",
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        );
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateTheme);
    updateTheme();
  }
})();
