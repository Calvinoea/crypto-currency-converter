const dollar = document.getElementById('dollar');
const bitcoin = document.getElementById('bitcoin');
const ethereum = document.getElementById('ethereum');
const basicattentiontoken = document.getElementById('basicattentiontoken');
const pound = document.getElementById('pound');
const euro = document.getElementById('euro');

euro.addEventListener('input', EuroTo);

function EuroTo() {


    const eu = parseInt(euro.value);
    const dl = 1.11 * eu;
    const btc = eu * 0.00015;
    const eth = eu * 0.0087;
    const pnd = eu * 0.85;
    const bat = eu * 0.158069;
    dollar.value = dl;
    bitcoin.value = btc;
    ethereum.value = eth;
    basicattentiontoken.value = bat;
    pound.value = pnd;



}

EuroTo();

dollar.addEventListener('input', dollarTo);

function dollarTo() {

    const dl = parseFloat(dollar.value)
    const eu = dl * 0.90;
    const btc = dl * 0.00014;
    const eth = dl * 0.0078;
    const pnd = dl * 0.77;
    const bat = dl * 0.166941;

    bitcoin.value = btc;
    ethereum.value = eth;
    basicattentiontoken.value = bat;
    pound.value = pnd;
    euro.value = eu;

}

dollarTo();

bitcoin.addEventListener('input', BitcoinTo);

function BitcoinTo() {

    const btc = parseFloat(bitcoin.value)
    const dl = btc * 7161.83;
    const eu = btc * 6458.90;
    const eth = btc * 56.22;
    const pnd = btc * 5489.33;
    const bat = dl * 41006.00;
    dollar.value = dl;
    ethereum.value = eth;
    basicattentiontoken.value = bat;
    pound.value = pnd;
    euro.value = eu;

}

BitcoinTo();

ethereum.addEventListener('input', ethereumTo);

function ethereumTo() {

    const eth = parseFloat(ethereum.value)

    const dl = eth * 127.47;
    const eu = eth * 114.97;
    const btc = eth * 0.018;
    const pnd = eth * 97.66;
    const bat = eth * 25;

    dollar.value = dl;
    bitcoin.value = btc;
    basicattentiontoken.value = bat;
    pound.value = pnd;
    euro.value = eu;

}

ethereumTo();



pound.addEventListener('input', poundTo);

function poundTo() {

    const pnd = parseFloat(pound.value)

    const dl = pnd * 1.30;
    const eu = pnd * 1.18;
    const btc = pnd * 0.00018;
    const eth = pnd * 0.010;
    const bat = pnd * 7.722062;

    dollar.value = dl;
    bitcoin.value = btc;
    basicattentiontoken.value = bat;
    ethereum.value = eth;
    euro.value = eu;

}

poundTo();

basicattentiontoken.addEventListener('input', batTo);

function batTo() {

    const bat = parseFloat(basicattentiontoken.value)

    const dl = bat * 0.166941;
    const eu = bat * 0.158069;
    const btc = bat * 0.000023;
    const eth = bat * 0.001287;
    const pnd = bat * 0.151330;

    dollar.value = dl;
    bitcoin.value = btc;
    pound.value = pnd;
    ethereum.value = eth;
    euro.value = eu;

}

batTo();