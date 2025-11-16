document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch("http://192.168.1.64:3000/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = "";
      let posts = JSON.parse(json);
      posts.forEach((post) => {
        let postElement = `<div class="card mb-4" id="${post.id}" data-id="${post.id}">
          <div class="card-header">
            <h5 class="card-title">${post.title}</h5>
          </div>
          <div class="card-body d-flex justify-content-between">
            <div class="card-text">${post.description}</div>
              <div>
                <button class="btn btn-danger btn-sm" onclick="deletePost('${post.id}')">
                  <i class="bi bi-trash"></i> Deletar
                </button>
              </div>
          </div>
        </div>`;

        postElements += postElement;
      });

      document.getElementById("postsContainer").innerHTML = postElements;
    });
}

function newPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  let post = { title, description };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post),
  };

  fetch("http://192.168.1.64:3000/api/new", options).then((res) => {
    console.log(res);
    updatePosts();
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  });
}

function deletePost(id) {
  if (confirm("Tem certeza que deseja deletar este post?")) {
    const options = {
      method: "DELETE",
    };

    fetch(`http://192.168.1.64:3000/api/delete/${id}`, options)
      .then((res) => {
        if (res.ok) {
          console.log("Post deletado com sucesso");
          updatePosts();
        } else {
          console.error("Erro ao deletar post");
        }
      })
      .catch((err) => {
        console.error("Erro:", err);
      });
  }
}
