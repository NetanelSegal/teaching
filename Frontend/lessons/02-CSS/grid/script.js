/**
 * פונקציות לשינוי תכונות הגריד
 */

const container = document.getElementById("grid-container");

/**
 * שינוי הגדרת העמודות (grid-template-columns)
 */
function changeGridColumns(columns) {
  container.style.gridTemplateColumns = columns;
}

/**
 * שינוי הרווחים בין התאים (gap)
 */
function changeGridGap(gap) {
  container.style.gap = gap;
}
