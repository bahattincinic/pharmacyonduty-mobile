'use strict'

import * as actions from '../actions'
import * as actionCreators from '../action_creators'
import Settings from '../settings'


async function fetchPharmacies(store, next, action) {
  try {
    let absolte_url = Settings.endpoints.pharmacies.replace("%s", action.district)
    let url = Settings.server + absolte_url
    let options = {
      method: 'GET',
      headers: Settings.request_headers
    }

    const resp = await fetch(url, options)
    if (resp.status === 200) {
      const respjs = await resp.json()
      action.pharmacies = respjs.pharmacies
      action.district = respjs.name
      next(action)

      await store.dispatch(actionCreators.navigate(action.route))
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
