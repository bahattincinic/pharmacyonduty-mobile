'use strict'

import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import fetchDistrictsMiddleware from './middleware/fetch_districts'
import fetchPharmaciesMiddleware from './middleware/fetch_pharmacies'
import navigateMiddleware from './middleware/navigate'


export function makeStore() {
  const createUsingMiddleware = applyMiddleware(
    fetchPharmaciesMiddleware,
    fetchDistrictsMiddleware,
    navigateMiddleware
  )( createStore )
  return createUsingMiddleware( reducer )
}
