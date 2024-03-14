function encrypt() {
  const message = document.getElementById("message").value;
  const key = document.getElementById("key").value;

  if (message && key) {
    const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();

    localStorage.setItem("encryptedMessage", encryptedMessage);

    localStorage.setItem("encryptionKey", key);

    window.location.href = "../encryptedMessage/encryptedMessage.html";
  }

}

function decrypt() {
  const encryptedMessage = localStorage.getItem("encryptedMessage");
  const key = localStorage.getItem("encryptionKey");

  if (encryptedMessage && key) {
    try {
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, key);
      const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

      if (decryptedMessage !== "") {
        document.getElementById("result").value = decryptedMessage;
      } else {
        alert("Chave incorreta. Não é possível descriptografar a mensagem.");
      }
    } catch (error) {
      alert("Erro ao descriptografar. Verifique se a chave está correta.");
    }
  } else {
    alert("Por favor, preencha a mensagem criptografada e a chave.");
  }
}

function deletetextarea() {
  localStorage.clear();
}

function displayItems() {
  var l, i;
  document.getElementById("result").innerHTML = "";
  for (i = 0; i < localStorage.length; i++) {
    x = localStorage.key(i);
    document.getElementById("result").innerHTML += x + "<br>";
  }
}

function copyToClipboard() {
  const resultTextarea = document.getElementById("result");
  resultTextarea.select();
  document.execCommand("copy");
  copy.innerHTML = '<i class="fa-solid fa-check" style="color: #144335;"></i>';
}

window.onload = function () {
  const encryptedMessage = localStorage.getItem("encryptedMessage");

  if (encryptedMessage) {
    document.getElementById("result").value = encryptedMessage;
  }
};

let mensagem = document.querySelector("#message");
let container = document.querySelector(".info-card");
let mensageEerror = document.querySelector(".message-error");
let text = document.querySelector(".text-2");


mensagem.addEventListener("click", () => {
  container.style.display = "none";
  text.style.display = "none";
});


let textarea = document.querySelector(".message-textarea");
let senha = document.querySelector("#key");
let btnEncrypt = document.querySelector("#button-encrypt");
let error = document.querySelector("#error");


  btnEncrypt.addEventListener("click", () => {
    if (senha.value === "" || textarea.value === "") {
      error.innerHTML =
        ' <i class="fa-solid fa-circle-exclamation" style="color: #e90707;"></i> Escreva sua mensagem ou digite sua senha.';
      error.style.display = "block";  
      setTimeout(() => {
        error.innerHTML = "";  
        error.style.display = "none"; 
      }, 2000);
    } else {
      error.innerHTML = "";  
      error.style.display = "none"; 
  }
  
});



