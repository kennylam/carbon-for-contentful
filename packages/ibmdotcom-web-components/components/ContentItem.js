/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSContentItem from "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item";
import DDSContentItemHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-heading";
import DDSContentItemCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-copy";

import DDSTextCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/text-cta";

const ComponentRenderer = dynamic(import("./ComponentRenderer"), {
  ssr: false,
});
const CardLinkCTA = dynamic(import("./CardLinkCTA"), { ssr: false });

export default function ContentItem(content) {
  const { heading, copy, ctaText, ctaHref, ctaType } = content?.fields || {};
  return (
    <DDSContentItem>
      <DDSContentItemHeading>{heading}</DDSContentItemHeading>
      <DDSContentItemCopy>{copy}</DDSContentItemCopy>
      <DDSTextCTA slot="footer" cta-type={ctaType} href={ctaHref}>
        {ctaText}
      </DDSTextCTA>
    </DDSContentItem>
  );
}
