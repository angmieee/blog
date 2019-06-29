!function () {
    var liTags = document.getElementsByClassName('menuTrigger')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            let a = x.currentTarget.getElementsByTagName[0]
            console.log(a)
            let brother = a.nextElementSibling
            brother.classList.add('active')

            // let brother = a.nextSibling
            // while( brother.tagName !== 'UL' ){
            //     brother = brother.nextSibling
            // }
        }
        liTags[i].onmouseleave = function (x) {
            let a = x.currentTarget.getElementsByTagName[0]
            let brother = a.nextElementSibling
            brother.classList.remove('active')
        }
    }
}()