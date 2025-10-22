/********************************************************************
 * 
 * CSC 324 — Making a Table
  This script selects the table body on the page and populates it
  from the `artists` array of objects.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 // --- Original data ---
const ORIGINAL = [
  { name: "Ms Scandalous", birth: 1985, link: "https://www.youtube.com/watch?v=2FPivlfvxu0" },
  { name: "Juggy D",       birth: 1981, link: "https://www.youtube.com/watch?v=1j4c_FVyjdI" },
  { name: "Sukhbir Singh", birth: 1969, link: "https://www.youtube.com/watch?v=HipNEpjad0" },
  { name: "Abrar-ul-Haq",  birth: 1989, link: "https://www.youtube.com/watch?v=JnnVlPF7eC" },
  { name: "Rishi Rich",    birth: 1970, link: "https://www.youtube.com/watch?v=0qs-wZ9ACuA" }
];

// --- Working data copy ---
let rows = [...ORIGINAL];

// --- When page loads ---
window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#artists-table tbody");

  // render table
  const render = () => {
    tbody.innerHTML = rows.map(a => `
      <tr>
        <td>${a.name}</td>
        <td>${a.birth}</td>
        <td><a href="${a.link}" target="_blank" rel="noopener noreferrer">${a.link}</a></td>
      </tr>
    `).join("");
  };

  // Sort by name
  document.getElementById("sort-name").addEventListener("click", () => {
    rows = [...rows].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
    render();
  });

  // Sort by birth year
  document.getElementById("sort-birth").addEventListener("click", () => {
    rows = [...rows].sort((a, b) => a.birth - b.birth);
    render();
  });

  // Shuffle (from original)
  document.getElementById("shuffle").addEventListener("click", () => {
    rows = [...ORIGINAL];
    for (let i = rows.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rows[i], rows[j]] = [rows[j], rows[i]];
    }
    render();
  });

  // initial render
  render();
});


 // complete with code to select and populate the table
