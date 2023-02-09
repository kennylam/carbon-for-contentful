/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSButtonGroup from "@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group";
import DDSButtonGroupItem from "@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group-item";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20.js";

export default function ButtonGroup(content) {
  const { buttons } = content?.fields || {};

  return (
    <DDSButtonGroup>
      {buttons.map((button) => {
        <DDSButtonGroupItem href={button.fields.href}>
          <ArrowRight20 /> {button.fields.text}
        </DDSButtonGroupItem>;
      })}
    </DDSButtonGroup>
  );
}
