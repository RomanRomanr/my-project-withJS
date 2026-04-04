function showLoader(){
    loader.classList.add("show")
}
function hideLoader(){
    loader.classList.remove("show");
}

function showMessage(type, text) {
  if(type === 'success') {
    iziToast.success({
      title: 'good',
      message: text,
      position: 'topRight'
    });
  } else if(type === 'error') {
    iziToast.error({
      title: 'error',
      message: text,
      position: 'topRight'
    });
  }
}