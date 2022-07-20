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
    }catch(err){
        console.log("error posting blogs")
    }
})

function appendElement(postData){
    let a = document.createElement('a');
    a.innerText = postData.title
    a.href = 'http://localhost:3000/blogs/id'//TODO create dynamic url for the title
    let p = document.createElement('p')
    p.innerText = postData.name
    let div = document.createElement('div')
    div.append(a, p)
    let postList = document.getElementById('post-list')
    postList.append(div);
}

async function getBlogs(){
    try{
        let response = await fetch("localhost:3000/blogs")
        let data = await response.json()
        data.forEach(element => {
            console.log(element)
            appendElement(element)
        });
    }catch(err){
        console.log("error fetching blogs")
    }
}

getBlogs()

