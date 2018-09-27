import ReactGA from 'react-ga'

const trackingId = 'UA-126634084-1';

const GaApi = {
    init: () => {
        ReactGA.initialize(trackingId)
    },
    reportPageView: () => {
        ReactGA.pageview(`${window.location.pathname}${window.location.search}`)
    }
}

export {
    GaApi
};