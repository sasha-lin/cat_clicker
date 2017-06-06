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
    }
];

var arr = [];

for (var i = 0; i < document.querySelectorAll('.img-circle').length; i++) {
    arr[i] = new Cat(catobj[i].name, catobj[i].url);
    arr[i].setObj(document.querySelectorAll('.img-circle')[i]);
    arr[i].setCount(-1);

    document.querySelectorAll('.img-circle')[i].parentNode.querySelector('h4 span').innerHTML = arr[i].getName();
    document.querySelectorAll('.img-circle')[i].style.backgroundImage = 'url(' + arr[i].getUrl() + ')';
    document.querySelectorAll('.img-circle')[i].addEventListener('click', function() {
        var index = Index(this, document.querySelectorAll('.img-circle'));
        this.nextElementSibling.querySelector('span').innerHTML = arr[index].setCount(arr[index].getCount());
    });
}