/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSContentBlockMedia from "@carbon/ibmdotcom-web-components/es/components-react/content-block-media/content-block-media";
import DDSContentBlockHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading";
import DDSContentBlockCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-copy";
import DDSContentBlockMediaContent from "@carbon/ibmdotcom-web-components/es/components-react/content-block-media/content-block-media-content";
import DDSContentGroupHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-heading";
import DDSImage from "@carbon/ibmdotcom-web-components/es/components-react/image/image";
import DDSImageItem from "@carbon/ibmdotcom-web-components/es/components-react/image/image-item";
import DDSContentItem from "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item";
import DDSContentItemHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-heading";
import DDSContentItemCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-copy";
import DDSCardLinkCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-link-cta";
import DDSCardLinkHeading from "@carbon/ibmdotcom-web-components/es/components-react/card-link/card-link-heading";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";
import DDSFeatureCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/feature-cta";
import DDSCardHeading from "@carbon/ibmdotcom-web-components/es/components-react/card/card-heading";
import DDSFeatureCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/feature-cta-footer";
import DDSLinkList from "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list";
import DDSLinkListHeading from "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list-heading";
import DDSLinkListItemCardCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/link-list-item-card-cta";

export default function ContentBlockMedia(content) {
  const { blockHeading, simpleGroupHeading, featureCard, linkList, border } =
    content?.fields || {};

  return (
    <DDSContentBlockMedia border={border}>
      <DDSContentBlockHeading>{blockHeading}</DDSContentBlockHeading>
      <DDSContentBlockCopy size="md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
        ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at
        elit sollicitudin, sodales nulla quis, consequat libero. Phasellus at
        elit sollicitudin, sodales nulla quis, consequat libero.
      </DDSContentBlockCopy>
      <DDSContentBlockMediaContent>
        <DDSContentGroupHeading>{simpleGroupHeading}</DDSContentGroupHeading>
      </DDSContentBlockMediaContent>
    </DDSContentBlockMedia>
  );
}
