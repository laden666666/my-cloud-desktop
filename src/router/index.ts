import store from '../store'

store.state.selectPath = location.hash.replace('#', '').split('-').filter(i=>i)
window.onhashchange = function () {
    store.state.selectPath = location.hash.replace('#', '').split('-').filter(i=>i)
}

export default {}
