var ListOfGoodsComponent = React.createClass({

    displayName: 'ListOFGoods',
    
    render : function  () {

        var listOfGoodsTrs = this.props.listOfGoods.map(element => React.DOM.tr(
            { key: element.Id, className: 'item' },
            React.DOM.td(null, element.Name),
            React.DOM.td(null, element.Price),
            React.DOM.td(null, element.Quantity),
            React.DOM.td(null, element.Url)
        )); 
        
        return React.DOM.div( 
            {className:'ListOfGoods'}, 
            React.DOM.h1( {className:'header'}, this.props.shopName ),
            React.DOM.table(
                { className:'items' },
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