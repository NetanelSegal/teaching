/**
 * פונקציה לשינוי סוג ה-position של התיבה הנבחרת
 */

const targetBox = document.getElementById("target-box");

/**
 * שינוי סוג המיקום (position)
 */
function changePosition(pos) {
  targetBox.style.position = pos;
  
  // הוספת הסבר קטן בלוג
  console.log(`שינוי מיקום ל: ${pos}`);
  
  // הוספת מאפייני מיקום למיקומים שצריכים אותם
  if (pos === 'absolute' || pos === 'fixed' || pos === 'relative' || pos === 'sticky') {
    targetBox.style.top = "20px";
    targetBox.style.right = "20px";
  } else {
    targetBox.style.top = "auto";
    targetBox.style.right = "auto";
  }
}
