// cubao midnight brews - interactive engine

const guideName = "Cubao Midnight Brews";
const currentYear = 2026;
let runningInteractionCount = 0;

// computed value for the page (number of verified haunts)
const totalHaunts = 3;

document.addEventListener("DOMContentLoaded", () => {
  // 1. write guide name into an element using getElementById
  const brandTitleEl = document.getElementById("brand-title");
  if (brandTitleEl) {
    brandTitleEl.textContent = guideName;
  }

  // 2. write dynamic copyright line into footer
  const copyrightEl = document.getElementById("dynamic-copyright");
  if (copyrightEl) {
    copyrightEl.textContent = `© ${currentYear} ${guideName}. Curated under the Manila Moon.`;
  }

  // 3. display computed value on page (haunt count calculation)
  const computedStatsEl = document.getElementById("computed-stats");
  if (computedStatsEl) {
    computedStatsEl.textContent = `Currently tracking ${totalHaunts} verified midnight sanctuaries across the metro.`;
  }
});

// console.log with at least three labelled values
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Total Tracked Haunts:", totalHaunts);