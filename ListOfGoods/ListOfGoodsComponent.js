var ListOfGoodsComponent = React.createClass({

    displayName: 'ListOFGoods',
    
    render : function  () {

        var listOfGoodsTrs = this.props.listOfGoods.map(element => React.DOM.tr(
            { key: element.Id},
            React.DOM.td(null, element.Name),
            React.DOM.td(null, element.Price),
            React.DOM.td(null, element.Quantity),
            //TODO Ask about difference between React.DOM. and React.createElement('a')
            React.DOM.td(null, null, React.createElement('a', { 
                href : element.Url
            }, element.Url))
        )); 
        
        return React.DOM.div( 
            {className:'ListOfGoods'}, 
            React.DOM.h3( {className:'Header'}, this.props.shopName ),
            React.DOM.table(
                { className:'Items' },
                React.DOM.thead(
                    null,
                    React.DOM.tr(
                        null,
                        React.DOM.th(null, 'Name'),
                        React.DOM.th(null, 'Price, $'),
                        React.DOM.th(null, 'Items left'),
                        React.DOM.th(null, ''),
                    ), 
                ),
                React.DOM.tbody(
                    null,
                    listOfGoodsTrs,
                ),                
            ),
        );
    },
});