document.addEventListener('DOMContentLoaded', () => {
    const websites = [
        { name: "Love Maths", url: "https://arcadejk.github.io/love-math/", image: "assets/images/website1.png" },
        { name: "Website 2", url: "https://arcadejk.github.io/movies-reacts-playlist/", image: "assets/images/website2.png" },
        { name: "Website 3", url: "https://loves-sandwiches-arcade-5cd3a5ebfca2.herokuapp.com/", image: "assets/images/website3.png" },
        { name: "Website 4", url: "https://arcadejk.github.io/Love-Running-Project/", image: "assets/images/website4.png" },
        { name: "K-Drama Fandom", url: "https://arcadejk.github.io/kdrama-fandom/", image: "assets/images/website5.png" },
        { name: "Website 6", url: "https://arcadejk.github.io/bootstrap4/", image: "assets/images/website6.png" },
        { name: "Website 7", url: "https://love-letters-and-grammar-5f96e9223b1d.herokuapp.com/", image: "assets/images/website7.png" },
    ];

    const websitesList = document.getElementById('websites-list');

    websites.forEach(site => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        
        const link = document.createElement('a');
        link.href = site.url;
        link.textContent = site.name;
        link.target = "_blank";
        
        const image = document.createElement('img');
        image.src = site.image;
        image.alt = site.name;
        image.className = 'img-thumbnail preview-image';

        link.appendChild(image);

        const text = document.createElement('span');
        text.textContent = site.name;

        listItem.appendChild(link);
        listItem.appendChild(text);
        websitesList.appendChild(listItem);
    });
});
