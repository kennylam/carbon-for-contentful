/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20.js";
import DDSVideoCTAContainer from "@carbon/ibmdotcom-web-components/es/components-react/cta/video-cta-container";
import DDSCardInCard from "@carbon/ibmdotcom-web-components/es/components-react/card-in-card/card-in-card";
import DDSCardEyebrow from "@carbon/ibmdotcom-web-components/es/components-react/card/card-eyebrow";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";
import DDSCardInCardImage from "@carbon/ibmdotcom-web-components/es/components-react/card-in-card/card-in-card-image";
import DDSImageItem from "@carbon/ibmdotcom-web-components/es/components-react/image/image-item";
import DDSCardHeading from "@carbon/ibmdotcom-web-components/es/components-react/card/card-heading";

export default function CardInCard(content) {
  const { defaultSrc, eyebrow, heading, href, altText, video, videoId } =
    content?.fields;

  if (video) {
    return (
      <DDSVideoCTAContainer>
        <DDSCardInCard href={videoId} cta-type="video">
          <DDSCardEyebrow>{eyebrow}</DDSCardEyebrow>
          <DDSCardCTAFooter cta-type="video" href={videoId}></DDSCardCTAFooter>
        </DDSCardInCard>
      </DDSVideoCTAContainer>
    );
  }

  return (
    <DDSCardInCard href={href}>
      <DDSCardInCardImage>
        <DDSImageItem slot="image" alt={altText} default-src={defaultSrc} />
      </DDSCardInCardImage>
      {eyebrow && <DDSCardEyebrow>{eyebrow}</DDSCardEyebrow>}
      <DDSCardHeading>{heading}</DDSCardHeading>
      <DDSCardCTAFooter>
        <ArrowRight20 slot="icon" />
      </DDSCardCTAFooter>
    </DDSCardInCard>
  );
}
