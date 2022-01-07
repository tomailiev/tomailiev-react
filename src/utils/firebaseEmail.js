const apiUrl = 'https://us-central1-toma-iliev.cloudfunctions.net/sendEmail';


function sendEmail(body) {
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body)
    };

    return fetch(apiUrl, options)
        .then(res => res.json())
}

export default sendEmail;