const url ='https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const loading = document.querySelector('.loading');
async function getUser (user) {
    const resp = await fetch(url + user);
    const respData = await resp.json();
    if(respData){
        loading.style.display='none';
    }
    CreateCartUser(respData);
}
function CreateCartUser (user){
    const card = `
        <div class="card">
            <div >
                    <img src="${user.avatar_url}"/>
                </div>
                <div class="user__info">
                    <h2>${user.name}</h2>
                    <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} <strong>Followers </strong></li>
                    <li>${user.following} <strong>Following </strong> </li>
                    <li>${user.public_repos} <strong>Repos </strong></li>
                </ul>
            </div>
        </div>

    `;
    main.innerHTML = card
}
form.addEventListener('submit', (e) =>{
    loading.style.display='block';
    e.preventDefault();
    const user = search.value;
    if(user){
        getUser(user);
    }
})