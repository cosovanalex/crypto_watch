async function getPrice(){

    let request = new Request('http://api.coinlayer.com/api/live?access_key=5fb95011be69e0d2c9af25da5a91b6c6&expand=1', {
        method: 'GET',
    });
    let result = await fetch(request);
    let response = await result.json();
    console.log(response)

    /* Bitcoin - BTC    */
    var btc = document.getElementById("bitcoin");
    btc.innerHTML = response.rates.BTC.rate
    var btc = document.getElementById("bitcoin_volume");
    btc.innerHTML = response.rates.BTC.vol
    var btc = document.getElementById("bitcoin_cap");
    btc.innerHTML = response.rates.BTC.cap
    var btc = document.getElementById("bitcoin_sup");
    btc.innerHTML = response.rates.BTC.sup

    /* Litecoin - LTC    */ 
    var ltc = document.getElementById("litecoin");
    ltc.innerHTML = response.rates.LTC.rate
    var ltc = document.getElementById("litecoin_volume");
    ltc.innerHTML = response.rates.LTC.vol 
    var ltc = document.getElementById("litecoin_cap");
    ltc.innerHTML = response.rates.LTC.cap 
    var ltc = document.getElementById("litecoin_sup");
    ltc.innerHTML = response.rates.LTC.sup 
    
    /* Ethereum - ETH   */
    var eth = document.getElementById("ethereum");
    eth.innerHTML = response.rates.ETH.rate
    var eth = document.getElementById("ethereum_volume");
    eth.innerHTML = response.rates.ETH.vol
    var eth = document.getElementById("ethereum_cap");
    eth.innerHTML = response.rates.ETH.cap
    var eth = document.getElementById("ethereum_sup");
    eth.innerHTML = response.rates.ETH.sup
    

    /* Dogecoin - DOGE    */
    var doge = document.getElementById("dogecoin");
    doge.innerHTML = response.rates.DOGE.rate
    var doge = document.getElementById("dogecoin_volume");
    doge.innerHTML = response.rates.DOGE.vol
    var doge = document.getElementById("dogecoin_cap");
    doge.innerHTML = response.rates.DOGE.cap
    var doge = document.getElementById("dogecoin_sup");
    doge.innerHTML = response.rates.DOGE.sup
    

    /* Cardano - ADA    */
    var ada = document.getElementById("cardano");
    ada.innerHTML = response.rates.ADA.rate
    var ada = document.getElementById("cardano_volume");
    ada.innerHTML = response.rates.ADA.vol
    var ada = document.getElementById("cardano_cap");
    ada.innerHTML = response.rates.ADA.cap
    var ada = document.getElementById("cardano_sup");
    ada.innerHTML = response.rates.ADA.sup


    /* Solana - LINK    */
    var link = document.getElementById("chainlink");
    link.innerHTML = response.rates.LINK.rate
    var link = document.getElementById("chainlink_volume");
    link.innerHTML = response.rates.LINK.vol
    var link = document.getElementById("chainlink_cap");
    link.innerHTML = response.rates.LINK.cap
    var link = document.getElementById("chainlink_sup");
    link.innerHTML = response.rates.LINK.sup
    
    
    /* Binance - BNB   */
    var bnb = document.getElementById("bnb");
    bnb.innerHTML = response.rates.BNB.rate
    var bnb = document.getElementById("bnb_volume");
    bnb.innerHTML = response.rates.BNB.vol
    var bnb = document.getElementById("bnb_cap");
    bnb.innerHTML = response.rates.BNB.cap
    var bnb = document.getElementById("bnb_sup");
    bnb.innerHTML = response.rates.BNB.sup
    
    /* Tether - USDT    */
    var usdt = document.getElementById("tether");
    usdt.innerHTML = response.rates.USDT.rate
    var usdt = document.getElementById("tether_volume");
    usdt.innerHTML = response.rates.USDT.vol
    var usdt = document.getElementById("tether_cap");
    usdt.innerHTML = response.rates.USDT.cap
    var usdt = document.getElementById("tether_sup");
    usdt.innerHTML = response.rates.USDT.sup
    
    /* Ripple - XRP    */
    var xrp = document.getElementById("ripple");
    xrp.innerHTML = response.rates.XRP.rate
    var xrp = document.getElementById("ripple_volume");
    xrp.innerHTML = response.rates.XRP.vol
    var xrp = document.getElementById("ripple_cap");
    xrp.innerHTML = response.rates.XRP.cap
    var xrp = document.getElementById("ripple_sup");
    xrp.innerHTML = response.rates.XRP.sup
   
    /* VeChain - VEN    */
    var ven = document.getElementById("vechain");
    ven.innerHTML = response.rates.VEN.rate
    var ven = document.getElementById("vechain_volume");
    ven.innerHTML = response.rates.VEN.vol
    var ven = document.getElementById("vechain_cap");
    ven.innerHTML = response.rates.VEN.cap
    var ven = document.getElementById("vechain_sup");
    ven.innerHTML = response.rates.VEN.sup

}

getPrice()


async function SearchforCrypto() {
    var searchItem = document.getElementById('searchbar').value;

    let request = new Request(`http://api.coinlayer.com/api/live?access_key=5fb95011be69e0d2c9af25da5a91b6c6&expand=1&symbols=${searchItem}`, {
        method: 'GET',
    });
    let result = await fetch(request);
    let response = await result.json();
    console.log(response)
    var mycrypto = response.rates[`${searchItem}`]
    console.log(mycrypto)
}