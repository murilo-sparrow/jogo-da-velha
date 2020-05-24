var esquerdaCima
var esquerda
var esquerdaBaixo
var meioCima
var meio
var meioBaixo
var direitaCima
var direita
var direitaBaixo

function jogada1(escolha) {
    esquerdaCima = escolha
}

function jogada2(escolha) {
    esquerda = escolha
}

function jogada3(escolha) {
    esquerdaBaixo = escolha
}

function jogada4(escolha) {
    meioCima = escolha
}

function jogada5(escolha) {
    meio = escolha
}

function jogada6(escolha) {
    meioBaixo = escolha
}

function jogada7(escolha) {
    direitaCima = escolha
}

function jogada8(escolha) {
    direita = escolha
}

function jogada9(escolha) {
    direitaBaixo = escolha
}

function resultado() {
    if (direitaCima === 1 && meioCima === 1 && esquerdaCima === 1)
        alert('O venceu')
    else if (direita === 1 && meio === 1 && esquerda === 1)
        alert('O venceu')
    else if (direitaBaixo === 1 && meioBaixo === 1 && esquerdaBaixo === 1)
        alert('O venceu')
    else if (direitaCima === 1 && direita === 1 && direitaBaixo === 1)
        alert('O venceu')
    else if (meioCima === 1 && meio === 1 && meioBaixo === 1)
        alert('O venceu')
    else if (esquerdaCima === 1 && esquerda === 1 && esquerdaBaixo === 1)
        alert('O venceu')
    else if (direitaCima === 1 && meio === 1 && esquerdaBaixo === 1)
        alert('O venceu')
    else if (esquerdaCima === 1 && meio === 1 && direitaBaixo === 1)
        alert('O venceu')
    else if (direitaCima === 0 && meioCima === 0 && esquerdaCima === 0)
        alert('X venceu')
    else if (direita === 0 && meio === 0 && esquerda === 0)
        alert('X venceu')
    else if (direitaBaixo === 0 && meioBaixo === 0 && esquerdaBaixo === 0)
        alert('X venceu')
    else if (direitaCima === 0 && direita === 0 && direitaBaixo === 0)
        alert('X venceu')
    else if (meioCima === 0 && meio === 0 && meioBaixo === 0)
        alert('X venceu')
    else if (esquerdaCima === 0 && esquerda === 0 && esquerdaBaixo === 0)
        alert('X venceu')
    else if (direitaCima === 0 && meio === 0 && esquerdaBaixo === 0)
        alert('X venceu')
    else if (esquerdaCima === 0 && meio === 0 && direitaBaixo === 0)
        alert('X venceu')
    else
        alert('velha')
}