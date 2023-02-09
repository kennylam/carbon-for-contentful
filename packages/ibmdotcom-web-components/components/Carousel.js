/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSCarousel from "@carbon/ibmdotcom-web-components/es/components-react/carousel/carousel";

const Card = dynamic(import("./Card"), { ssr: false });

export default function Carousel(content) {
  const { cards } = content?.fields || {};

  return (
    <DDSCarousel>
      {cards.map((card, index) => {
        return <Card {...card} key={index} />;
      })}
    </DDSCarousel>
  );
}
