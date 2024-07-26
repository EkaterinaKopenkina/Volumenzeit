const getToken = () => {
    const token = document.cookie.match(/login=(.+?)(;|$)/)[1];
    if (token) {
        return token
    }
    return '';
}