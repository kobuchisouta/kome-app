const buttonOpen = document.getElementsByClassName('modal-open')[0];
const modal = document.getElementsByClassName('modal')[0];
const buttonClose = document.getElementsByClassName('modal-close')[0];
const body = document.getElementsByTagName('body')[0];
// ボタンがクリックされた時
buttonOpen.addEventListener('click', function(){
    modal.style.display = 'block';
    body.classList.add('open');
});


// バツ印がクリックされた時
buttonClose.addEventListener('click',function(){
    modal.style.display = 'none';
    body.classList.remove('open');
});

// モーダルコンテンツ以外がクリックされた時
modal.addEventListener('click', function(){ 
    modal.style.display = 'none';
    body.classList.remove('open');
});