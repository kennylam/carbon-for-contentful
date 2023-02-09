/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default async function handler(req, res) {
  const { slug } = req.query;

  res.setPreviewData({});
  res.redirect(`/examples/${slug}`);
}
