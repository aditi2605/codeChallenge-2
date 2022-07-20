let form = document.getElementById('form-div')
form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    try{
        let response = await fetch("http://localhost:3000/blogs", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: e.target['form-title'].value,
        name: e.target['form-author'].value,
        body: e.target['form-txta'].value
        }),
    });
    
    loadPage()
    
    }catch(err){
        console.log("error posting blogs")
    }
})

function loadPage(){
    setTimeout(()=>{
        let length = document.getElementById('posts').childNodes.length
        window.location.href = `http://localhost:3000/blogs/${length}`
    }, 4000)
    let loadDiv = document.getElementById('loading')
    loadDiv.style.display = "flex"
    
}

function appendElement(postData, id){
    let a = document.createElement('a');
    a.innerText = postData.title
    a.href = `http://localhost:3000/blogs/${id}`
    let p = document.createElement('p')
    p.innerText = postData.name
    let div = document.createElement('div')
    div.append(a, p)
    let postList = document.getElementById('posts')
    postList.append(div);
}

async function getBlogs(){
    try{
        let response = await fetch("http://localhost:3000/blogs")
        let data = await response.json()
        let i = 1
        data.blogs.forEach(element => {
            console.log(element)
            appendElement(element, i)
            i++;
        });
    }catch(err){
        console.log("error fetching blogs")
    }
}

getBlogs()

