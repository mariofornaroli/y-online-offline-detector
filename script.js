window.addEventListener('offline', connectionStatusUpdate);
window.addEventListener('online', connectionStatusUpdate);

let toastTimeout;

const showToast = (_online) => {
    if(toastTimeout) clearTimeout(toastTimeout)
    document.body.className = _online ? 'online' : 'offline'
    toastTimeout = setTimeout(() => {
        document.body.className = ''
    }, 5000);
}

function connectionStatusUpdate() {
    showToast(navigator.onLine)
}

