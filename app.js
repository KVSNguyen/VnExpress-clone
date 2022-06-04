
function showModal(){
    $('.modal-login').show()
}

function hideModal(){
    $('.modal-login').hide()
}

$('.open-modal').on('click', function(){
    showModal()
})

$('.close-modal').on('click', function(){
    hideModal()
})
