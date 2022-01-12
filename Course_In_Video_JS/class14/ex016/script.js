function count()
{
    var start = Number(document.getElementById('txtstart').value)
    var end = Number(document.getElementById('txtend').value)
    var jump = Number(document.getElementById('txtjump').value)
    var res = document.getElementById('res')

    if (start == 0 || end == 0){res.innerHTML = 'Impossible Count!'}
    else if (jump == 0)
    {
        alert('Invalid number! Using JUMP 1')
        jump = 1

        res.innerHTML = 'Counting... <br>'
        for (i = start; i <= end; i += jump)
        {
            res.innerHTML += `${i} .. `
        }
    }
    else if (end < 0)
    {
        res.innerHTML = 'Counting... <br>'
        for (i = start; i >= end; i -= jump)
        {
            res.innerHTML += `${i} .. `
        }
    }
    else
    {
        res.innerHTML = 'Counting... <br>'
        for (i = start; i <= end; i += jump)
        {
            res.innerHTML += `${i} .. `
        }
    }

}