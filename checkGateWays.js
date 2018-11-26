const gateways = require('./gateways/gateways.json')
keys = Object.keys(gateways['services']);

/**
 * function to check true gateway
 * @param {string} service 
 */
const search = (service) => {
    if (keys.indexOf(service) !== -1) {
        return true
    } else {
        return false
    }
}

module.exports = search

