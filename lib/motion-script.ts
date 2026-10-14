/** Server-safe: inline script setting <html data-motion> before first paint. */
export const MOTION_STORAGE_KEY = 'ws-motion'

export const MOTION_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('${MOTION_STORAGE_KEY}');var m=s==='on'||s==='reduced'?s:(window.matchMedia('(prefers-reduced-motion: reduce)').matches?'reduced':'on');document.documentElement.dataset.motion=m;}catch(e){document.documentElement.dataset.motion='on';}})();`
