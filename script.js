document.getElementById("submit-button").addEventListener("click", function() {
    var guestName = document.getElementById("guest-name-input").value.trim();
    if (guestName !== "") {
      // Lưu tên người dùng vào thiệp mời
      document.getElementById("guest-name").textContent = guestName;
      // Ẩn form nhập và hiển thị thiệp mời
      document.querySelector(".form-container").style.display = "none";
      document.getElementById("invitation").style.display = "block";
      // Bắt đầu đếm ngược
      startCountdown();
      // Tạo hiệu ứng nón tốt nghiệp
      createSnowflakes();
    } else {
      alert("Vui lòng nhập tên của bạn!");
    }
  });
  
  // Thời gian đếm ngược
  function startCountdown() {
    var eventDate = new Date("January 9, 2025 16:00:00").getTime();
  
    var countdownFunction = setInterval(function() {
      var now = new Date().getTime();
      var distance = eventDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("countdown").innerHTML = days + " ngày " + hours + " giờ " + minutes + " phút " + seconds + " giây ";
  
      if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Sự kiện đã diễn ra!";
      }
    }, 1000);
  }
  
  // Tạo hiệu ứng nón tốt nghiệp rơi liên tục khắp màn hình
  function createSnowflakes() {
    var snowflakesContainer = document.getElementById("snowflakes");
    for (let i = 0; i < 50; i++) {
      var snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.innerHTML = "🎓";  // Nón tốt nghiệp
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = (Math.random() * 5 + 5) + "s";  // Thời gian rơi ngẫu nhiên từ 5s đến 10s
      snowflakesContainer.appendChild(snowflake);
    }
  }
  
  // Hiển thị form gửi lời chúc khi nhấn vào nút "Gửi lời chúc"
  document.getElementById("comment-button").addEventListener("click", function() {
    document.getElementById("comment-form").style.display = "block";
    document.getElementById("comment-button").style.display = "none"; // Ẩn nút gửi lời chúc
  });
  
  // Khi người dùng gửi lời chúc
  document.getElementById("send-comment").addEventListener("click", function() {
    var comment = document.getElementById("guest-comment").value.trim();
    if (comment !== "") {
      // Ẩn form gửi lời chúc và hiển thị thông báo
      document.getElementById("comment-form").style.display = "none";
      document.getElementById("thank-you-message").style.display = "block";
    } else {
      alert("Vui lòng nhập lời chúc của bạn!");
    }
  });
  