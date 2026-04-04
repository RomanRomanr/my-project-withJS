import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css'

const loader = document.querySelector(".loader");
const overlay = document.querySelector('.loader-overlay');
export function showLoader() {
    overlay.classList.remove("hidden");
    loader.classList.add("show");
}
export function hideLoader(){
    loader.classList.remove("show");
    overlay.classList.add("hidden");
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