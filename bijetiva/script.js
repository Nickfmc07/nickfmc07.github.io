const plainTextCEl = document.getElementById("plainTextC")
const cipherTextCEl = document.getElementById("cipherTextC")
const keyCEl = document.getElementById("keyC")
const decryptModeCEl = document.getElementById("decryptModeC")
const staticCells = document.querySelectorAll(".staticCell")
const cells = document.querySelectorAll(".cell")

function altC() {
    if (plainTextCEl.disabled) {
        plainTextCEl.disabled = false
        cipherTextCEl.disabled = true
        //cipherTextCEl.value = ""
    } else {
        plainTextCEl.disabled = true
        //value = ""
        cipherTextCEl.disabled = false
    }
    //executeC()
}   // caso eu não use o botão e recalcule a caixa de texto, eu preciso executar a função para que a caixa de texto contenha o resultado. E isso é mais custoso do que simplesmente não apagar a caixa como eu fiz no caso do botão. Mas, pela versatilidade de poder mudar entre as duas formas, estou mantendo a versão que recalcula como comentário.

function encryptC(key, plainText) {
    if (key == 0 || key == null) return plainText
    let encryptedText = ""
    for(let i = 0; i < plainText.length; i++) {
        let c = plainText[i]
        if (c >= 'a' && c <= 'z') {
            c = String.fromCharCode((c.charCodeAt(0) - 97 + key) % 26 + 97)
        } else if (c >= 'A' && c <= 'Z') {
            c = String.fromCharCode((c.charCodeAt(0) - 65 + key) % 26 + 65)
        }
        encryptedText += c
    }
    return encryptedText //Texto agora cifrado
}

function decryptC(key, cipherText) {
    if (key == 0 || key == null) return cipherText
    let decryptedText = ""
    for(let i = 0; i < cipherText.length; i++) {
        let c = cipherText[i]
        if (c >= 'a' && c <= 'z') {
            c = String.fromCharCode((c.charCodeAt(0) - 97 - key + 26) % 26 + 97)
        } else if (c >= 'A' && c <= 'Z') {
            c = String.fromCharCode((c.charCodeAt(0) - 65 - key + 26) % 26 + 65)
        }
        decryptedText += c
    }
    return decryptedText //Texto agora decodificado
}

function executeC() {
    const key = parseInt(keyCEl.value);
    if (decryptModeCEl.checked) plainTextCEl.value =
    decryptC(key, cipherTextCEl.value);
    else cipherTextCEl.value =
    encryptC(key, plainTextCEl.value);
}

function fillCells() {
    let c = "A".charCodeAt(0)
    for (let i = 0; i < 26; i++) {
        staticCells[i].value = String.fromCharCode(c + i)
    }
} fillCells();

function updateCells() {
    let key = parseInt(keyCEl.value) || 0
    let startCharCode = "A".charCodeAt(0)
    for (let i = 0; i < 26; i++) {
        let newCharCode = (startCharCode - 65 + i + key) % 26 + 65
        cells[i].value = String.fromCharCode(newCharCode);
    }
} updateCells();