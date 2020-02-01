import React, { useState } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { MixpanelApi } from '../api/mixpanel-api';

const Container = styled.div`
max-width:980px;
padding:0 24px;
margin:0 auto;

`
const Aspect = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 42%;
    position: relative;
`
const AspectInner = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    iframe {
        display:block;
    }

    > div {
        width: 100%;
        height: 100%;
    }
`

const options = {
    width: '100%',
    height: '100%',
    playerVars: {
        controls: 0,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
        html5: 1,
        showinfo: 0
    }
}
export default ({ videoId, videoTitle }) => {
    const [isReady, setIsReady] = useState(false);

    const _onPlay = () => {
        MixpanelApi.reportAction(`Played YouTube Video ${videoTitle}`)
    }
    const _onPause = () => {
        MixpanelApi.reportAction(`Paused YouTube Video ${videoTitle}`)
    }
    const _onEnd = () => {
        MixpanelApi.reportAction(`YouTube Video ${videoTitle} Ended`)
    }
    return (
        <Container>
            <Aspect>
                <AspectInner>
                    {!isReady && 'loading video...'}
                    <YouTube
                        opts={options}
                        videoId={videoId}
                        onPlay={_onPlay}
                        onPause={_onPause}
                        _onEnd={_onEnd}
                        onReady={setIsReady}
                    />
                </AspectInner>
            </Aspect>
        </Container>
    )
}