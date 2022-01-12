function generate()
{
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0)
    {
        alert('Please, chose a number!')
    }
    else
    {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (i = 1; i <= 10; i++)
        {
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
        }
    }
}