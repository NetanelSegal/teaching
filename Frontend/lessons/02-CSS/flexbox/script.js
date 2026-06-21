/**
 * פונקציות לשינוי תכונות הפלקסבוקס של הקונטיינר
 */

const container = document.getElementById("flex-container");

/**
 * שינוי כיוון הציר המרכזי (flex-direction)
 * ברירת מחדל: row
 */
function changeFlexDirection(direction) {
  container.style.flexDirection = direction;
}

/**
 * שינוי יישור הפריטים לאורך הציר המרכזי (justify-content)
 */
function changeJustifyContent(justify) {
  container.style.justifyContent = justify;
}

/**
 * שינוי יישור הפריטים לאורך הציר המשני (align-items)
 */
function changeAlignItems(align) {
  container.style.alignItems = align;
}
