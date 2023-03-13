Wiliam Friend
ReadMe.text


SUMMARY:
                
I used JQuery to read in an XML file (stocks.xml) which contains information about stocks. The XML is placed 
in an XML document object (dom, xml, html, patato, potato, you kinda parse the same way).
------------->stockQuery.js lines 5 - 9
I used jquery to parse the xml dom, traverse the nodes, 
and display the attribute value of the stock ticker symbols.  
------------->stockQuery.js lines 13
With jquery again, I sorted the stocks tickers in alphabetical order.  
------------->Note that these stocks are not sorted in the XML file.  
------------->Sorting was done sorting routine in JS/JQ.  
------------->stockQuery.js lines 14 - 16
IMPORTANT:  
->I didn't create a sorted list simply by rearranging the <Stock> 
elements in the XML file (as I will you check for this).  
------------->stockQuery.js lines 14 - 16
->When the mouse hovers over one of the stocks in the list, 
the HTML for the additional information about the stock is generated and placed
 in the <div id=”stockInfo”> element (see Figure 2).  
->Note that in this part I accessed the XML through the DOM to get
the additional information.  
------------->stockQuery.js lines 30 - 79
->In addition, the color of the selected item will 
change from navy to red. on mouse hover, 
------------->stockQuery.js lines 31 - 32
--------------->(**i wish I could make it not work or the whole li length, just over the word)
--------------->(I need more time to figure that out unless you have a tip)
-> Again with jquery, when the mouse no longer hovers over the item, 
    the color of the text will change back to navy. 
------------->stockQuery.js lines 83
->Between 3-5 seconds must pass, during which time the information will linger.  
    After that, the <div id=”stockInfo”> element must clear.  
------------->stockQuery.js lines 80 - 87
                        
                        Comments:(can ignore)
                I used bootstrap for very very minamal styling.
                The majority of this was done in jquery, since it's good at xml
                Minimal css in styles css
                Minimal html in stock.html
                I used like 90% jquery, which I think is what you wanted. It could have been javascript,
                but it would have been way more verbose and messy
                This is actually the first time i rendered the whole age with jquery. Jquery is awesome. I mean I new 
                jquery was cool but it was really easy to do this compared to pure js.
                Way more user friendly than vue, react, and especially angular.
