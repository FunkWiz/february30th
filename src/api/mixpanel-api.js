import mixpanel from 'mixpanel-browser'

const token = '6f96afe18eb7d3385fbb60e257eefeb0';

const _track = (event, description) => {
    mixpanel.track(event, {
        description
    })
}

const MixpanelApi = {
    init: () => {
        mixpanel.init(token);
    },
    reportPageView: page => {
        _track('Page View', page);
    },
    reportClick: description => {
        _track('Click Event', description);
    }
}

export {
    MixpanelApi
};