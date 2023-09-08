 document.getElementsByTagName('main')[0].addEventListener('mousemove', (e) => {
        let x = (e.offsetX) / 45
        let y = (e.offsetY) / 45
        let w = (document.getElementsByTagName('main')[0].clientWidth) / 45
        let h = (document.getElementsByTagName('main')[0].clientHeight) / 45
        // document.getElementsByTagName('span')[0].innerHTML = 'offsetX = ' + x + ' , offsetY = ' + y
        document.getElementById('leftEye').style.transform = 'translate(' + (x - (w / 2)) + 'px , ' + (y - (h / 2)) + 'px)'
        document.getElementById('rightEye').style.transform = 'translate(' + (x - (w / 2)) + 'px , ' + (y - (h / 2)) + 'px)'

    })