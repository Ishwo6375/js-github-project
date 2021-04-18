

function fetchGitHubByValue(value) {
    fetch(`https://api.github.com/search/users?q=${value}`, {
        method: "GET",
        headers: {
            "Accept": "application/vnd.github.v3+json"
        },
        body: JSON.stringify()
    })
    .then(responce => responce.json())
    .then(data => data.items.forEach((user) => {
        const userLi = createli(user);
        
    }))
}

  const submitBtn = document.getElementById('submit-button');
  const searchBox = document.getElementById('search');
  submitBtn.addEventListener('click', (event)=>{
    event.preventDefault()
     clearTable();
    fetchGitHubByValue(searchBox.value);
  });

  function createli(user){
      const userList = document.getElementById('user-list');
      const userRepo = document.getElementById('repos-list');
       const userLogin = document.createElement('li'); 
       userLogin.innerHTML = user.login;

       const userAvatar = document.createElement('li');
       userAvatar.innerHTML = user.avatar_url;
       userList.appendChild(userLogin);
       userRepo.appendChild(userAvatar);
  }
  
  
  

  function clearTable() {
  const listUser = document.getElementById('user-list');
  const listRepo = document.getElementById('repos-list');
  const listEmpty = listUser.innerHTML.trim();
    if (listEmpty != "") {
    listUser.innerHTML = "";
    listRepo.innerHTML = "";
  }
}

const ul = document.getElementById('user-list');
   ul.addEventListener('click', (e) => {
    e.preventDefault();
    clearTable();
    const userSelect = e.target.innerHTML;
    document.getElementById("search").value = userSelect;
    getData(userSelect);
})

  



