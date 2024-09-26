//exercise 2 selcting a spesfic List Item
const myLi = document.querySelector('li.start-here');

//exercise 3
myLi.textContent = "main title";

//exercise 4
const myLiNextSibling = myLi.nextElementSibling;
const myUl = myLiNextSibling.firstElementChild;
const newSubTitle = document.createElement('li');
const subTitleText = document.createTextNode('sub title 4');
newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle);

//exercise 5
const myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();

//exercise 6
const head = document.querySelector("head");
const title = head.lastElementChild;
title.textContent = "DOM Master";

//exercise 7
const div = myLiParent.nextElementSibling;
const p = div.firstChild;
p.textContent = "Now I know how to traverse the DOM :D";
