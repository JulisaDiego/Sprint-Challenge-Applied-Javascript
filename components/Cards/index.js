// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.






axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response); 
        const cardContainer = document.querySelector('.cards-container');
        const articles = response.data.articles;

        articleValues = Object.values(response.data.articles);

        articleValues.forEach(element => {
            cardContainer.appendChild(articleCards(cardContainer));

        });
    });



    


    function articleCards(content, photo, name) {

        const cardDiv = document.createElement('div');
        const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgContainer = document.createElement('div');
        const imgLink = document.createElement('img');
        const authorName = document.createElement('span');


        headlineDiv.textContent = content;
        imgLink.src = photo;
        authorName.textContent = name;

        cardDiv.classList.add('card');
        headlineDiv.classList.add('headline');
        authorDiv.classList.add('author');
        imgLink.classList.add('img-container');

        cardDiv.appendChild(headlineDiv);
        cardDiv.appendChild(authorDiv);
        authorDiv.appendChild(imgContainer);
        imgContainer.appendChild(imgLink);
        authorDiv.appendChild(authorName);

        return cardDiv;

    }