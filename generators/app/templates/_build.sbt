scalaVersion := "2.11.7"
<% if (jsRuntime == 'NodeJS') { %>
scalaJSStage in Global := FastOptStage
<% } %>
