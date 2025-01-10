document.getElementById('long-in-button').
    addEventListener('click', function (e) {
        e.preventDefault()
        const pinNumber =  getInPutByValue('input-pin-number');
        console.log(pinNumber)
        if (pinNumber === 1234) {
            window.location.href='./dashboard.html'
            // console.log('successfully log in')
        } else {
            alert('invalid pin')
            
        }

    });