let share = document.getElementById('share')
let sharing = document.querySelector('.sharing')
let shareH = document.getElementById('share-hidden')
share.addEventListener('click', () => {
    sharing.classList.toggle('hidden')
})

shareH.addEventListener('click', () => {
    sharing.classList.toggle('hidden')
})