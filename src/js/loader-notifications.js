function showLoader(){
    loader.classList.add("show")
}
function hideLoader(){
    loader.classList.remove("show");
}

export function ShowMessageInfo(message) {
    iziToast.info({
        title: 'Увага!',
        message: message,
        position: 'topRight'
    });
}

export function ShowMessageError(message) {
    iziToast.error({
        title: 'Увага! Виникла помилка',
        message: message,
        position: 'topRight'
    });
}