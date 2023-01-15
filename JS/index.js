var containerBox = document.getElementById("containerBox");
var itemsBox = document.getElementById("itemsBox");
var itemslist =Array.from (document.querySelectorAll('.item img'));
var closeBtn = document.getElementById('closeBtn')
var prevBtn = document.getElementById('prevBtn')
var nextBtn = document.getElementById('nextBtn')
var curantIndex;
for(var i=0;i<itemslist.length;i++){
    itemslist[i].addEventListener('click',function(e){
        containerBox.classList.remove(`d-none`)
        curantIndex = itemslist.indexOf(e.target)
        // console.log(curantIndex)
        var curentItemsSrc =e.target.getAttribute('src')
        itemsBox.style.backgroundImage = `url(${curentItemsSrc})`
        // console.log(curentItemsSrc)
    })
}
//closing
function closeimg(){
    containerBox.classList.add('d-none')
}
closeBtn.addEventListener('click',closeimg)

//next
function nextimage(){
    curantIndex++
    curantIndex >= itemslist.length?curantIndex=0:''
    var imageNew = itemslist[curantIndex].getAttribute('src')
    itemsBox.style.backgroundImage = `url(${imageNew})`
}
nextBtn.addEventListener('click',nextimage)

//previce
function previmage(){
    curantIndex--
    curantIndex <0?curantIndex=itemslist.length-1:''
    var imageNew = itemslist[curantIndex].getAttribute('src')
    itemsBox.style.backgroundImage = `url(${imageNew})`
}
prevBtn.addEventListener('click',previmage)
