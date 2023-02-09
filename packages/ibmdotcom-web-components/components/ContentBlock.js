/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSContentBlock from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block.js";
import DDSContentBlockHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading";
import DDSContentBlockCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-copy";

const ComponentRenderer = dynamic(import("./ComponentRenderer"), {
  ssr: false,
});
const CardLinkCTA = dynamic(import("./CardLinkCTA"), { ssr: false });

export default function ContentBlock(content) {
  const { heading, copy, border, children, cta } = content?.fields || {};

  return (
    <DDSContentBlock complementary-style-scheme={border ? "with-border" : ""}>
      <DDSContentBlockHeading>{heading}</DDSContentBlockHeading>
      <DDSContentBlockCopy>{copy}</DDSContentBlockCopy>
      {children?.map((child, index) => {
        return <ComponentRenderer content={child} key={index} />;
      })}
      {cta && <CardLinkCTA {...cta} />}
    </DDSContentBlock>
  );
}
