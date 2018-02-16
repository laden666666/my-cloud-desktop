import store from '../store'

export default {
    openFolder(index){
        store.state.selectPath.push(index)
    },
    selectFolderLevel(index){
        store.state.selectPath.splice(index, store.state.selectPath.length)
    },
}
