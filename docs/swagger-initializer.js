window.onload = function () {
  var MOCK_SERVER_URL = "https://991e5fc8-454e-4b8a-9600-62c8526c88a8.mock.pstmn.io";

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
