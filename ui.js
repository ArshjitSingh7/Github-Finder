class UI {
    constructor()
    {
        this.content=document.querySelector('.content');
    }

    showData(userData) {
        this.content.innerHTML= `
        <div class="card card-body mt-4">
          <div class="row">
            <div class="col-md-3 mb-3">
                <img class="w-100" src="${userData.avatar_url}" alt="profile photo">
                <a class="btn btn-block btn-primary mt-2" href="${userData.html_url}" target="_blank">View Profile</a>
            </div>
            <div class="col-md-9">
                 <span class="badge badge-primary p-2 mr-2 mb-2">Public Repos: ${userData.public_repos}</span>
                 <span class="badge badge-secondary p-2 mr-2 mb-2">Public Gists: ${userData.public_gists}</span>
                 <span class="badge badge-success p-2 mr-2 mb-2">Followers: ${userData.followers}</span>
                 <span class="badge badge-info p-2 mb-2">Following: ${userData.following}</span>
                <ul class="list-group mt-4">
                     <li class="list-group-item">Company : ${userData.company}</li>
                     <li class="list-group-item">Website/Blog : ${userData.blog}</li>
                     <li class="list-group-item">Location : ${userData.location}</li>
                     <li class="list-group-item">Member Since : ${userData.created_at}</li>
                </ul>
            </div>
          </div>  
        </div>
        <h3 class="page-heading my-3">All Repos</h3>
        <div class="repos"></div>
        `
    }
    showRepos(reposData)
    {
        var output='';
        reposData.forEach(function(data)
        {
            output+=`
            <div class="card card-body mt-2">
                <div class="row">
                    <div class="col-md-8 mb-2">
                        <a href="${data.html_url}"> ${data.name}</a>
                    </div>
                    <div class="col-md-4">
                        <span class="badge badge-primary p-2 mr-2"> stars :${data.stargazers_count} </span>
                        <span class="badge badge-success p-2 mr-2"> forks :${data.forks_count} </span>
                        <span class="badge badge-dark p-2 mr-2"> watchers :${data.watchers_count} </span>
                    </div>
                </div>
            </div>
            `
        })
        document.querySelector('.repos').innerHTML=output;
    }

    showAlert(msg,classname)
    {
        if(document.querySelector('.alert'))
        {
            this.clearAlert();
        }
        const parent=document.querySelector('.popup');
        const child=document.querySelector('.popchild');
        const div=document.createElement('div');
        div.className=classname;
        div.appendChild(document.createTextNode(msg));
        parent.insertBefore(div,child);
        setTimeout(function()
        {
            document.querySelector('.alert').remove()
        },2000);
    }
    clearAlert()
    {
        document.querySelector('.alert').remove();
    }
    clearData()
    {
        this.content.innerHTML='';
    }
}