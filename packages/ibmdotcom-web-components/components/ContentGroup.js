/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSContentGroup from "@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group";
import DDSContentGroupHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-heading";
import DDSContentGroupCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-copy";

const ComponentRenderer = dynamic(import("./ComponentRenderer"), {
  ssr: false,
});
const CardLinkCTA = dynamic(import("./CardLinkCTA"), { ssr: false });

export default function ContentGroup(content) {
  const { heading, copy, children, cta } = content?.fields || {};
  return (
    <DDSContentGroup>
      <DDSContentGroupHeading>{heading}</DDSContentGroupHeading>
      <DDSContentGroupCopy>{copy}</DDSContentGroupCopy>
      {children?.map((child) => {
        return <ComponentRenderer content={child} />;
      })}
      {cta && <CardLinkCTA {...cta} />}
    </DDSContentGroup>
  );
}
