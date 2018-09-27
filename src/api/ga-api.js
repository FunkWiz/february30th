import ReactGA from 'react-ga'

const trackingId = 'UA-126634084-1';

const GaApi = {
    init: () => {
        ReactGA.initialize(trackingId)
    },
    reportPageView: () => {
        if (typeof window !== 'undefined') {
            ReactGA.pageview(`${window.location.pathname}${window.location.search}`)
        }
    }
}

export {
    GaApi
};