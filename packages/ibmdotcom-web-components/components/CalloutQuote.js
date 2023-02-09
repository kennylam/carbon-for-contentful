/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20.js";
import DDSCalloutQuote from "@carbon/ibmdotcom-web-components/es/components-react/callout-quote/callout-quote";
import DDSCalloutLinkWithIcon from "@carbon/ibmdotcom-web-components/es/components-react/callout-quote/callout-link-with-icon";
import DDSQuoteSourceHeading from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote-source-heading";
import DDSQuoteSourceCopy from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote-source-copy";
import DDSQuoteSourceBottomCopy from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote-source-bottom-copy";

export default function CalloutQuote(content) {
  const {
    copy,
    linkHref,
    linkText,
    quoteMark,
    sourceHeading,
    sourceCopy,
    sourceBottomCopy,
  } = content?.fields || {};

  return (
    <DDSCalloutQuote mark-type={quoteMark}>
      {copy}
      <DDSQuoteSourceHeading>{sourceHeading}</DDSQuoteSourceHeading>
      <DDSQuoteSourceCopy>{sourceCopy}</DDSQuoteSourceCopy>
      <DDSQuoteSourceBottomCopy>{sourceBottomCopy}</DDSQuoteSourceBottomCopy>
      <DDSCalloutLinkWithIcon slot="footer" href={linkHref}>
        {linkText} <ArrowRight20 slot="icon"></ArrowRight20>
      </DDSCalloutLinkWithIcon>
    </DDSCalloutQuote>
  );
}
