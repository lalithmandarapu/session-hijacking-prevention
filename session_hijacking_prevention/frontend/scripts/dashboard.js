const fetchProtectedData = async () => {
    const response = await fetch("http://localhost:5000/auth/protected", {
      credentials: "include",
    });
    const data = await response.json();
  
    if (response.ok) {
      document.getElementById("welcome-message").innerText = `Welcome, User ID: ${data.user.id}`;
    } else {
      window.location.href = "login.html";
    }
  };
  
  document.getElementById("logout-btn").addEventListener("click", async () => {
    await fetch("http://localhost:5000/auth/logout", { method: "POST", credentials: "include" });
    window.location.href = "login.html";
  });
  
  fetchProtectedData();
  