function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'nl',
        includedLanguages: 'en,es,fr,de,zh,ja,nl',  // Add more languages as needed
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

window.addEventListener('load', function() {
    // Add a MutationObserver to detect changes in the DOM
    const observer = new MutationObserver(() => {
        const iframe = document.querySelector('body > iframe');
        if (iframe) {
            iframe.onload = function() {
                // Access the iframe's document
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

                // Create a style element
                // const style = iframeDoc.createElement('style');
                // style.textContent = `
                //     body {
                //         font-family: Arial, sans-serif;
                //         background-color: brown;
                //         color: blue !important;
                //     }

                //     .VIpgJd-ZVi9od-vH1Gmf-ibnC6b div .text {
                //         color: red;
                //     }
                // `;
                const style = iframeDoc.createElement('link');
                style.setAttribute('rel', 'stylesheet')
                style.setAttribute('href', './css/google-translate-dropdown.css')

                // Append the style element to the iframe's head
                iframeDoc.head.appendChild(style);
            };

            // If the iframe is already loaded, manually trigger the onload event
            if (iframe.contentDocument.readyState === 'complete') {
                iframe.onload();
            }

            // Disconnect the observer once the iframe is found
            observer.disconnect();
        }
    });

    // Start observing the document body for added child nodes (subtree: true)
    observer.observe(document.body, { childList: true, subtree: true });
});