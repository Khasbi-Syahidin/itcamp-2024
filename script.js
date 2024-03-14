let commentData = {}; // Menggunakan satu objek untuk menyimpan nama dan komentar

// Function to add a new comment
function addComment() {
  const commentInput = document.getElementById("commentInput");
  const commentText = commentInput.value.trim();
  commentData.nama = prompt("Masukkan Namamu disini");

  if (commentText !== "") {
    // Menyimpan komentar ke dalam objek
    commentData.comment = {
      text: commentText,
      timestamp: new Date().toLocaleString(),
    };

    // Clear the input field
    commentInput.value = "";

    // Update the comment list
    updateCommentList();
  }
}

// Function to update the comment list
function updateCommentList() {
  const commentList = document.getElementById("commentList");
  commentList.innerHTML = ""; // Clear the existing list

  // Membuat card element dari data komentar
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h6");
  title.className = "title-card";
  title.textContent = commentData.nama;

  const message = document.createElement("p");
  message.className = "message";
  message.textContent = `${commentData.comment.text}`;

  card.appendChild(title);
  card.appendChild(message);
  commentList.appendChild(card);
}
