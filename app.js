'use strict'

const app = (function () {

    const date = () => {
        document.querySelector('#year').textContent = new Date().getFullYear()
    }

    const scrollHeight = () => {
        window.addEventListener('scroll', () => {
            let scrollHeight = scrollY
            console.log(scrollHeight);
            let list = Array.from(document.querySelectorAll('ul li a'))

            list[0].className = scrollHeight >= 0 && scrollHeight <= 821 ? 'activeLink' : ''
            list[1].className = scrollHeight >= 821.25 && scrollHeight <= 1623 ? 'activeLink' : ''
            list[2].className = scrollHeight >= 1625 && scrollHeight <= 2373 ? 'activeLink' : ''
            list[3].className = scrollHeight >= 2375 && scrollHeight <= 3100 ? 'activeLink' : ''
            list[4].className = scrollHeight > 3100 ? 'activeLink' : ''
        })
    }

    const handleSubmit = () => {
        document.querySelector('form').addEventListener('submit', () => {
            document.querySelectorAll('input').forEach(el => el.value = '')
            document.querySelector('textarea').textContent = ''
        })
        window.addEventListener('load', () => {
            document.querySelector('textarea').textContent = ''
        })
    }

    const handleThemeChange = () => {
        document.querySelector('.theme-toggler').addEventListener('click', () => {
            document.body.classList.toggle('light')
            if (document.body.classList.contains('light')) {
                localStorage.setItem('bgTheme', 'light')
            } else {
                localStorage.setItem('bgTheme', 'dark')
            }
        })
    }

    const appMaster = () => {
        date();
        scrollHeight();
        handleSubmit();
        handleThemeChange();
        window.addEventListener('load', () => {
            let localData = localStorage.getItem('bgTheme')
            if (localData === null) {
                localStorage.setItem('bgTheme', 'dark')
                document.body.classList.remove('light')
            } else if (localData === 'dark') {
                document.body.classList.remove('light')
            } else {
                document.body.classList.add('light')
            }
        })
    }
    return {
        init: function () { appMaster() }
    }
})()

app.init()