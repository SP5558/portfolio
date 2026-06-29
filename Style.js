const words = [
  "Data Analyst",
  "Power BI Developer",
  "SQL Developer",
  "Python Enthusiast"
];

let i = 0;
let j = 0;
let isDeleting = false;

function typing() {
  const current = words[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML =
      current.substring(0, j++);
    
    if (j > current.length) {
      isDeleting = true;
      setTimeout(typing, 1200);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML =
      current.substring(0, j--);

    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(typing, isDeleting ? 60 : 120);
}

typing();