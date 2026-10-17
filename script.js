// cubao midnight brews - interactive engine & decision maker 

const guideName = "Cubao Midnight Brews";       
const currentYear = 2026;
let runningInteractionCount = 0;
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

  // 3. display computed value on page
  const computedStatsEl = document.getElementById("computed-stats");
  if (computedStatsEl) {
    computedStatsEl.textContent = `Currently tracking ${totalHaunts} verified midnight sanctuaries across the metro.`;
  }

  // rating label (if / else if / else)

  const placeRating = 4.5; // Change this value to test (e.g., 3.2, 2.0)
  const ratingEl = document.getElementById("rating-label");
  let ratingText = "";

  if (placeRating >= 5.0) {
    ratingText = " Highly recommended";
  } else if (placeRating >= 2.5 && placeRating <= 3.9) {
    ratingText = " Worth a visit";
  } else {
    ratingText = "🎸 Only if you're nearby";
  }

  if (ratingEl) {
    ratingEl.textContent = ratingText;
  }

  // DECISION 2: Budget & Open Check (&& and Ternary)

  const maxBudgetLevel = 2;
  const currentBudgetLevel = 2;
  const isOpenNow = true;
  const budgetEl = document.getElementById("budget-status");

  // using && for both conditions, then a ternary for output
  const budgetDecision = (currentBudgetLevel <= maxBudgetLevel && isOpenNow === true) 
    ? "Good option right now" 
    : "Maybe another time";

  if (budgetEl) {
    budgetEl.textContent = budgetDecision;
  }

  // distance note (boolean and ternary)
  const isWithinWalkingDistance = false;
  const distanceEl = document.getElementById("distance-note");

  // using a ternary with strict comparison
  const distanceDecision = (isWithinWalkingDistance === true) 
    ? "Walking distance from Cubao Expo" 
    : "Better to commute";

  if (distanceEl) {
    distanceEl.textContent = distanceDecision;
  }
});

// console logs with labelled values
console.log("Guide Name:", guideName);
console.log("Current Year:", currentYear);
console.log("Total Tracked Haunts:", totalHaunts);