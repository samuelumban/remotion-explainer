import React from "react";
import { Composition } from "remotion";
import { BGCity, BG_CITY_HEIGHT, BG_CITY_WIDTH } from "./BGCity";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="BGCity"
      component={BGCity}
      durationInFrames={240}
      fps={24}
      width={BG_CITY_WIDTH}
      height={BG_CITY_HEIGHT}
    />
  );
};
