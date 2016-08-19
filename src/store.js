'use strict'

import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducer'
import fetchDistricts from './middleware/fetch_districts'
import fetchPharmacies from './middleware/fetch_pharmacies'


export function makeStore() {
    const createUsingMiddleware = applyMiddleware(
        fetchPharmacies,
        fetchDistricts
    )(createStore)
    return createUsingMiddleware(reducer)
}