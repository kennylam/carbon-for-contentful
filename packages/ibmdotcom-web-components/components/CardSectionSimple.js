/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSCardGroupItem from "@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group-item";
import DDSImage from "@carbon/ibmdotcom-web-components/es/components-react/image/image";
import DDSCardEyebrow from "@carbon/ibmdotcom-web-components/es/components-react/card/card-eyebrow";
import DDSCardHeading from "@carbon/ibmdotcom-web-components/es/components-react/card/card-heading";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";
import DDSCardSectionSimple from "@carbon/ibmdotcom-web-components/es/components-react/card-section-simple/card-section-simple";
import DDSContentSectionHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section-heading";
import DDSCardGroup from "@carbon/ibmdotcom-web-components/es/components-react/card-group/card-group";

export default function CardSectionSimple(content) {
  const { cards, heading, cta } = content?.fields || {};

  return (
    <DDSCardSectionSimple>
      <DDSContentSectionHeading>{heading}</DDSContentSectionHeading>
      <DDSCardGroup>
        {cards.map((card, index) => {
          const { eyebrow, heading, href, copy, altText, image } = card?.fields;
          <DDSCardGroupItem href={href} cta-type="local">
            {image ? (
              <DDSImage
                slot="image"
                alt={altText}
                default-src={card.defaultSrc}
                key={index}
              />
            ) : (
              ""
            )}
            <DDSCardEyebrow>{eyebrow}</DDSCardEyebrow>
            <DDSCardHeading>{heading}</DDSCardHeading>
            <p>{copy}</p>
            <DDSCardCTAFooter slot="footer"></DDSCardCTAFooter>
          </DDSCardGroupItem>;
        })}
        {cta ? (
          <DDSCardGroupItem
            href={cta.href}
            color-scheme="inverse"
            cta-type="local"
          >
            <DDSCardHeading>{cta.heading}</DDSCardHeading>
            <DDSCardCTAFooter
              slot="footer"
              color-scheme="inverse"
            ></DDSCardCTAFooter>
          </DDSCardGroupItem>
        ) : (
          ""
        )}
      </DDSCardGroup>
    </DDSCardSectionSimple>
  );
}
