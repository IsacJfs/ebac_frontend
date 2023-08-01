const form = document.getElementById('form-verifica')
const campoA = document.getElementById('campoa');
const campoB = document.getElementById('campob');
const classMensagemSucesso = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorCampoA = parseInt(campoA.value);
    const valorCampoB = parseInt(campoB.value);

    let eMaior = valorCampoB > valorCampoA;

    if (eMaior) {
        const mensagemSucesso = `O valor de B = ${valorCampoB} é maior que o de A = ${valorCampoA}`;
        classMensagemSucesso.innerHTML = mensagemSucesso;
        classMensagemSucesso.style.display = 'block';
        campoB.style.border = "none";
        campoA.value = '';
        campoB.value = '';
    } else {
        campoB.style.border = "1px solid red";
        errorMessage.style.display = "block";
    }
})

campoB.addEventListener('keyup', function(e) {
    
    let result = e.target.value < parseInt(campoA.value);
    console.log(parseInt(campoA.value))
    console.log(result)
    if (result) {
        campoB.classList.add('error');
        document.querySelector(".error-message").style.display = 'block';
    }else{
        campoB.classList.remove('error');
        document.querySelector(".error-message").style.display = 'none';      
    }
})