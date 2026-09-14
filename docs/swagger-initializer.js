window.onload = function () {
  var MOCK_SERVER_URL = "https://50fe00a0-8785-4646-add7-6eff01df4598.mock.pstmn.io";

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
