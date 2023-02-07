/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSContentSection from "@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section";
import DDSContentSectionHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section-heading.js";

const CardGroup = dynamic(import("./CardGroup"), { ssr: false });

export default function CardSection(content) {
  const { heading, cardGroup } = content?.fields || {};
  return (
    <DDSContentSection>
      <DDSContentSectionHeading>{heading}</DDSContentSectionHeading>
      <CardGroup {...cardGroup} />
    </DDSContentSection>
  );
}
