window.onload = function () {
  var MOCK_SERVER_URL = "https://01e347d4-5208-48d1-b1dd-ba5d333842b7.mock.pstmn.io";

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
