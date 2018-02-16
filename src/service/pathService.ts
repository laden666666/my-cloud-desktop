import store from '../store'

export default {
    openFolder(index){
        const arr = Array.prototype.concat(store.state.selectPath)
        arr.push(index)
        location.hash = arr.join('-')
    },
    selectFolderLevel(index){
        const arr = Array.prototype.concat(store.state.selectPath)
        arr.splice(index, store.state.selectPath.length)
        location.hash = arr.join('-')
    },
}
