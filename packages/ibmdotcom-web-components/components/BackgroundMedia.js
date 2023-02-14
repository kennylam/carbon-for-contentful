/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSBackgroundMedia from "@carbon/ibmdotcom-web-components/es/components-react/background-media/background-media";
import DDSImageItem from "@carbon/ibmdotcom-web-components/es/components-react/image/image-item";
import DDSVideoPlayerContainer from "@carbon/ibmdotcom-web-components/es/components-react/video-player/video-player-container";

export default function BackgroundMedia(content) {
  const {
    gradientDirection,
    mobilePosition,
    altText,
    defaultSrc,
    imageItems,
    opacity,
    videoId,
    slot,
  } = content?.fields || {};
  const { url } = defaultSrc?.fields?.file || {};

  return (
    <DDSBackgroundMedia
      gradient-direction={gradientDirection}
      mobile-position={mobilePosition}
      alt={altText}
      default-src={"https:" + url}
      opacity={opacity}
      slot={slot}
    >
      {!videoId &&
        imageItems.map((image, index) => {
          const { minWidth } = image.fields;
          const { url } = image.fields.image.fields.file;

          return (
            <DDSImageItem
              media={`(min-width: ${minWidth})`}
              srcset={"https:" + url}
              key={index}
            ></DDSImageItem>
          );
        })}

      {videoId && (
        <DDSVideoPlayerContainer
          video-id={videoId}
          background-mode={true}
        ></DDSVideoPlayerContainer>
      )}
    </DDSBackgroundMedia>
  );
}
