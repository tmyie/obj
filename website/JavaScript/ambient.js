(function (w) {

    /**
     * ambient Object
     * @namespace ambient
     * @version 0.0.1
     */
    w.ambient = w.ambient || {

        /**
         * Current Language from the Website
         * @type {string}
         * @global
         */
        Lang : 'en',

        /**
         * Main.Init call all functions you want ;)
         * @return void
         */
        init : function () {

            /**
             * Get Language from User
             */
            try {
                ambient.Lang = window.navigator.userLanguage || window.navigator.language;
            } catch (e) {
                if (Main.Debug) {
                    console.log(e);
                }
            }

            

            // Set a trigger
            Main.trigger();

        }

    };

})(window);


/**
 * Init Main JavaScript Object
 */
if (typeof(jQuery) === 'undefined') {
    console.log('jQuery Framework is required!');
} else {

    $(document).ready(ambient.init);

} // End of if