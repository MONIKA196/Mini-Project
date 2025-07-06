// 🧥 Available Dress Stock
const stock = [
  {
    name: "Yellow Traditional Dress",
    colorName: "yellow",
    colorHex: "#ffeb3b",
    size: "S",
    price: 500,
    function: "traditional",
    image: "https://i.pinimg.com/736x/a5/a1/e2/a5a1e2f078b4e4c1be90125f47c3eee6.jpg"
  },
  {
    name: "Yellow Western Dress",
    colorName: "yellow",
    colorHex: "#ffeb3b",
    size: "S",
    price: 500,
    function: "western",
    image: "https://i.pinimg.com/736x/90/91/25/90912516e98bf141e58ee29396e0fc83.jpg"
  },
  {
    name: "Pink Party Dress",
    colorName: "pink",
    colorHex: "#ff69b4",
    size: "M",
    price: 500,
    function: "traditional",
    image: "https://i.pinimg.com/736x/21/8b/80/218b8003224f73f2948eca0e9a7d77bd.jpg"
  },
  {
    name: "Orange Ethnic Wear",
    colorName: "orange",
    colorHex: "#ff9800",
    size: "S",
    price: 1500,
    function: "traditional",
    image: "https://i.pinimg.com/736x/1b/8a/20/1b8a2060181909a5516ce3b3f2c4d4a5.jpg"
  },
  {
    name: "Blue Casual Dress",
    colorName: "blue",
    colorHex: "#2196f3",
    size: "L",
    price: 1200,
    function: "western",
    image: "https://i.pinimg.com/736x/af/35/4c/af354cbeda0abf05c4d740fb33e7bb33.jpg"
  },
  {
    name: "Red Designer Dress",
    colorName: "red",
    colorHex: "#f44336",
    size: "M",
    price: 1800,
    function: "traditional",
    image: "https://i.pinimg.com/736x/d0/85/9c/d0859cbabd49d19b9dae28158f86e325.jpg"
  },
  {
    name: "Black Party Gown",
    colorName: "black",
    colorHex: "#000000",
    size: "L",
    price: 2000,
    function: "western",
    image: "https://i.pinimg.com/736x/65/0e/45/650e45220477dc850d6925dfb7f9bb2d.jpg"
  },
  {
    name: "White Wedding Dress",
    colorName: "white",
    colorHex: "#ffffff",
    size: "XL",
    price: 2200,
    function: "traditional",
    image: "https://i.pinimg.com/736x/ba/d7/18/bad7183166aefcb837be7a8c5f4a8ff9.jpg"
  },
  {
    name: "Purple Silk Saree",
    colorName: "purple",
    colorHex: "#9c27b0",
    size: "M",
    price: 1400,
    function: "traditional",
    image: "https://i.pinimg.com/736x/13/8c/d7/138cd7c4dba04aed15f9531a4cc7d91b.jpg"
  },
  {
    name: "Green Halter Dress",
    colorName: "green",
    colorHex: "#4caf50",
    size: "S",
    price: 950,
    function: "western",
    image: "https://i.pinimg.com/736x/63/1a/e7/631ae7db45997b3de3e64e736fd7b5c1.jpg"
  }
];

/// 🔒 Show login form when "Get Started" is clicked
function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
}

// 🔐 Handle login
function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    document.getElementById("introPage").classList.add("hidden");
    document.getElementById("mainApp").classList.remove("hidden");
  } else {
    alert("Please enter both username and password.");
  }
}

// 🎯 Filter dress suggestions
function getDressSuggestions() {
  const colorNameInput = document.getElementById("colorName").value.toLowerCase().trim();
  const chatBox = document.getElementById("chat-box");

  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = `Color: ${colorNameInput}`;
  chatBox.appendChild(userMsg);

  if (!colorNameInput) {
    const noColor = document.createElement("div");
    noColor.className = "ai-msg";
    noColor.textContent = "⚠️ Please enter a color name.";
    chatBox.appendChild(noColor);
    return;
  }

  const filtered = stock.filter(dress =>
    dress.colorName.toLowerCase().includes(colorNameInput)
  );

  if (filtered.length === 0) {
    const noMatch = document.createElement("div");
    noMatch.className = "ai-msg";
    noMatch.textContent = "❌ No matching dresses found.";
    chatBox.appendChild(noMatch);
    return;
  }

  filtered.forEach(dress => {
    const aiMsg = document.createElement("div");
    aiMsg.className = "ai-msg";
    aiMsg.innerHTML = `
      👗 <strong>${dress.name}</strong><br>
      Price: ₹${dress.price}, Size: ${dress.size}, Style: ${dress.function}
    `;
    const img = document.createElement("img");
    img.src = dress.image;
    img.alt = dress.name;
    aiMsg.appendChild(img);
    chatBox.appendChild(aiMsg);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}

// 🧾 Show all stock
function showAllStock() {
  const chatBox = document.getElementById("chat-box");

  const title = document.createElement("div");
  title.className = "ai-msg";
  title.innerHTML = `<strong>🧾 All Dresses in Stock:</strong>`;
  chatBox.appendChild(title);

  stock.forEach(dress => {
    const msg = document.createElement("div");
    msg.className = "ai-msg";
    msg.innerHTML = `
      👗 <strong>${dress.name}</strong><br>
      Color: ${dress.colorName}, Price: ₹${dress.price}, Size: ${dress.size}, Style: ${dress.function}
    `;
    const img = document.createElement("img");
    img.src = dress.image;
    img.alt = dress.name;
    msg.appendChild(img);
    chatBox.appendChild(msg);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}