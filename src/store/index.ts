import Vuex from 'vuex'
import Vue from 'vue'

import {Link} from './Link'

Vue.use(Vuex)

declare function require<T>(name: string): T
const linkList = require<Link[]>('../data/linkData1.json')

export default new Vuex.Store<{
    selectPath: any[],
    linkList: Link[]
}>({
    state: {
        selectPath: [],
        linkList
    }
})
