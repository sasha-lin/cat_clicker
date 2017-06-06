var delegate = function(client, clientMethod) {
    return function() {
        return clientMethod.apply(client, arguments);
    }
}
var Index = function(self, obj) {
    for (var i = 0; i < obj.length; i++) {
        if (obj[i] == self) {
            return i;
        }
    }
}
var Cat = function(name, murl) {
    this.name = name;
    this.murl = murl;
    var count;
    var obj;
    return {
        getName: function() {
            return name;
        },
        getUrl: function() {
            return murl;
        },
        getCount: function() {
            return count;
        },
        setCount: function(_count) {
            count = _count + 1;
            return count;
        },
        getObj: function(obj) {
            return obj;
        },
        setObj: function(obj) {
            this.obj = obj;
        }
    }
}
var catobj = [{
        'name': 'catA',
        'url': 'img/unnamed.jpg'
    },
    {
        'name': 'catB',
        'url': 'img/cat2.jpg'
    },
    {
        'name': 'catC',
        'url': 'img/cat3.jpg'
    },
    {
        'name': 'catD',
        'url': 'img/cat4.jpg'
    },
    {
        'name': 'catE',
        'url': 'img/cat5.jpg'
    }
];

var arr = [];


var left_ul = document.querySelector('.left ul');
var flex = document.querySelector('.flex');
var fname = flex.querySelector('.flex-item h4 span');
var fimg = flex.querySelector('.flex-item .img-circle');
var fcount = flex.querySelector('.flex-item p span');
var html = '';
//创建对象
for (var i = 0; i < catobj.length; i++) {
    arr[i] = new Cat(catobj[i].name, catobj[i].url);
    arr[i].setCount(-1);
}
//遍历小猫
function write(element, index, arr) {
    var _html = '<li>' + element.getName() + '/' + element.getCount() + '</li>';
    element.setObj(_html);
    html = html + _html;
}
arr.forEach(write);
left_ul.innerHTML = html;
//右边小猫呈现
for (var i = 0; i < catobj.length; i++) {
    left_ul.querySelectorAll('li')[i].addEventListener('click', function() {
        var index = Index(this, left_ul.querySelectorAll('li'));
        fname.innerHTML = arr[index].getName();
        fimg.style.backgroundImage = 'url(' + arr[index].getUrl() + ')';
        fcount.innerHTML = arr[index].getCount();
    });
}
//判断右边小猫呈现的是第几个小猫
var IndexName = function(name, arr) {
    var index2;
    arr.forEach(function(element, index, arr) {
        if (name == element.getName()) {
            index2 = index;
        }
    });
    return index2;
};
//给右边区域绑定小猫计数事件
fimg.addEventListener('click', function() {
    var index2 = IndexName(fname.innerText, arr);
    console.log(index2);
    if (index2 >= 0) {
        fcount.innerHTML = arr[index2].setCount(arr[index2].getCount());
        left_ul.querySelectorAll('li')[index2].innerHTML = arr[index2].getName() + '/' + arr[index2].getCount();
        arr[index2].setObj('<li>' + left_ul.querySelectorAll('li')[index2].innerHTML + '</li>');
    }

});