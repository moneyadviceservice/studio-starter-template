export function isInsideIframe(): boolean {
  try {
    return window.top?.location.href !== window.location.href;
  } catch (err) {
    console.error('Error accessing window.top.location.href:', err);
    // window.top.location.href is not accessible for non same origin iframes
    return true;
  }
}
