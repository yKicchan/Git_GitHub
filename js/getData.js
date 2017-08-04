$(function(){
    /**
     * 商品情報を取得する
     * @return {void}
     */
    var getProduct = function(){
        $.ajax({
            url: "http://nt24/~sk3a14/getData.php",
            type: "get",
            success: function(data){
                // 取得したJSON文字列(商品情報)をオブジェクトに変換
                data = JSON.parse(data);
                // 取得商品を追加
                for (var i = 0,l = data.length; i < l; i++) {
                    var row = "<tr>\n";
                    row += "<td class=\"no\">" + data[i].no + "</td>\n"; // 商品No
                    row += "<td class=\"name\">" + data[i].name + "</td>\n"; // 商品名
                    row += "<td class=\"price\">" + data[i].price + "</td>\n"; // 単価
                    row += "<td class=\"num\"><input type=\"number\" min=\"1\" /></td>\n";
                    row += "<td><input class=\"buy\" type=\"button\" value=\"購入\" /></td>\n";
                    row += "<tr>\n";
                    // 商品テーブルに追加
                    $("#products").append(row);
                }
            }
        });
    };
    // 取得実行
    getProduct();
});
