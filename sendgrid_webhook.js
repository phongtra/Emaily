const localtunnel = require("localtunnel");
localtunnel(5000, { subdomain: "phongtran2606" }, function(err, tunnel) {
  console.log("LT running");
});
