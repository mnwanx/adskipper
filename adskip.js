const clear = (() => {

    const defined = v => v !== null && v !== undefined;
    const timeout = setInterval(() => {

        const ad = [...document.querySelectorAll('.ad-showing')][0];
        const skip_button = document.querySelector(".ytp-ad-skip-button");
        if (defined(ad)) {
            const video = document.querySelector('video');
            if (defined(video)) {
                video.currentTime = video.duration;
                if (skip_button != undefined)    {
                    skip_button.click();
                }
            }
        }
  

    }, 1000);
    return function() {

      clearTimeout(timeout);
    }
})();
