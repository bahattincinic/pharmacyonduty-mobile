'use strict'

import * as actions from '../actions'
import * as actionCreators from '../action_creators'
import Settings from '../settings'


async function fetchDistricts(store, next, action) {
  try {
    let url = Settings.server + Settings.endpoints.districts
    let options = {
      method: 'GET',
      headers: Settings.request_headers
    }

    const resp = await fetch(url, options)
    if (resp.status === 200) {
      const respjs = await resp.json()
      action.districts = respjs.districts
      next(action)
    }
  } catch (err) {
    console.error(err)
  }
}

export default store => next => action => {
  if (action.type == actions.fetchDistrictsAction.type) {
    return fetchDistricts(store, next, action)
  }
  return next(action)
}
