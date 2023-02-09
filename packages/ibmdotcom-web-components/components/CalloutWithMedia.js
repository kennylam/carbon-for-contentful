/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSCalloutWithMedia from "@carbon/ibmdotcom-web-components/es/components-react/callout-with-media/callout-with-media";
import DDSContentBlockHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading";
import DDSCalloutWithMediaCopy from "@carbon/ibmdotcom-web-components/es/components-react/callout-with-media/callout-with-media-copy";
import DDSCalloutWithMediaImage from "@carbon/ibmdotcom-web-components/es/components-react/callout-with-media/callout-with-media-image";
import DDSCalloutWithMediaVideo from "@carbon/ibmdotcom-web-components/es/components-react/callout-with-media/callout-with-media-video";

export default function CalloutWithMedia(content) {
  const {
    copy,
    copySize,
    heading,
    mediaType,
    defaultSrc,
    imageAlt,
    imageHeading,
    videoId,
  } = content?.fields || {};

  return (
    <DDSCalloutWithMedia>
      <DDSContentBlockHeading>{heading}</DDSContentBlockHeading>
      <DDSCalloutWithMediaCopy size={copySize}>{copy}</DDSCalloutWithMediaCopy>
      {(mediaType === "image" && (
        <DDSCalloutWithMediaImage
          alt={imageAlt}
          default-src={defaultSrc}
          heading={imageHeading}
        ></DDSCalloutWithMediaImage>
      )) ||
        (mediaType === "video" && (
          <DDSCalloutWithMediaVideo
            video-id={videoId}
          ></DDSCalloutWithMediaVideo>
        ))}
    </DDSCalloutWithMedia>
  );
}
