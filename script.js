const localStoragekey = 'to-do-list-rm'

function validarNovaTarefa()
{
    let values     =  JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let inputValue = document.getElementById('input--new--tarefa').value
    let existe     = values.find(x => x.name == inputValue)
    return !existe ? false : true
}

function novatarefa(){
    let input = document.getElementById('input--new--tarefa')
   
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
            list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'>ok</button></li>`
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

