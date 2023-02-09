/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import * as contentful from "../../utils/contentful";

const ComponentRenderer = dynamic(
  import("../../components/ComponentRenderer"),
  { ssr: false }
);

export default function Pages(props) {
  const { body } = props.page?.fields;

  return (
    <div className="recipe-list">
      <ComponentRenderer components={body} />
    </div>
  );
}

export async function getStaticPaths() {
  const pages = await contentful.client.getEntries({
    content_type: "page",
  });

  const paths = pages.items.map((product) => ({
    params: {
      slug: product.fields.slug,
    },
  }));

  console.log("paths: ", paths);

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  console.log("context: ", context);
  // Get data from headless CMS
  const client = context.preview ? contentful.previewClient : contentful.client;

  const query = {
    limit: 1,
    include: 10,
    "fields.slug": context.params.slug,
    content_type: "page",
  };

  const res = await client.getEntries(query);

  return {
    props: {
      preview: context.preview || false,
      page: res.items[0],
    },
  };
}
