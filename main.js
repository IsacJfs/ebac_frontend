$(document).ready(function () {
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = $('#avatar');
    const repositoriesElement = $('#repositories');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');

    fetch('https://api.github.com/users/isacjfs')
        .then(function (response) {
            if (!response.ok) {
                throw new Error(`Ocorreu um erro. Código de Status: ${response.status}`);
            }
            return response.json();
        })
        .then(function (json) {
            nameElement.text(json.name);
            usernameElement.text(json.login);
            avatarElement.attr('src', json.avatar_url);
            followersElement.text(json.followers);
            followingElement.text(json.following);
            repositoriesElement.text(json.public_repos);
            linkElement.attr('href', json.html_url);
        })
        .catch(function (error) {
            alert(`${error.message}`);
        });
});
