/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSContentBlockHorizontal from "@carbon/ibmdotcom-web-components/es/components-react/content-block-horizontal/content-block-horizontal";
import DDSContentBlockHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading";
import DDSContentItemHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-heading";
import DDSContentItemHorizontal from "@carbon/ibmdotcom-web-components/es/components-react/content-item-horizontal/content-item-horizontal";
import DDSContentItemHorizontalEyebrow from "@carbon/ibmdotcom-web-components/es/components-react/content-item-horizontal/content-item-horizontal-eyebrow";
import DDSContentItemHorizontalCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-item-horizontal/content-item-horizontal-copy";
import DDSLinkList from "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list";
import DDSLinkListItemCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/link-list-item-cta";

export default function ContentBlockHorizontal(content) {
  const { border, heading, items } = content?.fields || {};

  return (
    <DDSContentBlockHorizontal border={border}>
      <DDSContentBlockHeading>{heading}</DDSContentBlockHeading>
      {items.map((item, index) => {
        const { eyebrow, heading, copy, cta } = item?.fields || {};
        return (
          <DDSContentItemHorizontal key={index}>
            <DDSContentItemHorizontalEyebrow>
              {eyebrow}
            </DDSContentItemHorizontalEyebrow>
            <DDSContentItemHeading>{heading}</DDSContentItemHeading>
            <DDSContentItemHorizontalCopy>{copy}</DDSContentItemHorizontalCopy>
            <DDSLinkList slot="footer" type="vertical">
              {cta.map((link, index) => {
                const { type, href, iconPlacement, linkText } =
                  link?.fields || {};
                return (
                  <DDSLinkListItemCTA
                    icon-placement={iconPlacement}
                    href={href}
                    cta-type={type}
                    key={index}
                  >
                    {linkText}
                  </DDSLinkListItemCTA>
                );
              })}
            </DDSLinkList>
          </DDSContentItemHorizontal>
        );
      })}
    </DDSContentBlockHorizontal>
  );
}
