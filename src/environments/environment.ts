// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  emailJs: {
    resource_url: 'https://api.emailjs.com/api/v1.0/email/send',
    user_id: 'user_dHVIua2XrJJPiA5gk5LX4',
    access_token: '7b5c0029af247f93f3486ba1f8deab07',
    service_id: 'gmail',
    template_id: 'photo_session'
  }


};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
