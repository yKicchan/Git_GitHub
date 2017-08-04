$(function() {
    //購入
    $(".buy").live('click', function() {

        //商品情報の取得
        var table = $(this).parent().parent();
        var no = table.find(".no").text();
        var name = table.find(".name").text();
        var price = table.find(".price").text();
        var num = table.find(".num");
        var numVal = num.find("input").val()

        //数量の入力チェック
        if (numVal === "") {
            showErrorMsg(num, "数量が未入力です");
            return;
        } else if (numVal <= 0) {
            showErrorMsg(num, "1以上の数量を指定してください");
            return;
        }

        //商品追加
        addCart(no, name, price, numVal);
    });

    //取消
    $(".del").live('click', function() {
        $(this).parent().parent().fadeOut(450);
    });
   
    $("#clear").live('click', function(){
        $(".row").remove();
    });
});

//商品の追加処理
function addCart(no, name, price, num) {
    var row = "<tr class=\"row\">";
    row += "<td>" + no + 			"</td>";
    row += "<td>" + name + 			"</td>";
    row += "<td>" + price + 		"</td>";
    row += "<td>" + num +			"</td>";
    row += "<td>" + (price * num) + "</td>";
    row += "<td><input class=\"del\" type=\"button\" value=\"取消\"/></td>";
    row += "</tr>";
    $("#cart").append(row);
}

//エラーメッセージの表示
function showErrorMsg(parent, str) {
    parent.append("<span class=\"msg\">" + str + "</span>");
    var msg = parent.find(".msg");
    setTimeout(function(){
        msg.fadeOut(1000);
    }, 1000);
}
