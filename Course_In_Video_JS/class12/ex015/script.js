function verify()
{
    var date = new Date()
    var year = date.getFullYear()
    var formYear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')

    if (formYear.value.length == 0 || Number(formYear.value) > year)
    {
        alert('[ERROR] Verify the information and try again!')
    }
    else
    {
        var formSex = document.getElementsByName('radsex')
        var age = year - Number(formYear.value)
        var genre = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (formSex[0].checked)
        {
            genre = 'Male'
            if (age >= 0 && age < 15)
            {
                img.setAttribute('src', 'photo-baby-m.png')
            }
            else if (age < 21)
            {
                img.setAttribute('src', 'photo-young-m.png')
            }
            else if (age < 60)
            {
                img.setAttribute('src', 'photo-adult-m.png')
            }
            else
            {
                img.setAttribute('src', 'photo-elderly-m.png')
            }
        }
        else
        {
            genre = 'Woman'
            if (age >= 0 && age < 15)
            {
                img.setAttribute('src', 'photo-baby-f.png')
            }
            else if (age < 21)
            {
                img.setAttribute('src', 'photo-young-f.png')
            }
            else if (age < 60)
            {
                img.setAttribute('src', 'photo-adult-f.png')
            }
            else
            {
                img.setAttribute('src', 'photo-elderly-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detected a ${genre} with ${age} years`
        res.appendChild(img)
    }
}