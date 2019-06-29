!function () {
    portfolioAll.onclick = function () {
        portfolioBar.className = "bar state-1"
    }
    portfolioFramework.onclick = function () {
        portfolioBar.className = "bar state-2"
    }
    portfolioVallina.onclick = function () {
        portfolioBar.className = "bar state-3"
    }



    let aTags = document.querySelectorAll('nav ul li>a')
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
            x.preventDefault()
            let a = x.currentTarget
            let href = a.getAttribute('href')
            let element = document.querySelector(href)
            let top = element.offsetTop

            let n = 25
            let duration = 500 / n
            let currentTop = window.scrollY
            let targetTop = top - 80
            let distance = (targetTop - currentTop) / n
            let i = 0

            let id = setInterval(() => {
                if (i === n) {
                    window.clearInterval(id)
                    return
                }
                i = i + 1
                window.scrollTo(0, currentTop + distance * i)
            }, duration)
        }
    }
}()