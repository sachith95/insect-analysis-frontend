<template>
  <div class="graphlayout">
    <chart theme="dark" :options="chartOptionsLine" resize></chart>
  </div>
</template>

<script>
export default {
  name: "report",
  props: {},
  data() {
    return {
      chartOptionsLine: {
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross",
          },
        },
        title: {
          left: "center",
          text: "District Wise Insect distribution",
        },
        legend: {
          right: 10,
          data: ["1"],
        },
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: "#d14a61",
              },
            },
            data: [
              "Ampara",
              "Anuradhapura",
              "Badulla",
              "Batticaloa",
              "Colombo",
              "Galle",
              "Gampaha",
              "Hambantota",
              "Jaffna",
              "Kalutara",
              "Kandy",
              "Kegalle",
              "Kilinochchi",
              "Kurunegala",
              "Mannar",
              "Matale",
              "Matara",
              "Monaragala",
              "Mullaitivu",
              "Nuwara Eliya",
              "Polonnaruwa",
              "Puttalam",
              "Ratnapura",
              "Trincomalee",
              "Vavuniya",
            ],
          },
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: "#5793f3",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              onZero: false,
              lineStyle: {
                color: "#fabf0f",
              },
            },
          },
        ],
        series: [
          {
            name: "Pest Count",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            data: [
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3,
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3,
              2.3,
              2,
            ],
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
</style>