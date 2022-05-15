const result_field = document.querySelector('#input') 
const reset = document.querySelector('.btn-reset') 
const btn_math = document.querySelectorAll('.btn-math') 
const btn_equal = document.querySelector('.btn_equal') 

btn_math.forEach(btn => {
    btn.addEventListener('click', function(){
        result_field.value += btn.textContent
    })
})

reset.addEventListener('click',function(){
    result_field.value = ''
})

btn_equal.addEventListener('click', function(){
    result_field.value = eval(result_field.value)
})

document.body.addEventListener('keydown', function(event){
    if(event.key == '='){
        result_field.value = eval(result_field.value)
    }
})