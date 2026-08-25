if (requireLogin()) {
  const user = getCurrentUser();
  const displayName = user.name || user.email.split("@")[0];
  const firstLetter = displayName.charAt(0).toUpperCase();

  const navUserName = document.getElementById("navUserName");
  const accountName = document.getElementById("accountName");
  const accountEmail = document.getElementById("accountEmail");
  const userAvatar = document.getElementById("userAvatar");
  const welcomeHeading = document.getElementById("welcomeHeading");

  if (navUserName) navUserName.textContent = displayName;
  if (accountName) accountName.textContent = displayName;
  if (accountEmail) accountEmail.textContent = user.email;
  if (userAvatar) userAvatar.textContent = firstLetter;
  if (welcomeHeading) welcomeHeading.textContent = `Welcome back, ${displayName}. Give everything you own a`;
}

function openScanner() {
  const scanner = document.getElementById("scanner");
  scanner.classList.add("open");
  scanner.setAttribute("aria-hidden", "false");
}

function closeScanner() {
  const scanner = document.getElementById("scanner");
  scanner.classList.remove("open");
  scanner.setAttribute("aria-hidden", "true");
}

function simulateScan() {
  document.getElementById("result").classList.add("show");
}

function setupAccountMenu() {
  const button = document.getElementById("accountButton");
  const panel = document.getElementById("accountPanel");
  const logoutButton = document.getElementById("logoutButton");

  button?.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });

  logoutButton?.addEventListener("click", logout);

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".account-menu")) {
      button?.setAttribute("aria-expanded", "false");
      if (panel) panel.hidden = true;
    }
  });
}

function setupTheme() {
  const button = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("lifeloopTheme") || "light";
  document.documentElement.dataset.theme = savedTheme;

  button?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("lifeloopTheme", nextTheme);
  });
}

function setupMobileNavigation() {
  const button = document.getElementById("mobileMenuButton");
  const links = document.getElementById("mainNavLinks");
  button?.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
}

const scanner = document.getElementById("scanner");
scanner?.addEventListener("click", (event) => {
  if (event.target === scanner) closeScanner();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeScanner();
});

setupAccountMenu();
setupTheme();
setupMobileNavigation();
