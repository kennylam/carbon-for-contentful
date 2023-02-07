/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSCardLinkCTA from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-link-cta";
import DDSCardLinkHeading from "@carbon/ibmdotcom-web-components/es/components-react/card-link/card-link-heading";
import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";

export default function CardLinkCTA(content) {
  const { ctaType, href, heading } = content?.fields;

  return (
    <DDSCardLinkCTA slot="footer" cta-type={ctaType} href={href}>
      <DDSCardLinkHeading>{heading}</DDSCardLinkHeading>
      <DDSCardCTAFooter></DDSCardCTAFooter>
    </DDSCardLinkCTA>
  );
}
