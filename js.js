const btn = $('.item__check');
const item = $('.item__text');
const box = $('.item__box');
const btnColor = $('.item__color');
const color = ['#F16D69','#F279A2','#9170CB','#5EB3F6','#67D7E5','#FFE083']

btn.click(function(e) {
    const num = Math.floor(Math.random() * ((color.length-1)))
    if(item.val()== '') {
        return false
    }else {
        $(`<div class="check__wrap" data-color="${num}">
                <div class="checkbox__item-wrap" >
                    <input class="checkbox__item"  id= "${num}" type="checkbox" name=""  ">
                </div>
                <label  for ="${num}"   class="checkbox__label" "onselectstart="return false" onmousedown="return false">${item.val()}</label>
            </div>`).appendTo(box)
    $(`[data-color = '${num}']`).css('background', color[num])
    }
    item.val('')
}) 

btnColor.click(function() {
    const color = $(this).attr('id')
    let checked = [];
    $('input:checkbox:checked').each(function() {
        if($(this).val() == 'on'){
            checked.push($(this))
            $.each(checked, function(i,v) {
                v.parent().parent().css('background', '').attr('id', color)
            })
        }
    });
    
})



