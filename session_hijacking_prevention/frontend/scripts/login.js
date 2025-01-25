const form = document.getElementById("login-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });

  const data = await response.json();
  if (response.ok) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").innerText = data.message;
  }
});
