function showLoader(){
    loader.classList.add("show")
}
function hideLoader(){
    loader.classList.remove("show");
}

function showMessage(type, text) {
  if(type === 'success') {
    iziToast.success({
      title: '',
      message: text,
      position: ''
    });
  } else if(type === 'error') {
    iziToast.error({
      title: '',
      message: text,
      position: ''
    });
  }
}