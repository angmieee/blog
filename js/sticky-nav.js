!function () {
    window.onscroll = function () {

        if (window.scrollY > 10) {
            topNavBar.classList.add('sticky')

        } else {
            topNavBar.classList.remove('sticky')

        }
    }
}()