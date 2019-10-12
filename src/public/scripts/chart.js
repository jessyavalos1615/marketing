google.charts.load("current", {
  callback: function() {
    var arrayData = [];
    var arrayViewsFinal = [];
    var arrayVisitsFinal = [];
    var arrayLikesFinal = [];
    $.get("/data/data2.csv", function(csvString) {
      arrayData = $.csv.toArrays(csvString, {
        onParseValue: $.csv.hooks.castToScalar,
        separator: "|"
      });

      console.log("Array despues de llamar el archivo");
      console.log(arrayData);

      var arrayDataViews = $.csv.toArrays(arrayData[0][0], {
        onParseValue: $.csv.hooks.castToScalar,
        separator: "-"
      });
      var arrayDataVisits = $.csv.toArrays(arrayData[0][1], {
        onParseValue: $.csv.hooks.castToScalar,
        separator: "-"
      });
      var arrayDataLikes = $.csv.toArrays(arrayData[0][2], {
        onParseValue: $.csv.hooks.castToScalar,
        separator: "-"
      });

      console.log("Textos convertidos en array");
      console.log(arrayDataViews[0]);
      console.log(arrayDataVisits[0]);
      console.log(arrayDataLikes[0]);

      var arrayViewsRes = $.csv.toArrays(arrayDataViews[0][0], {
        onParseValue: $.csv.hooks.castToScalar,
        delimiter: ","
      });
      var arrayViews = $.csv.toArrays(arrayDataViews[0][1], {
        onParseValue: $.csv.hooks.castToScalar,
        delimiter: ","
      });

      var arrayVisitsRes = $.csv.toArrays(arrayDataVisits[0][0], {
        onParseValue: $.csv.hooks.castToScalar,
        delimiter: ","
      });
      var arrayVisits = $.csv.toArrays(arrayDataVisits[0][1], {
        onParseValue: $.csv.hooks.castToScalar,
        delimiter: ","
      });

      var arrayLikesRes = $.csv.toArrays(arrayDataLikes[0][0], {
        onParseValue: $.csv.hooks.castToScalar,
        delimiter: ","
      });
      var arrayLikes = $.csv.toArrays(arrayDataLikes[0][1], {
        onParseValue: $.csv.hooks.castToScalar,
        delimiter: ","
      });

      console.log("Textos convertidos final");
      console.log("Views");
      console.log(arrayViewsRes);
      console.log(arrayViews);
      console.log("Visits");
      console.log(arrayVisitsRes);
      console.log(arrayVisits);
      console.log("Likes");
      console.log(arrayLikesRes);
      console.log(arrayLikes);

      arrayViewsFinal.push(arrayViewsRes[0]);
      arrayViewsFinal.push(arrayViews[0]);

      arrayVisitsFinal.push(arrayVisitsRes[0]);
      arrayVisitsFinal.push(arrayVisits[0]);

      arrayLikesFinal.push(arrayLikesRes[0]);
      arrayLikesFinal.push(arrayLikes[0]);

      console.log("Array final a usar");
      console.log(arrayViewsFinal);
      console.log(arrayVisitsFinal);
      console.log(arrayLikesFinal);

      var dataViews = new google.visualization.arrayToDataTable(
        arrayViewsFinal
      );
      var dataVisits = new google.visualization.arrayToDataTable(
        arrayVisitsFinal
      );
      var dataLikes = new google.visualization.arrayToDataTable(
        arrayLikesFinal
      );

      var chartViews = new google.visualization.ColumnChart(
        document.getElementById("chartViews")
      );
      var chartVisits = new google.visualization.ColumnChart(
        document.getElementById("chartVisits")
      );
      var chartLikes = new google.visualization.ColumnChart(
        document.getElementById("chartLikes")
      );

      chartViews.draw(dataViews);
      chartVisits.draw(dataVisits);
      chartLikes.draw(dataLikes);
    });
  },
  packages: ["corechart"]
});
