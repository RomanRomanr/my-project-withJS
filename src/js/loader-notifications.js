function showLoader(){
    loader.classList.add("show")
}
function hideLoader(){
    loader.classList.remove("show");
}

function ShowMessageInfo( message){
    EasyToast.info("Увага!", message);
}
function ShowMessageError( message){
    EasyToast.error("Увага! Виникла помилка", message);
}
