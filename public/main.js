let list = [];
let numberPerPage = 7;
let currentPage = 1; 

const makeList = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://api.github.com/repos/facebook/react/forks?per_page=7&page="+currentPage, false);
    xhttp.send();

    list= JSON.parse(xhttp.responseText);
    
}

function drawList() {
    $("#userList").empty();
    for (r = 0; r < list.length; r++){
        const x = `
                <div class="card" style="width: 18rem;">
                <img src= ${list[r].owner.avatar_url}  alt="Avatar" style="width:100%">
                    <div class="card-body float-right">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${list[r].full_name.split('/')[0]} </li>
                    <li class="list-group-item"> Private: ${list[r].private} </li>
                    <li class="list-group-item">Type: ${list[r].owner.type} </li>
                    <li class="list-group-item">Forks: ${list[r].forks}</li>
                    </ul>
                     

                    <form method="POST" action="follow/${list[r].full_name.split('/')[0]}">
                    <button class="btn btn-info">Follow</button>
                    </form>
                    
                        <hr>
                        
                    </div>
                    
                </div>
        `
        console.log(currentPage);
        $('#userList').html = $('#userList').append(x);
    }
}


function nextPage() {
    currentPage += 1;
    makeList();
    loadList();
}

function previousPage() {
    currentPage -= 1;
    makeList();
    loadList();
}

function loadList() {
    makeList();
    drawList();
    check();
    $(window).scrollTop(0);
}

function check() {
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
}
 

window.addEventListener('load', loadList());