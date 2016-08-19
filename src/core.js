'use strict'

import {Map} from 'immutable';


export const InitialState = Map(
    {
        districts: [],
        pharmacies: []
    }
)


export function fetchDistricts(state, districts) {
    return state.set('districts', districts)
}

export function fetchPharmacies(state, pharmacies) {
    return state.set('pharmacies', pharmacies)
}