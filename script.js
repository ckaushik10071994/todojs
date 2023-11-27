var shadow = document.querySelector("div");
var toDoHeading = document.querySelector("section");
var addList = document.querySelector(".addList");
var inputValue = document.querySelector("addpara");
var addItemhead = document.querySelector('#inputText');

var header = document.querySelector("header");
var todoCount = 0;
var newtodoCount = 0;

function popUp1() {
    shadow.classList.add("shadow");
    addList.style.display = "block";
}

document.querySelector(".close").addEventListener("click", () => {
 shadow.classList.remove("shadow");
 addList.style.display = "none";
});

function popUp2() {
    console.log("popUp2");
    todoCount++;
    shadow.classList.remove("shadow");
    addList.style.display = "none";
    document.querySelector('.noText').style.display = 'none'
     var toDoCard = document.createElement('div')
     var CardHeading = document.createElement('div')
     var boxLine = document.createElement('hr')
     var deleteBtn = document.createElement('div')

     toDoHeading.appendChild(toDoCard);
     toDoCard.setAttribute('id',`box${todoCount}`);

     toDoCard.classList.add('box');
     toDoCard.appendChild(CardHeading);
     CardHeading.innerHTML = `${inputValue.value}`;
     console.log(CardHeading.innerHTML);

     CardHeading.addEventListener('click',()=>{
        var allItems = document.querySelectorAll('.box');
        var card = CardHeading.parentNode;
        var cardVal = CardHeading.innerHTML;
        
        header.style.display = 'none';
        card.style.display = 'block';
        toDoHeading.style.justifyContent = "center";
        allItems.forEach((cards)=>{
            console.log(cards);
            console.log(card);
            if(cards!==card)
            cards.style.display = 'none'
        });
        document.querySelector('.upperbar').style.display = 'flex'
        document.querySelector('.text').innerHTML = `${cardVal}`;
        document.querySelector('.back').addEventListener('click',()=>{
            header.style.display ='flex';
            toDoHeading.style.display = 'flex';
            toDoHeading.style.justifyContent = "space-between";
            document.querySelector('.upperbar').style.display ='none';

            allItems.forEach((cards)=>{
                cards.style.display = 'block';
            });
        })
     })
     toDoCard.appendChild(deleteBtn);
     deleteBtn.classList.add('deleteClass');
     deleteBtn.innerHTML='<img src = "deleteimage.png">';
     deleteBtn.addEventListener('click',()=>{
        var cardDelete = deleteBtn.parentNode;
        cardDelete.style.display = "none";
        cardDelete.remove();
        todoCount--;
 })
toDoCard.appendChild(boxAddButton);
boxAddButton.classList.add('AddBtn');
boxAddButton.innerHTML = '<img src="logo.svg">';
boxAddButton.addEventListener('click',()=>{
    shadow.classList.add("shadow");
    addItemhead.style.display ='flex';
    card = boxAddButton.parentNode;
})
} 
document.querySelector('.ItemBtn').addEventListener('click',()=>{
    console.log("line 84,itemBtn")
    newtodoCount++;
    shadow.classList.remove('shadow');
    addItemhead.style.display = 'none';

    var todoDiv = document.createElement('div');
    var rowText = document.createElement('div');
    var MarkDown = document.createElement('div');

    card.appendChild(todoDiv);
    todoDiv.appendChild(rowText);
    todoDiv.appendChild(MarkDown);

    todoDiv.setAttribute('id,todoDiv${todoCount}');
    todoDiv.classList.add('todoDiv');
    MarkDown.classList.add('MarkDown');

    rowText.innerHTML = '${addItemhead.value}';
    MarkDown.innerHTML ='<h6>Mark</h6>';
    MarkDown.addEventListener('click',()=>{
        var todoDivText = MarkDown.parentNode;
        todoDivText.classList.add('line');
        MarkDown.style.display = 'none';
    })
})
















