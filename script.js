const localStoragekey = 'to-do-list'

function novatarefa(){
    let input = document.getElementById('input--new--tarefa')
    //validadção
    if(!input.value)
    {
        alert('Digite algo para inserir a sua lista!')
    }
    //else if()
    else
    {
        //adicionando em LocalStorege
        let values =  JSON.parse(localStorage.getItem)
    }
    
}