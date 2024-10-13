const users = [];


class User{
    #posts;
    #name;
    #email;
    constructor(name,email,id){
        this.#posts = [];
        this.name = name;
        this.email = email;
        this.#getUserPosts(id);
    }

    set posts(post){
        this.#posts.push(post);
    }

    set name (theName){
        this.#name =theName;
    }

    set email (theMail){
        this.#email =theMail;
    }

    get name(){
        return this.#name;
    }

    get email(){
        return this.#email;
    }

    get posts(){
        return this.#posts;
    }

    #getUserPosts(id){
        getApiResponse(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(
            (data)=>{
                fetchPostsResponse(data).then((posts)=>{this.#posts=posts;
                    drawUser(this);
            })}
        ).catch(error=>error)

    }
}

class Post{
    $title;
    #body;
    constructor(title,body){
        this.$title = title;
        this.#body = body;
    }

    get title(){
        return this.$title;
    }
    
    get body(){
        return this.#body;
    }
}

const usersContainer = document.querySelector("div.container div#users");

/*
getApiResponse will make the api request and handle it to get the matched data or error code
*/
function getApiResponse(rout){
    return new Promise((resolve,reject)=>{
        fetch(rout).
        then(response=>{
            resolve(response)})
        .catch(error => {resolve(error.code)})
    }) 
}

function fetchResponse(response){
    return new Promise((resolve,reject)=>{
        response.json().then((data)=>{
            for(let index = 0 ; index < data.length; index++){
                console.log("preAddId",data[index].id)
                const theUser = new User(
                    data[index].name, data[index].email,data[index].id
                );
                users.push(theUser);
                resolve();
            }
        }).catch((errorCode)=>reject(errorCode))
    })
}
function fetchPostsResponse(response){
    return new Promise((resolve,reject)=>{
        response.json().then((data)=>{
            const posts = [];
            for(let index = 0 ; index < data.length; index++){
                const post = new Post(
                    data[index].title, data[index].body
                );
                posts.push(post);
            }
            resolve(posts);
        }).catch((errorCode)=>reject(errorCode))
    })
}
//test getApiResponse:
//getApiResponse("https://jsonplaceholder.typicode.com/users").then((value)=>console.log(value));

function getUsersData(){
        ///call the fetch function with the matched route that will return a promise object at the end of the proces 
        getApiResponse("https://jsonplaceholder.typicode.com/users").//fetch("https://jsonplaceholder.typicode.com/users").
        //if we will get a response,we will use json function to fetch it 
        then((response)=>fetchResponse(response)).
        
        //if the fetch was seccesful we will take the data and return matched obj
        then(data=>{
            for(let index = 0 ; index < data.length; index++){
                const theUser = new User(
                    data[index].name, data[index].email,data[index].id
                );
                users.push(
                    theUser
                )
            }
            
        })
        .catch(error => {console.log(error)})
}

/*
drawUser :
arguments: get a user object 
the function will generate matched HTML with the argument data and 
add to the matched HTML container element 
*/
function drawUser(user){
    const userElement = document.createElement("div");
    userElement.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Email:</strong> ${user.email}</p>
    `;
    //posts 
    const postsElement = document.createElement("div");
    postsElement.classList.add("posts");
    for(let post of user.posts){
        const postEle = document.createElement("div");
        postEle.innerHTML =  `<strong>${post.title}</strong>
        <br>${post.body}`;
        postsElement.appendChild(postEle);
    }
    userElement.appendChild(postsElement);
    userElement.classList.add("user");
    usersContainer.appendChild(userElement);
}

getUsersData();
