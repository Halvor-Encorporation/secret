



function encrypt() {
    var input = document.getElementById("input").value;
    var output_Htel = document.getElementById("output");
    
    encrypted_text = encrypt_method(input)
    output_Htel.innerHTML = "" + encrypted_text;
}

function decrypt() {
    var input = document.getElementById("input").value;
    var output_Htel = document.getElementById("output");
    
    decrypted_text = decrypt_method(input)
    output_Htel.innerHTML = "" + decrypted_text;
}


function encrypt_method(inputText) {
    var encrypted_text = "";
    for (var i = 0; i < inputText.length; i++) {
        //encrypted_text += String.fromCharCode(inputText.charCodeAt(i) + 1);
        encrypted_text += inputText[i] + inputText[i];
    }
    encrypted_text = encrypted_text.replace(/\s/g, '$');
    return encrypted_text;
}

function decrypt_method(inputText) {
    var decrypted_text = "";
    inputText = inputText.replace(/\$/g, ' ');
    for (var i = 0; i < inputText.length; i += 2) {
        decrypted_text += inputText[i];
    }
    return decrypted_text;
}

