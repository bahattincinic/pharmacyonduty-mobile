'use strict'

import {Map} from 'immutable';


export const InitialState = Map(
    {
        districts: [],
        pharmacies: [],
        active_district: ""
    }
)


export function fetchDistricts(state, districts) {
    return state.set('districts', districts)
}

export function fetchPharmacies(state, pharmacies, district) {
    return state.set('pharmacies', pharmacies).set('active_district', district)
}