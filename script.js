const localStoragekey = 'to-do-list-rm'

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
        let values =  JSON.parse(localStorage.getItem(localStoragekey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStoragekey,JSON.stringify(values))
        MostrarValores()
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

    function removeIten(data)
    {
        let values =  JSON.parse(localStorage.getItem(localStoragekey) || "[]")
        let index = values.findIndex(x => x.name == data)
        values.splice(index,1)
        localStorage.setItem(localStoragekey,JSON.stringify(values))
        MostrarValores()
    }

    MostrarValores()

}