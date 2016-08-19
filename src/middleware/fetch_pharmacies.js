'use strict'

import * as actions from '../actions'
import * as actionCreators from '../action_creators'
import Settings from '../settings'


async function fetchDistricts(store, next, action) {
    try {
        let absolte_url =  Settings.endpoints.pharmacies.replace("%s", actin.district)
        let url = Settings.server + absolte_url
        let options = { method: 'GET'
                      , headers: Settings.request_headers
                      }

        const resp = await fetch(qurl, options)
        if (resp.status === 200) {
            const respjs = await resp.json()
            action.pharmacies = respjs.pharmacies
            next(action)
        }
    } catch (err) {
      console.error(err)
    }
}

export default store => next => action => {
    if (action.type == actions.fetchPharmaciesAction.type) {
        return fetchPharmacies(store, next, action)
    }

    return next(action)
}