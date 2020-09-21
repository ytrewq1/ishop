var ListOfGoodsComponent = React.createClass({

    displayName: 'ListOFGoods',
    
    render : function  () {

        var listOfGoodsTrs = this.props.listOfGoods.map(element => React.DOM.tr(
            { key: element.Id},
            React.DOM.td(null, element.Name),
            React.DOM.td(null, element.Price),
            React.DOM.td(null, element.Quantity),
            React.DOM.td(null, null, React.createElement('img', { 
                src : element.Url, 
                alt : element.Name, 
                title : element.Name
            }, null))
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