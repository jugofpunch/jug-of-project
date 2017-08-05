'use strict';

exports.handler = (event, context, callback) => {
   const response = event.Records[0].cf.response;
   const headers = event.Records[0].cf.response.headers;
   
   headers['Strict-Transport-Security'] = [{key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains'}];
   headers['X-Frame-Options'] = [{key: 'X-Frame-Options', value: 'DENY'}];
   headers['X-Content-Type-Options'] = [{key: 'X-Content-Type-Options', value: 'nosniff'}];
   headers['Content-Security-Policy'] = [{key: 'Content-Security-Policy', value: "default-src 'none'"}];
   headers['Referrer-Policy'] = [{key: 'Referrer-Policy', value:'same-origin'}];
   callback(null, event.Records[0].cf.response);
};
