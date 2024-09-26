const questionItems = document.querySelectorAll("div.faq-item");


questionItems.forEach((questionItem)=>{
    const theElementId = questionItem.id;
    questionItem.firstElementChild.addEventListener("click",()=>{onQuestionClick(theElementId)});
})

function onQuestionClick(theElementId){
    console.log("click");
    document.querySelector(`div#${theElementId}`).classList.toggle("active");
}