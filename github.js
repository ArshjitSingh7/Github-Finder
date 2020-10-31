class Github {

    constructor()
    {
        this.clientId='b2022e82d3ecb1a701f0';
        this.clientSecret='5706be79130bb9da8adc89e37398ed36194cdf2e';
    }

    async getUser(user) {
        const response=await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const userData=await response.json();
        const reposData=await repoResponse.json();
        return {
            userData,reposData
        }


    }
}