const container = document.querySelector('.posts-container');

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        const data = await response.json();

        data.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="https://via.placeholder.com/300" alt="image">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error(error);
        container.innerHTML = `<p style="color:red">Ошибка загрузки постов</p>`;
    }
}

getPosts();