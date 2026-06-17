/* --- GLOBAL STATE & AUTHENTICATION LOGIC --- */
let currentUser = JSON.parse(localStorage.getItem('atherUser')) || null;
const authStatusText = document.getElementById('authStatusText');
let pendingAction = null; 

function updateAuthUI() {
  if (authStatusText) {
    if (currentUser) {
      authStatusText.textContent = `Hi, ${currentUser.name.split(' ')[0]} (Logout)`;
    } else {
      authStatusText.textContent = "Login / Register";
    }
  }
}

function openAuthModal() {
  if (currentUser) {
    if (confirm("Do you want to log out of your account?")) {
      currentUser = null;
      localStorage.removeItem('atherUser');
      updateAuthUI();
      alert("Logged out successfully.");
    }
    return;
  }
  document.getElementById('authModal').classList.remove('hidden');
}

function closeAuthModal() {
  document.getElementById('authModal').classList.add('hidden');
  pendingAction = null;
}

function processRegister() {
  const name = document.getElementById('regName').value;
  const phone = document.getElementById('regPhone').value;
  const pass = document.getElementById('regPass').value;

  if (!name || phone.length < 10 || !pass) {
    alert("Please fill all details correctly.");
    return;
  }
  
  const userObj = { name, phone, pass };
  localStorage.setItem('atherUser', JSON.stringify(userObj));
  currentUser = userObj;
  
  closeAuthModal();
  updateAuthUI();
  executePendingAction();
}

function requireAuth(actionCallback) {
  if (currentUser) {
    actionCallback();
  } else {
    pendingAction = actionCallback;
    alert("Please log in or register to complete this action.");
    openAuthModal();
  }
}

function executePendingAction() {
  if (pendingAction) {
    pendingAction();
    pendingAction = null;
  }
}

window.addEventListener('DOMContentLoaded', updateAuthUI);