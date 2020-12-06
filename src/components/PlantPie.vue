<template>
  <chart theme="dark" :options="pieOptions" resize></chart>
</template>

<script>
export default {
  name: "PlantPie",
  props: {},
  data() {
    return {
      seriesLabel: {
        normal: {
          show: true,
          textBorderColor: "#333",
          textBorderWidth: 2,
        },
      },
      pieOptions: {
        title: {
          text: "Plant vs insects Statistics",
           left: "center"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          orient: "vertical",
          right: 10,
          top: 10,
          bottom: 20,
          data: ["Benificial Insect", "Pest Insects"],
        },
        grid: {
          left: 100,
        },
        xAxis: {
          type: "value",
          name: "Count",
          axisLabel: {
            formatter: "{value}",
          },
        },
        yAxis: {
          type: "category",
          inverse: true,
          data: ["Vegitables", "Fruits", "Grains"],
          axisLabel: {
            formatter: function (value) {
              return "{" + value + "| }\n{value|" + value + "}";
            },
            margin: 20,
            rich: {
              value: {
                lineHeight: 30,
                align: "center",
              },
              Sunny: {
                height: 40,
                align: "center",
                backgroundColor: {
                  image: '../assets/vegi.png',
                },
              },
              Cloudy: {
                height: 40,
                align: "center",
                backgroundColor: {
                  image: '../assets/vegi.png',
                },
              },
              Showers: {
                height: 40,
                align: "center",
                backgroundColor: {
                  image: '../assets/logo.png',
                },
              },
            },
          },
        },
        series: [
          {
            name: "Benificial Insect",
            type: "bar",
            data: [20, 40, 10],
            label: this.seriesLabel,
            markPoint: {
              symbolSize: 1,
              symbolOffset: [0, "50%"],
              label: {
                formatter: "{a|{a}\n}{b|{b} }{c|{c}}",
                backgroundColor: "rgb(242,242,242)",
                borderColor: "#aaa",
                borderWidth: 1,
                borderRadius: 4,
                padding: [4, 10],
                lineHeight: 26,
                position: "right",
                distance: 20,
                rich: {
                  a: {
                    align: "center",
                    color: "#fff",
                    fontSize: 18,
                    textShadowBlur: 2,
                    textShadowColor: "#000",
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 1,
                    textBorderColor: "#333",
                    textBorderWidth: 2,
                  },
                  b: {
                    color: "#333",
                  },
                  c: {
                    color: "#ff9811",
                    textBorderColor: "#000",
                    textBorderWidth: 1,
                    fontSize: 22,
                  },
                },
              },
            },
          },
          {
            name: "Pest Insects",
            type: "bar",
            label: this.seriesLabel,
            data: [90, 105, 50],
          },
        ],
      },
    };
  },
};
</script>
<style>
</style>