TODO:

DONE:
I used JQuery to read in an XML file (stocks.xml) which contains information about stocks. The XML is placed in an XML document object.
Display the list of stock ticker symbols.  When displayed, sort the stocks alphabetical order by ticker symbol.  Note that these stocks are not sorted in the XML file.  
Sorting should be done sorting routine in JS/JQ.  IMPORTANT:  Do not create a sorted list simply by rearranging the <Stock> elements in the XML file (as I will check for this).  
When the mouse hovers over one of the stocks in the list, the HTML for the additional information about the stock is generated and placed in the <div id=”stockInfo”> element (see Figure 2).  
Note that this part involves accessing the XML through the DOM to get the additional information.  In addition, the color of the selected item will change from navy to red.
When the mouse no longer hovers over the item, the color of the text will change back to navy. 
Between 3-5 seconds must pass, during which time the information will linger.  After that, the <div id=”stockInfo”> element must clear.  

