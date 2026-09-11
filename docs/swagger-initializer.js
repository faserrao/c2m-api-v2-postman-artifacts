window.onload = function () {
  var MOCK_SERVER_URL = "https://bec36254-7ca5-4e05-9c61-0d4abfdb2f89.mock.pstmn.io";

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
