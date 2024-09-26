import users from "./users.js";

const theLst = document.createElement('ol');
theLst.style.listStyleType = 'none';

users.forEach((userObj)=>{
    const listItem = document.createElement('li');
    listItem.setAttribute('data-id',userObj.id);
    listItem.textContent  = `the user name is ${userObj.firstName} and his last name ${userObj.lastName}`;

    theLst.appendChild(listItem);
})

document.querySelector('.container').appendChild(theLst);