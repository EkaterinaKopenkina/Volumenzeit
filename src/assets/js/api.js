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