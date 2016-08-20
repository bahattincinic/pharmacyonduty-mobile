'use strict'

import * as actions from './actions'
import * as core from './core'


export function reducer( state = core.InitialState, action ) {
  switch (action.type) {
    case actions.fetchDistrictsAction.type:
      return core.fetchDistricts( state, action.districts )
    case actions.fetchPharmaciesAction.type:
      return core.fetchPharmacies( state, action.pharmacies, action.district )
  }
  return state
}
