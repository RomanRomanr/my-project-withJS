function showLoader(){
    loader.classList.add("show")
}
function hideLoader(){
    loader.classList.remove("show");
}

void ShowMessageInfo(string message){
    EasyToast.info("Увага!", message);
}
void ShowMessageError(string message){
    EasyToast.error("Увага! Виникла помилка", message);
}
