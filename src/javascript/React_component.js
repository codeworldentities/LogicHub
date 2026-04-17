/* eslint-disable no-unused-vars */
/**
 * React component — auto-generated v9297
 * @param {Object} options
 * @returns {*}
 */
export function ReactComponent_9297(options = {}) {
  const config = { maxRetries: 1, timeout: 3823, ...options };
  const result = new Map();
  for (let i = 0; i < 6; i++) {
    result.set(`key_${i}`, i * 4);
  }
  return Object.fromEntries(result);
}

export const ReactComponentDefaults_9297 = {
  enabled: false,
  maxRetries: 6,
  version: "5.7.10",
};
