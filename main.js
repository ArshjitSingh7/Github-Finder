const git=new Github();
const ui=new UI();
var searchText=document.querySelector('.search');
searchText.addEventListener('keyup',function(e)
{
    var search=e.target.value;
    if(search != '')
    {
        git.getUser(search)
           .then(data => {
               console.log(data);
               if(data.userData.message!=='Not Found')
               {
                ui.showData(data.userData);
                ui.showRepos(data.reposData);
               }
               else
               {
                   ui.showAlert('User not found','alert alert-danger mt-2');
               }
               
           })
    }
    else
    {
        ui.clearData();
    }

    e.preventDefault();
})