(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['demo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section>\r\n	<h1>Weather Update</h1>\r\n	<div>Location: "
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<div>Date: "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\r\n</section>";
},"useData":true});
templates['forecast'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.flag : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n	<div class=\"forecast-detail\">\r\n	  <p>\r\n	      <strong>\r\n	          <span class=\"time\">\r\n	              Time: "
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data}) : helper)))
    + "\r\n	          </span>\r\n	      </strong>\r\n	  </p>\r\n	  <ul>\r\n	      <li class=\"condition\">Condition: "
    + alias4(((helper = (helper = helpers.condition || (depth0 != null ? depth0.condition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"condition","hash":{},"data":data}) : helper)))
    + "</li>\r\n	      <li class=\"temp\">Temp: "
    + alias4((helpers.showUnit || (depth0 && depth0.showUnit) || alias2).call(alias1,(depth0 != null ? depth0.unit : depth0),(depth0 != null ? depth0.temp : depth0),{"name":"showUnit","hash":{},"data":data}))
    + "</li>\r\n	  </ul>\r\n	</div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	  <li class=\"forecast-item\">\r\n	    <p>"
    + container.escapeExpression(((helper = (helper = helpers.currDate || (depth0 != null ? depth0.currDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currDate","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"weather-display\">\r\n	<h1>Forecast</h1>\r\n	<ul class=\"forecast\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\r\n</section>";
},"useData":true});
templates['weather'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"weather-display\">\r\n	<h1>Weather Update</h1>\r\n	<div>Location: "
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<div>Date: "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<div>Conditions: "
    + alias4(((helper = (helper = helpers.conditions || (depth0 != null ? depth0.conditions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"conditions","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<div>Current Temp: "
    + alias4((helpers.showUnit || (depth0 && depth0.showUnit) || alias2).call(alias1,(depth0 != null ? depth0.unit : depth0),(depth0 != null ? depth0.temp : depth0),{"name":"showUnit","hash":{},"data":data}))
    + "</div>\r\n	<div>Sunrise: "
    + alias4(((helper = (helper = helpers.sunrise || (depth0 != null ? depth0.sunrise : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunrise","hash":{},"data":data}) : helper)))
    + "</div>\r\n	<div>Sunset: "
    + alias4(((helper = (helper = helpers.sunset || (depth0 != null ? depth0.sunset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunset","hash":{},"data":data}) : helper)))
    + "</div>\r\n</section>";
},"useData":true});
})();