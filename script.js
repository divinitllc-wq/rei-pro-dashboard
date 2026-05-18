let deals = JSON.parse(localStorage.getItem("deals")) || [];
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let settings = JSON.parse(localStorage.getItem("settings")) || {};

document.addEventListener("DOMContentLoaded", () => {
  renderDeals();
  renderContacts();
  updateStats();
});

function showTab(id) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* ---------------- DASHBOARD ---------------- */
function updateStats() {
  document.getElementById("statDeals").innerText = deals.length;
  document.getElementById("statContacts").innerText = contacts.length;
}

/* ---------------- DEALS ---------------- */
function addDeal() {
  const address = prompt("Deal address?");
  if (!address) return;

  deals.push({ address });
  localStorage.setItem("deals", JSON.stringify(deals));

  renderDeals();
  updateStats();
}

function renderDeals() {
  document.getElementById("dealsList").innerHTML =
    deals.map(d => `<div>${d.address}</div>`).join("");
}

/* ---------------- CONTACTS ---------------- */
function addContact() {
  const name = prompt("Contact name?");
  if (!name) return;

  contacts.push({ name });
  localStorage.setItem("contacts", JSON.stringify(contacts));

  renderContacts();
  updateStats();
}

function renderContacts() {
  document.getElementById("contactsList").innerHTML =
    contacts.map(c => `<div>${c.name}</div>`).join("");
}

/* ---------------- CALCULATOR ---------------- */
function calc() {
  const arv = Number(document.getElementById("arv").value || 0);
  const rehab = Number(document.getElementById("rehab").value || 0);
  const asking = Number(document.getElementById("asking").value || 0);

  const mao = (arv * 0.7) - rehab;

  document.getElementById("result").innerHTML =
    `<h3>MAO: $${mao.toFixed(0)}</h3>`;
}

/* ---------------- SETTINGS ---------------- */
function saveSettings() {
  settings.company = document.getElementById("company").value;
  localStorage.setItem("settings", JSON.stringify(settings));
  alert("Saved");
}
