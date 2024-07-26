const getToken = () => {
    const token = document.cookie.match(/login=(.+?)(;|$)/)[1];
    if (token) {
        return token
    }
    return '';
}

const getData = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-API-KEY': 'FC52783F63184532B379EECD56DFC009E0131854354C4FA293EC5581CC6547F7',
            'Authorization': 'Bearer ' + getToken(),
        }
    });

    if (!response.ok) {
        throw new Error(response.status);
    }

    return await response.json();
}