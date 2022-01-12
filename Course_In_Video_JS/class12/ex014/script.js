function load()
{
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('image')
    var date = new Date()
    hour = date.getHours()
    msg.innerHTML = `Now are ${hour} hours.`

    if (hour >= 0 && hour < 12)
    {
        msg2.innerHTML = `Good Morning!`
        img.src = 'morningphoto.png'
        document.body.style.background = '#f7ee9b'
    }
    else if (hour >= 12 && hour < 18)
    {
        msg2.innerHTML = `Good Afternoon!`
        img.src = 'afternoonphoto.png'
        document.body.style.background = '#fcc12d'
    }
    else
    {
        msg2.innerHTML = `Good Night!`
        img.src = 'nightphoto.png'
        document.body.style.background = '#272077'
    }
}