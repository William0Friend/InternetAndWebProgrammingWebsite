
(function loadXMLDoc(dname) {
    let xmlDoc;
    try {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', dname, false);
        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send('');
        xmlDoc = xmlhttp.responseXML;
    }
    catch (e) {
        console.error(e.message);
    }
    return xmlDoc;
});



(function onBodyLoad() {
    //let div2 = getElementById("div2");
    let xmlDocument = loadXMLDoc("stocks.xml")

    // get the root element
    // Portfolio
    let element = xmlDocument.documentElement;


    let stockList = document.getElementById('stockList');

    stockList.innerHTML = "<p>Here is the root node of the document: " +
        "<strong>" + element.nodeName + "</strong>" +
        "<br />The following are its child elements:" + element.childElementCount
    "</p><ul>";

    // traverse all child nodes of root element
    let curNode = element.firstElementChild;
    let stockNode = element.firstElementChild;
    let curNodeArray = [];
    ///let count = 0;
    while (curNode != null) {
        // print node name of each child element
        let attribute = "symbol";
        let value = curNode.getAttribute(attribute);
        stockList.innerHTML += "<li><strong>" + value + "</strong></li>";
        curNodeArray.pop(value);
        console.log(curNodeArray);
        curNode = curNode.nextElementSibling;
        //count++;
    }
    stockList.innerHTML += "</ol>";
});






(function showInfo() {
    //let div2 = getElementById("div2");
    let xmlDocument = loadXMLDoc("stocks.xml")

    // get the root element
    // Portfolio
    //let element = xmlDocument.documentElement;
    let portfolioNode = xmlDocument.documentElement;

    let stockInfo = document.getElementById('stockInfo');
    //Here is the root node of the document: Portfolio
    //The following are its child elements: 5
    stockInfo.innerHTML = "<p>Here is the root node of the document: " +
        "<strong>" + portfolioNode.nodeName + "</strong>" +
        "<br />The following are its child elements:" + portfolioNode.childElementCount
    "</p><ol>";

    // get the first child node of root element
    //let currentNode = element.firstElementChild;
    let stockNode = portfolioNode.firstElementChild;
    // traverse all child nodes of root element
    // Company
    let curNode = stockNode.firstElementChild;
    //stockInfo.innerHTML = "<ol>";
    while (curNode != null) {
        // print node name of each child element
        stockInfo.innerHTML += "<li><strong>" + curNode.nodeName + " - " + curNode.textContent + "</strong></li>";
        curNode = curNode.nextElementSibling;
    }
    stockInfo.innerHTML = "/<ol>";
});
