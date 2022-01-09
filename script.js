console.log("page loaded...");
let elementoChangeName = document.querySelector("#name"),
    elementoRequest1 = document.querySelector("#request-1"),
    elementoRequest2 = document.querySelector("#request-2"),
    elementoBadge1 = document.querySelector("#badge-2"),
    elementoBadge2 = document.querySelector("#badge-500");

let count1 = 2,
    count2 = 418; 

function changeName() {
    // console.log("hola");
    // let name = prompt("Escribe tu nombre")
    let name = "Marissa"
    elementoChangeName.innerText = name
}

let removing = function (event) {
    console.log(event.id)
    if(event.id==="accept-1"){
        count1--
        count2++
        elementoBadge1.innerText = `${count1}`
        elementoBadge2.innerText = `${count2}`
        elementoRequest1.remove()
    }else if(event.id==="accept-2"){
        count1--
        count2++
        elementoBadge1.innerText = `${count1}`
        elementoBadge2.innerText = `${count2}`
        elementoRequest2.remove()
    }else if(event.id==="close-1"){
        count1--
        elementoBadge1.innerText = `${count1}`
        elementoRequest1.remove()
    }else if(event.id==="close-2"){
        count1--
        elementoBadge1.innerText = `${count1}`
        elementoRequest2.remove()
    }
}