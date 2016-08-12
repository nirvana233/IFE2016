    var node =  document.getElementById('parentNode');
    var nodeList = [];
    var timer =null;

    var preOrder = function(node){
        if (node != null) {
            var nodeItem = Array.prototype.slice.apply(node.childNodes);
            nodeList.push(node);
            preOrder(nodeItem[1]);
            preOrder(nodeItem[nodeItem.length-2]);
            document.getElementById('tip').innerHTML = '遍历中...';
        }
    };

    var traverseColor = function(){
        var i = 1;
        nodeList[0].style.background = 'blue';
        timer = setInterval(function(){
            if (i < nodeList.length) {
                nodeList[i-1].style.background = '#FFF';
                nodeList[i].style.background = 'blue';
                i++;
            }else{
                clearInterval(timer);
                nodeList[i-1].style.background = '#FFF';
                document.getElementById('tip').innerHTML = '遍历完毕！';
            }
        },300);    
    };
    
    document.getElementById('startbtn').onclick = function(){
        preOrder(node);
        traverseColor();           
    };