import React from "react";
import { MixpanelApi } from "../api/mixpanel-api";
import { GaApi } from "../api/ga-api";
import YouTubeEmbed from "../components/YouTubeEmbed";
import styled from "styled-components";
import { useEffect } from "react";

const VideoContainer = styled.div`
  margin-bottom: 20px;
`;

export default () => {
  useEffect(() => {
    GaApi.reportPageView();
    MixpanelApi.reportPageView("Videos");
  }, []);

  return (
    <div>
      <VideoContainer>
        <YouTubeEmbed videoId="IE7podYmyIw" videoTitle="Today" />
      </VideoContainer>
      <VideoContainer>
        <YouTubeEmbed videoId="-dlKXcsNRMM" videoTitle="Valentine's Day" />
      </VideoContainer>
      <VideoContainer>
        <YouTubeEmbed videoId="0_aQnjeGj10" videoTitle="Places" />
      </VideoContainer>
    </div>
  );
};
