/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSCardGroupItem from "@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group-item";
import DDSCardEyebrow from "@carbon/ibmdotcom-web-components/es/components-react/card/card-eyebrow";
import DDSCardHeading from "@carbon/ibmdotcom-web-components/es/components-react/card/card-heading";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";
import DDSImage from "@carbon/ibmdotcom-web-components/es/components-react/image/image";
import DDSContentBlockCards from "@carbon/ibmdotcom-web-components/es/components-react/content-block-cards/content-block-cards";
import DDSContentBlockHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading";
import DDSCardGroup from "@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group";
import DDSCardLinkCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-link-cta";
import DDSCardLinkHeading from "@carbon/ibmdotcom-web-components/es/components-react/card-link/card-link-heading";

export default function ContentBlockCards(content) {
  const { cards, heading, ctaCopy, ctaType, href } = content?.fields || {};

  return (
    <DDSContentBlockCards>
      <DDSContentBlockHeading>{heading}</DDSContentBlockHeading>
      <DDSCardGroup>
        {cards.map((card, index) => {
          const { eyebrow, heading, href, copy, altText, image, type } =
            card?.fields;
          const { url } = image?.fields?.file || {};

          return (
            <DDSCardGroupItem cta-type={type} href={href} key={index}>
              {image && (
                <DDSImage
                  slot="image"
                  alt={altText}
                  defaultSrc={"https:" + url}
                />
              )}
              {eyebrow && <DDSCardEyebrow>{eyebrow}</DDSCardEyebrow>}
              <DDSCardHeading>{heading}</DDSCardHeading>
              <p>{copy}</p>
              <DDSCardCTAFooter slot="footer"></DDSCardCTAFooter>
            </DDSCardGroupItem>
          );
        })}
      </DDSCardGroup>
      <DDSCardLinkCTA
        slot="footer"
        cta-type={ctaType || null}
        href={href || null}
      >
        <DDSCardLinkHeading>{ctaCopy}</DDSCardLinkHeading>
        <DDSCardCTAFooter></DDSCardCTAFooter>
      </DDSCardLinkCTA>
    </DDSContentBlockCards>
  );
}
