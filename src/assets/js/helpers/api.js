let count429 = 0;

const getToken = () => {
    const token = document.cookie.match(/login=(.+?)(;|$)/)[1];

    if (token) {
        return token
    }
    return '';
}

const sendRequest = async (met, url, data = null) => {
    const response = await fetch(url, {
        method: met,
        headers: {
            'X-API-KEY': 'FC52783F63184532B379EECD56DFC009E0131854354C4FA293EC5581CC6547F7',
            'Authorization': 'Bearer ' + getToken(),
        },
        body: data,
    });

    if (!response.ok) {
        throw new Error(response.status);
    }

    return await response.json();
}

const handleErrors = (errCode, err) => {
    if (errCode >= 500) {
        err.innerHTML = 'An error has occurred on the server';
        err.style.display = 'block';
        return;
    }

    switch (errCode) {
        case 401 || 403:
            err.innerHTML = 'Access is denied';
            err.style.display = 'block';
            break;
        case 422:
            err.innerHTML = 'Data validation error';
            err.style.display = 'block';
            break;
        case 429:
            err.innerHTML = 'You make requests too often';
            err.style.display = 'block';

            if (count429 > 2) {
                window.location.replace('http://localhost:3000/404.html');
                break;
            }

            count429++;
            break;
        default:
            err.innerHTML = 'An error has occurred';
            err.style.display = 'block';
    }
}