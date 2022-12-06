<template>
  <div :style="{ background: `url(${bgimage})` }" class="box">
    <div class="box-left"></div>
    <div class="box-center" id="china"></div>
    <div class="box-right"></div>
  </div>
</template>

<script setup lang="ts">
import bgimage from './assets/bgimage.jpg'
import { useStore } from './stores'
import { onMounted } from 'vue';
import * as echarts from 'echarts'
import './assets/china'

const store = useStore()
store.getList()


onMounted(() => {
  const charts = echarts.init(document.querySelector('#china') as HTMLElement)
  var data = [
    {
      name: "内蒙古",
      itemStyle: {
        areaColor: "#56b1da",
      },
      value: [110.3467, 41.4899]
    },
  ];
  charts.setOption({
    // backgroundColor: "black",
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "100%",
      itemStyle: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,

      },
      emphasis: {
        areaColor: "#0f5d9d",
      },

      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            opacity: 0,
            label: {
              show: true,
              color: "#009cc9",
            },
          },
          label: {
            show: true,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        selectedMode: "multiple",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 13,
        },
        itemStyle: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: false,
            color: "#fff",
          },
        },
        data: data,
      },
      {
        // name: 'Top 5',
        type: 'scatter',
        coordinateSystem: 'geo',
        // symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
        symbol: 'pin',
        symbolSize: [45,45],
        // symbolOffset:[0, '-40%'] ,
        label: {
          show: true,
        },
        itemStyle: {
          color: '#D8BC37', //标志颜色
        },

        zlevel: 1
      },
    ],
  })
})
</script>



<style lang="less">
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

.box {
  height: 100%;
  display: flex;

  &-left {
    width: 300px;
  }

  &-center {
    flex: 1;
  }

  &-right {
    width: 300px;
  }
}
</style>
