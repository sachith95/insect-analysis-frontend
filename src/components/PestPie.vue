<template>
 <chart theme="dark" :options="pieOptions"></chart>
</template>

<script>
export default {
  name: "PestPie",
  props: {},
  data() {
    return {
      pieOptions: {
        title: {
          text: "Insect Indentified Distibution",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: ["Bees", "Beatales", "Cricket", "Hoppers", "Unknown"],
        },
        series: [
          {
            name: "Infection Distribution",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            data: [
              { name: "Bees", value: 37283 },
              { name: "Beatales", value: 12343 },
              { name: "Cricket", value: 12343 },
              { name: "Hoppers", value: 1233 },
              { name: "Unknown", value: 3456 }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  methods: {},
};
</script>
<style>
</style>