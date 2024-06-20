class Youverse {

   /**
    * @param {String} url: Endpoint request 
    * @param {Boolean} isModal: Presentation type -> Set false for inline or true for modal process
    */
   constructor(url, isModal = false) {

      if (!/^https?:\/\/\S+$/.test(url)) {
         throw new Error('The provided URL is invalid.');
      }

      this.url = url;
      this.modal = isModal;
      this.successFunction = null;
      this.errorFunction = null;
      this.user = null;
      this.showModal = false;
      this.isNewUser = null;
      this.payload = null;
   }

   /**
    * Start application and load dependencies
    */
   start() {
      this.loadDependencies();
   }

   /**
    * Set Success Function
    * @param {Function} func
    */
   setSuccessFunction(func) {
      this.successFunction = func;
   }

   /**
    * Set Error Function
    * @param {Function} func
    */
   setErrorFunction(func) {
      this.errorFunction = func;
   }

   /**
    * Load Dependencies
    */
   loadDependencies() {
      let load = document.createElement("script");
      load.type = "text/javascript";
      load.setAttribute("src", "https://cdn.jsdelivr.net/gh/dev-yoonik/youverse-passwordless-web@latest/js/dist/app.js");
      document.head.appendChild(load);
   }

   /**
    * Get url   
    * @returns {String} - url 
    */
   getUrl() {
      return this.url;
   }

   /**
    * Set Url   
    * @param {String} url: URL to perform POST request after selfie
    */
   setUrl(url) {
      this.url = url;
   }

   /**
    * Get User   
    * @returns {String} - url 
    */
   getUser() {
      return this.user;
   }

   /**
    * Set User   
    * @param {String} user: User Id
    */
   setUser(user, isNewUser = false) {
      this.user = user;
      this.isNewUser = isNewUser;
   }

   /**
    * Set New User toggle
    * @param {Boolean} status
    */
   setNewUserToggle(status) {
      this.isNewUser = status;
   }

   /**
    * Get New User toggle
    * @returns {Boolean} - The new user toggle status
    */
   getNewUserToggle() {
      return this.isNewUser
   }


   runSuccess(response) {
      try {
         typeof this.successFunction === 'function' && this.successFunction(response);
      } catch (err) {
         console.error(err.message);
      }
   }

   runError(response) {
      try {
         typeof this.errorFunction === 'function' && this.errorFunction(response);
      } catch (err) {
         console.error(err.message);
      }
   }

   isModal() {
      return this.modal;
   }

   /**
    * Switch modal status
    */
   toggleModal() {
      this.showModal = !this.showModal;
      document.dispatchEvent(new Event('toggleModalEvent'));
   }

   /**
    * Set Custom Payload
    * @param {Object} payload: Add custom parameters to send on the POST request
    */
   setCustomPayload(payload) {
      this.payload = payload
   }

   /**
    * Get Custom Payload
    * @returns {Object}
    */
   getCustomPayload() {
      return this.payload;
   }
}

window.Youverse = Youverse;