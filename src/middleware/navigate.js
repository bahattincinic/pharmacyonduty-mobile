'use strict'

import * as actions from '../actions'
import * as actionCreators from '../action_creators'


function doNavigate(store, next, action) {
    let route = action.route
    const navigator = route.navigator

    if (navigator && route.component) {
        let context = {
            component: route.component,
        }
        navigator.push(context)
    }
}


export default store => next => action => {

    if (action.type === actions.navigateAction.type) {
        return doNavigate(store, next, action)
    }

    return next(action)
}