/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSContentBlockSegmentedItem from "@carbon/ibmdotcom-web-components/es/components-react/content-block-segmented/content-block-segmented-item";
import DDSContentGroupHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-heading";
import DDSContentItemCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-copy";

import DDSImage from "@carbon/ibmdotcom-web-components/es/components-react/image/image";
import DDSTextCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/text-cta";

export default function ContentBlockSegmentedItem(content) {
  const {
    heading,
    copy,
    ctaText,
    ctaHref,
    ctaType,
    image,
    imageCaption,
    ctaIconPlacement,
  } = content?.fields || {};
  const { url } = image?.fields?.file || {};
  return (
    <DDSContentBlockSegmentedItem>
      <DDSContentGroupHeading>{heading}</DDSContentGroupHeading>
      <DDSContentItemCopy>{copy}</DDSContentItemCopy>
      {image && (
        <DDSImage
          slot="media"
          defaultSrc={url}
          heading={imageCaption}
        ></DDSImage>
      )}
      {ctaText && (
        <DDSTextCTA
          slot="footer"
          cta-type={ctaType}
          icon-placement={ctaIconPlacement}
          href={ctaHref}
        >
          {ctaText}
        </DDSTextCTA>
      )}
    </DDSContentBlockSegmentedItem>
  );
}
