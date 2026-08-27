import React from 'react';
import { Composition } from 'remotion';
import CinematicShowreel from './CinematicShowreel';
import IntervueAIMotion from './IntervueAIMotion';
import AffiliateMotion from './AffiliateMotion';
import BrandMotion from './BrandMotion';

export function RemotionRoot() {
  return (
    <>
      <Composition
        id="CinematicShowreel"
        component={CinematicShowreel}
        durationInFrames={450}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="IntervueAIMotion"
        component={IntervueAIMotion}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AffiliateMotion"
        component={AffiliateMotion}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="BrandMotion"
        component={BrandMotion}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
}
