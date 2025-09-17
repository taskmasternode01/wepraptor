
function formdata(){
    let inp1=parseInt(document.querySelector('#num1').value)
    let inp2=parseInt(document.querySelector('#num2').value)
    let res= inp1+inp2
    if(res%2==0){
           let result=document.querySelector('#result')
           result.textContent = res
           result.style.Color="red"
    }else{
        let result= document.querySelector('#result')
        result.textContent =res*res*res
        result.style.fontStyle="italic"
    }


    return false
}