const localStoragekey = 'to-do-list-rm'

function validarNovaTarefa()
{
    let values     =  JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let inputValue = document.getElementById('input-tarefa').value
    let existe     = values.find(x => x.name == inputValue)
    return !existe ? false : true
}

function novatarefa(){
    let input = document.getElementById('input-tarefa')
   
    //validadção

    if(!input.value)
    {
        input.style.border = '3px solid red'
        alert('Digite algo para inserir a sua lista!')
    }
    else if(validarNovaTarefa())
    {
        alert('Já existe uma tarefa com essa descrição')
    }
    else
    {
        //adicionando em LocalStorege
        let values =  JSON.parse(localStorage.getItem(localStoragekey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStoragekey,JSON.stringify(values))
        MostrarValores()
    }
    input.value = ''
}
    function MostrarValores()
    {
        let values =  JSON.parse(localStorage.getItem(localStoragekey) || "[]")
        let list = document.getElementById('to-do-list')
        list.innerHTML = ''
        for(let i = 0; i < values.length; i++)
        {
            list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
          </svg></button></li>`
        }
    }

    function removeItem(data)
    {
        let values =  JSON.parse(localStorage.getItem(localStoragekey) || "[]")
        let index = values.findIndex(x => x.name == data)
        values.splice(index,1)
        localStorage.setItem(localStoragekey,JSON.stringify(values))
        MostrarValores()
    }

    MostrarValores()