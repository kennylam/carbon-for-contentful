/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSTableOfContents from "@carbon/ibmdotcom-web-components/es/components-react/table-of-contents/table-of-contents.js";
import ComponentRenderer from "./ComponentRenderer";

export default function Card(content) {
  const { contentBody } = content?.fields || {};

  return (
    <DDSTableOfContents>
      {contentBody.map((section) => {
        const { sectionHeading, sectionContent } = section?.fields;
        return (
          <>
            <a name={sectionHeading} data-title={sectionHeading}></a>
            <ComponentRenderer content={sectionContent} />
          </>
        );
      })}
    </DDSTableOfContents>
  );
}
