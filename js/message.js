var APP_ID = 'rz17hMK8FJb3Ch2x4UuDTFF6-gzGzoHsz';
var APP_KEY = 'wAXCW4hfG0GDRTAch97htVfc';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function (object) {
//     alert('LeanCloud Rocks!');
// })

var query = new AV.Query('Message');
query.find().then(function (message) {
    let array = message.map(item => item.attributes)
    array.forEach(item => {

        let li = document.createElement('li')
        li.innerText = `${item.name}:${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    });
}).then(function (message) {
    // 更新成功
}, function (error) {
    // 异常处理
});

let myForm = document.querySelector('#myForm')
myForm.addEventListener('submit', function (e) {
    e.preventDefault()

    var name = myForm.querySelector('input[name=name]').value
    var content = myForm.querySelector('input[name=content]').value
    if (name !== '' && content !== '') {
        var Message = AV.Object.extend('Message')
        var message = new Message()
        message.save({
            name: name,
            content: content
        }).then(function (object) {
            let li = document.createElement('li')
            li.innerText = `${object.attributes.name}:${object.attributes.content}`
            let messageList = document.querySelector('#messageList')
            messageList.appendChild(li)
            myForm.querySelector('input[name=content]').value = ''
        })
    } else {
        alert("输入不能为空")
    }

})