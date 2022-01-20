import React from "react";
import * as amCharts from "@amcharts/amcharts5";
import * as amMap from "@amcharts/amcharts5/map";
import * as worldGeoJSON from "@amcharts/amcharts5-geodata/worldIndiaHigh";
import * as darkTheme from "@amcharts/amcharts5/themes/Dark";
// import { Grid } from "@amcharts/amcharts5/.internal/charts/xy/axes/Grid";

class WorldMap extends React.Component {
  chart: any;
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    let root = amCharts.Root.new("chartdiv");
    root.setThemes([
      darkTheme.default.new(root)
    ]);

    let chart = root.container.children.push(amMap.MapChart.new(root, {
      panX: "none",
      panY: "none",
      minZoomLevel: 0,
      zoomLevel: 1.1,
      maxZoomLevel: 0,
      projection: amMap.geoMercator(),
      homeGeoPoint: { latitude: 2, longitude: 2 }
    }));



    // Create series for background fill
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    let backgroundSeries = chart.series.push(amMap.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0,
      strokeOpacity: 0,
    });

    // Add background polygon
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    backgroundSeries.data.push({
      geometry: amMap.getGeoRectangle(90, 180, -90, -180)
    });

    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let polygonSeries = chart.series.push(amMap.MapPolygonSeries.new(root, {
      geoJSON: worldGeoJSON.default,
      exclude: ["AQ"],
      fill:amCharts.color("#93c1f0")

    }));

    // Create line series for trajectory lines
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
    let lineSeries = chart.series.push(amMap.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: root.interfaceColors.set("grid" ,amCharts.color("#000033")),
      strokeOpacity: 1,
      strokeWidth:1.5,
      
      
    });

    // Create point series for markers
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
    let citySeries = chart.series.push(
      amMap.MapPointSeries.new(root, {})
      
    );

    citySeries.bullets.push(function () {
      let circle = amCharts.Circle.new(root, {
        radius: 4,
        tooltipText: "{title}",
        tooltipY: 0,
        fill: amCharts.color("#00FF00"),
        stroke: root.interfaceColors.get("alternativeText"),
        strokeWidth: 1.5,
        
        
      });

      return amCharts.Bullet.new(root, {
        sprite: circle
      });
    });

    const cities = [
      {
        id: "newDelhi",
        title: "New Delhi",
        geometry: { type: "Point", coordinates: [77.2090,28.6139 ] },
      },
      {
        id: "melbourne",
        title: "Melbourne",
        geometry: { type: "Point", coordinates: [ 144.9631,-37.8136] }
      }, {
        id: "london",
        title: "London",
        geometry: { type: "Point", coordinates: [ -0.1276,51.5072] }
      }, {
        id: "newYork",
        title: "New York",
        geometry: { type: "Point", coordinates: [ -74.0060,40.7128]}
      }, {
        id: "ottawa",
        title: "Ottawa",
        geometry: { type: "Point", coordinates: [ -75.6972,45.4215] }
      }, {
        id: "auckland",
        title: "Auckland",
        geometry: { type: "Point", coordinates: [ 174.7645,-36.8509] }
      }];
    let lineDataItem = lineSeries.pushDataItem({
      pointsToConnect: [
        addCity(cities[0].geometry.coordinates),
        addCity(cities[1].geometry.coordinates),
        addCity(cities[0].geometry.coordinates),
        addCity(cities[2].geometry.coordinates),
        addCity(cities[0].geometry.coordinates),
        addCity(cities[3].geometry.coordinates),
        addCity(cities[0].geometry.coordinates),
        addCity(cities[4].geometry.coordinates),
        addCity(cities[0].geometry.coordinates),
        addCity(cities[5].geometry.coordinates),
        addCity(cities[0].geometry.coordinates),]
    });

    let planeSeries = chart.series.push(amMap.MapPointSeries.new(root, {}));

    let plane = amCharts.Graphics.new(root, {
      svgPath:
        "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47",
      scale: 0.09,
      centerY: amCharts.p50,
      centerX: amCharts.p50,
      fill: amCharts.color("#0040ff")
    });

    planeSeries.bullets.push(function () {
      let container = amCharts.Container.new(root, {});
      container.children.push(plane);
      return amCharts.Bullet.new(root, { sprite: container });
    });

    let planeDataItem = planeSeries.pushDataItem({
      lineDataItem: lineDataItem,
      positionOnLine: 0,
      autoRotate: true
    });

    planeDataItem.animate({
      key: "positionOnLine",
      to: 1,
      duration: 40000,
      loops: Infinity,
      easing: amCharts.ease.yoyo(amCharts.ease.linear)
    });

    planeDataItem.on("positionOnLine", function (value: number = 0) {
      if (value >= 0.99) {
        plane.set("rotation", 180);
      } else if (value <= 0.01) {
        plane.set("rotation", 0);
      }
    });



    citySeries.data.setAll(cities);

    function addCity(coords: Array<number>) {
      return citySeries.pushDataItem({
        latitude: coords[1],
        longitude: coords[0],
      });
    }

    // Make stuff animate on load
    chart.appear(1000, 100);
    this.chart = chart;

  };

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  };
  render() {
    return (
      <div className="mx-5 px-3 "> 
        <div id="chartdiv" style={{ width: "100%", height: "850px", paddingTop:"100px"}}></div>
      </div>
    );
  }
}

export default WorldMap;