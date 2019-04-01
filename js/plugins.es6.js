require('@babel/polyfill');

(() => {
  let method;
  const noop = () => {};
  const methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];

  let length = methods.length;
  const console = (window.console || {});

  while (length--) {
    method = methods[length];

    // this code will checks 
    //  where the method doesn't exist
    if (!!!console[method]) {
      console[method] = noop;
    }
  }
})();

