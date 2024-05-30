import { createApp, reactive } from "https://unpkg.com/petite-vue?module";

const store = reactive({
  count: 0,
  inc() {
    this.count++;
  },
});

function Counter(props) {
  return {
    $template: "#counter-template",
    count: props.initialCount,
    inc() {
      this.count++;
    },
  };
}

function Counter2(props) {
  return {
    count: props.initialCount,
    inc() {
      this.count++;
    },
    mounted() {
      console.log(`I'm mounted!`);
    },
  };
}

//createApp에 key, getter, method를 추가할 경우 v-scope 전역에서 사용가능
// store도 전역인건 동일한데, 그룹으로 분리하라고 reactive로 감싸는 듯
// createApp.mount는 전체 기준이고, element 단위로 하려면 mount로 일일이 지정필요, 전체와 일일이 지정하는건 같이 지낼 수 없음

/* createApp({
  all: "전역인듯",
}).mount(); */

createApp({
  name: "2",
  get helloName() {
    return "hello " + this.name;
  },
  setName(name) {
    this.name = name;
  },
  mounted() {
    console.log("!@@!!@");
  },

  Counter,
  Counter2,
  store,
}).mount("#app");

createApp({ title: "어서오세요" }).mount("#info");
