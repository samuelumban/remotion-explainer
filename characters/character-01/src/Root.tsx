import React from "react";
import {AbsoluteFill, Composition, Folder, Still} from "remotion";
import {MainScene, MAIN_META, TextureMANNORMIESvg, TEXTURE_MANNORMIE_SIZE} from "./library";
import {CATALOG} from "./library/catalog";

const Scene: React.FC = () => (
  <AbsoluteFill>
    <MainScene />
  </AbsoluteFill>
);

const {width, height, fps, durationInFrames} = MAIN_META;
const folders = Array.from(new Set(CATALOG.map((c) => c.folder)));

export const RemotionRoot: React.FC = () => (
  <>
    {/* Full scene as video and as a single frame */}
    <Composition id="Main" component={Scene} width={width} height={height} fps={fps} durationInFrames={durationInFrames} />
    <Still id="MainStill" component={Scene} width={width} height={height} />

    {/* Reference exports: transparent background */}
    <Still id="CharacterOnly" width={width} height={height} component={() => (<AbsoluteFill><MainScene background={null} /></AbsoluteFill>)} />
    <Still id="TextureSheet" width={TEXTURE_MANNORMIE_SIZE.width} height={TEXTURE_MANNORMIE_SIZE.height} component={() => (<AbsoluteFill><TextureMANNORMIESvg /></AbsoluteFill>)} />

    {/* Component catalog: one Still per library component, grouped by AE folder */}
    {folders.map((folder) => (
      <Folder key={folder} name={folder}>
        {CATALOG.filter((c) => c.folder === folder).map(({id, Component, width: w, height: h}) => (
          <Still
            key={id}
            id={"Catalog-" + id}
            width={w}
            height={h}
            component={() => (
              <AbsoluteFill style={{backgroundColor: "#d3eef5"}}>
                <Component />
              </AbsoluteFill>
            )}
          />
        ))}
      </Folder>
    ))}
  </>
);
