'use strict'

import * as actions from './actions'


export const navigate = (route) => (
    { type: actions.navigateAction.type
    , route: route
    }
)


export const fetchDistricts = () => (
    { type: actions.fetchDistrictsAction.type
    }
)

export const fetchPharmacies = (district) => (
    { type: actions.fetchDistrictsAction.type
    , district: district
    }
)