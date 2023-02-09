/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as contentful from "../../utils/contentful";

export default function Pages(props) {
  const { body } = props.page?.fields;

  return (
    <div className="bx--universal-banner-layout-container">
      {body.content.map((_contentElement, index) => (
        <p key={index}>{_contentElement.content[0].value}</p>
      ))}
    </div>
  );
}

export async function getStaticPaths() {
  const pages = await contentful.client.getEntries({
    content_type: "blogPost",
  });

  const paths = pages.items.map((product) => ({
    params: {
      slug: product.fields.slug,
    },
  }));

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  // Get data from headless CMS
  const client = context.preview ? contentful.previewClient : contentful.client;

  const query = {
    limit: 1,
    include: 10,
    "fields.slug": context.params.slug,
    content_type: "blogPost",
  };

  const res = await client.getEntries(query);

  return {
    props: {
      preview: context.preview || false,
      page: res.items[0],
    },
  };
}
