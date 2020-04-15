
const followersArray = ['lex-node', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

const userGetter = username => {
    axios.get(`https://api.github.com/users/${username}`)
        .then(userData => {
            console.log(userData);
            const userCard = cardComponent(userData.data);
            document.querySelector('.cards').appendChild(userCard);
        })
        .catch(err => {
            console.log(err);
        })
}

followersArray.forEach(follower => {
    userGetter(follower);
})

const cardComponent = (userData) => {
    //create & classify elements
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const cardImg = document.createElement('img');
    const cardInfoDiv = document.createElement('div');
    cardInfoDiv.classList.add('card-info');
    const cardHeader = document.createElement('h3');
    cardHeader.classList.add('name');
    const cardPara1 = document.createElement('p');
    cardPara1.classList.add('username');
    const cardPara2 = document.createElement('p');
    const cardPara3 = document.createElement('p');
    const userPageLink = document.createElement('a');
    const cardPara4 = document.createElement('p');
    const cardPara5 = document.createElement('p');

    //hydrate elements form data object
    cardImg.src = userData.avatar_url;
    cardHeader.textContent = userData[name];
    cardPara1.textContent = userData.login;
    cardPara2.textContent = `Location: ${userData[location]}`;
    cardPara3.textContent = `Profile: `
    userPageLink.href = userData.url;
    cardPara4.textContent = `Followers: ${userData.followers}`;
    cardPara5.textContent = `Bio: ${userData.bio}`;

    //stitch elements together
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardInfoDiv);
    cardInfoDiv.appendChild(cardHeader);
    cardInfoDiv.appendChild(cardPara1);
    cardInfoDiv.appendChild(cardPara2);
    cardInfoDiv.appendChild(cardPara3);
    cardInfoDiv.appendChild(cardPara4);
    cardInfoDiv.appendChild(cardPara5);
    cardPara3.append(userPageLink);

    //return assembled element
    return cardDiv;
}

