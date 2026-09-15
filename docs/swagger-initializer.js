window.onload = function () {
  var MOCK_SERVER_URL = "https://82bbfb94-a564-4947-808b-3bcc7dc0b80b.mock.pstmn.io";

  const ui = SwaggerUIBundle({
    url: "swagger.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout",
    requestInterceptor: function(request) {
      if (MOCK_SERVER_URL) {
        request.url = request.url.replace(/^https?:\/\/[^\/]+/, MOCK_SERVER_URL);
      }
      return request;
    }
  });
  window.ui = ui;
};
