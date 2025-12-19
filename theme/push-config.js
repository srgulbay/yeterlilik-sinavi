// Cloudflare Workers Web Push config.
// 1) Deploy the worker (see README).
// 2) Paste your values below.
(function () {
  // Worker URL (wrangler deploy -> https://<name>.<subdomain>.workers.dev)
  const workerUrl = '';

  // VAPID public key (base64url), generated for your worker (scripts/generate-vapid.cjs)
  const publicKey = '';

  try {
    if (typeof window !== 'undefined') {
      window.CF_PUSH_WORKER_URL = workerUrl;
      window.CF_WEBPUSH_PUBLIC_KEY = publicKey;
    }
  } catch (_) {
    // ignore
  }
})();
