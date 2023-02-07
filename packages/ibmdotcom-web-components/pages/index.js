/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
const DDSLeadspace = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace"
  ),
  { ssr: false }
);
const DDSButtonGroup = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group"
  ),
  { ssr: false }
);
const DDSButtonGroupItem = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group-item"
  ),
  { ssr: false }
);
const DDSContentBlockSimple = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-block-simple/content-block-simple"
  ),
  { ssr: false }
);
const DDSContentBlockHeading = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading"
  ),
  { ssr: false }
);
const DDSContentBlockCopy = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-copy"
  ),
  { ssr: false }
);
const DDSTextCTA = dynamic(
  import("@carbon/ibmdotcom-web-components/es/components-react/cta/text-cta"),
  { ssr: false }
);
const DDSLeadspaceImage = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace-image"
  ),
  { ssr: false }
);
const DDSLeadspaceHeading = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace-heading"
  ),
  { ssr: false }
);
const DDSImageItem = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/image/image-item"
  ),
  { ssr: false }
);
const leadspaceImg =
  "https://carbon-design-system.github.io/carbon-for-ibm-dotcom/canary/web-components/02fd8c264bac2e2e8b0841a936484b5c.jpg";
const copy = `Many organizations are engaging in open source technology to optimize their Linux environment.
  The ability to integrate open systems with traditional or hybrid cloud IT infrastructure has a profound effect
  on driving innovation and a growing number of IT professionals are actively participating in open source
  communities as a way to stay at the forefront of development.`;

export default function Recipes({ page }) {
  return (
    <div>
      <div className="dds-theme-zone-g100">
        <DDSLeadspace
          size="medium"
          gradient-style-scheme=""
          alt="Image alt text"
          default-src={leadspaceImg}
          data-autoid="dds--leadspace"
        >
          <DDSLeadspaceHeading role="heading" aria-level="1" slot="heading">
            Linux servers and operating systems
          </DDSLeadspaceHeading>
          Optimize your IT infrastructure — on-premises and in the cloud — with
          the flexibility and control that comes with open source development
          <DDSButtonGroup
            slot="action"
            role="list"
            style={{ "--dds--button-group--item-count": 2 }}
          >
            <DDSButtonGroupItem
              href="https://example.com"
              role="listitem"
              kind="tertiary"
            >
              Try it on premises
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                slot="icon"
              >
                <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z" />
              </svg>
            </DDSButtonGroupItem>

            <DDSButtonGroupItem
              href="https://example.com"
              role="listitem"
              kind="primary"
            >
              Try it on cloud
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                slot="icon"
              >
                <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z" />
              </svg>
            </DDSButtonGroupItem>
          </DDSButtonGroup>
          <DDSLeadspaceImage
            slot="image"
            alt="Image alt text"
            default-src={leadspaceImg}
            data-autoid="dds--image"
          >
            <DDSImageItem
              media="(min-width: 672px)"
              srcset={leadspaceImg}
            ></DDSImageItem>

            <DDSImageItem
              media="(min-width: 0)"
              srcset={leadspaceImg}
            ></DDSImageItem>
          </DDSLeadspaceImage>
        </DDSLeadspace>
      </div>

      <main>
        <div className="bx--grid bx--grid--narrow">
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-12 bx--offset-lg-4">
              <DDSContentBlockSimple complementary-style-scheme="with-border">
                <DDSContentBlockHeading>
                  Flexibility and control are the key to open source Linux
                  development
                </DDSContentBlockHeading>
                <DDSContentBlockCopy allowHTML="false" size="sm">
                  {copy}
                </DDSContentBlockCopy>
                <DDSTextCTA
                  slot="footer"
                  cta-type="local"
                  href="https://example.com"
                >
                  Explore supply chain consulting services
                </DDSTextCTA>
              </DDSContentBlockSimple>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
