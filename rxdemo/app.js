var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');


keyups.throttleTime(500).map(function(x) {
        return q.val();
    })
    .switchMap(function(x) {
        return searchWikipedia(x)
    })
    .do(function(x) {
        console.log(x);
    })
    .subscribe(function(x) {
        let resultsTag = '#results',
            itemTag = '#item',
            definitionTag = '#definition',
            linkTag = '#link',
            item = x[1],
            definition = x[2],
            link = x[3],
            lists = `
                    <ul id="item"></ul>
                    <ul id="definition"></ul>
                    <ul id="link"></ul>
                    `;
    
        $(linkTag).remove();
        $(itemTag).remove();
        $(definitionTag).remove();
    
        $(resultsTag).append(lists);
    
        var createLinkList = (element) => {
            $(linkTag).append('<li><a href="' + element + '" >' + element + '</a></li>');
        },
        createDefinitionList = (element) => {
            $(definitionTag).append('<li>' + element + '</li>');
        },
        createItemList = (element) => {
            $(itemTag).append('<li>' + element + '</li>');
        }
    
        link.forEach(createLinkList);
        definition.forEach(createDefinitionList);
        item.forEach(createItemList);
    
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}