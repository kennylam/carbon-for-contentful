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
import DDSBackgroundMedia from "@carbon/ibmdotcom-web-components/es/components-react/background-media/background-media";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";
import DDSCardEyebrow from "@carbon/ibmdotcom-web-components/es/components-react/card/card-eyebrow";
import DDSCardGroup from "@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group";
import DDSCardGroupItem from "@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group-item";
import DDSCardHeading from "@carbon/ibmdotcom-web-components/es/components-react/card/card-heading";
import DDSCardSectionOffset from "@carbon/ibmdotcom-web-components/es/components-react/card-section-offset/card-section-offset";
import DDSContentBlockHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading";
import DDSTextCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/text-cta";

export default function CardSectionOffset(content) {
  const {
    alt,
    cards,
    cardsPerRow,
    ctaCopy,
    ctaType,
    defaultSrc,
    download,
    gradientDirection,
    heading,
    href,
    mobilePosition,
  } = content?.fields;

  return (
    <DDSVideoCTAContainer>
      <DDSCardSectionOffset>
        <DDSBackgroundMedia
          gradient-direction={gradientDirection}
          mobile-position={mobilePosition}
          alt={alt}
          default-src={defaultSrc}
        ></DDSBackgroundMedia>
        <DDSContentBlockHeading slot="heading">
          {heading}
        </DDSContentBlockHeading>
        <DDSTextCTA
          slot="action"
          icon-placement="right"
          cta-type={ctaType}
          href={href}
          download={download}
        >
          {ctaType === "video" ? undefined : { ctaCopy }}
        </DDSTextCTA>
        <DDSCardGroup slot="card-group" cards-per-row={cardsPerRow}>
          {cards.map((card, index) => {
            const { eyebrow, heading, href, copy } = card?.fields;
            return (
              <DDSCardGroupItem href={href} key={index}>
                <DDSCardEyebrow>{eyebrow}</DDSCardEyebrow>
                <DDSCardHeading slot="heading">{heading}</DDSCardHeading>
                <p>{copy}</p>
                <DDSCardCTAFooter slot="footer">
                  <ArrowRight20 slot="icon" />
                </DDSCardCTAFooter>
              </DDSCardGroupItem>
            );
          })}
        </DDSCardGroup>
      </DDSCardSectionOffset>
    </DDSVideoCTAContainer>
  );
}
