document.addEventListener("DOMContentLoaded", async function() {
    const blogList = document.getElementById("blog-list");
    const addButton = document.getElementById("add-button");
    const blogDetails = document.getElementById("blog-details");
    const detailTitle = document.getElementById("detail-title");
    const detailContent = document.getElementById("detail-content");
    const detailDate = document.getElementById("detail-date");

    async function getBlogs() {
        try {
            const response = await fetch('https://raw.githubusercontent.com/mamasakhlisi27/mamasakhlisi27.github.io/main/blogs.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching blogs:', error);
            return [];
        }
    }

    async function renderBlogList() {
        const blogs = await getBlogs();

        blogList.innerHTML = "";
        blogs.forEach((blog, index) => {
            const blogElement = document.createElement("div");
            blogElement.className = "blog-entry";
            blogElement.innerHTML = `
                <h2>${blog.title}</h2>
                <p class="blog-date">${blog.date}</p>
                <p>${blog.content}</p>
            `;
            blogElement.addEventListener("click", () => showBlogDetails(index));
            blogList.appendChild(blogElement);
        });
    }

    function showBlogDetails(index) {
        // Implementar la función para mostrar los detalles del blog
    }

    addButton.addEventListener("click", async () => {
        // Implementar la lógica para añadir un nuevo blog
        // y guardar los cambios en el archivo JSON
    });

    renderBlogList();
});
