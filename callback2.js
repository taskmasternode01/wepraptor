let st
function startt(){
    let v = 0
    let counter = document.querySelector('#counter')
    st = setInterval(()=>{
        counter.innerHTML = v++
    },500)
}

function stop(){
    clearInterval(st)
}

function reset(){
    clearInterval(st)
    v=0
    document.querySelector('#counter').innerHTML=v
    
}

let btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
    alert("working fine")
})