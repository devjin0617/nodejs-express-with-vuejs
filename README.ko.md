
<p align = "center">
<img src="https://github.com/devjin0617/nodejs-express-with-vuejs/blob/master/node_vue.png?raw=true"/>
</p>

# nodejs-express-with-vuejs

생산성이 좋다고 불리는 `node.js+express`와 떠오르는 샛별이라고 불리는 `vue.js`를 함께 사용하는 예제를 만들고 있습니다.

# 실행방법

실행하기 전에 `node.js`, `npm`이 설치되어 있어야 합니다.

```bash
$ git clone https://github.com/devjin0617/nodejs-express-with-vuejs.git
$ cd /path/to/project
$ npm i
```

### 개발모드

```bash
// webpack server
$ npm run webpack

// webpage server (node.js)
$ npm run start
```

### 배포모드

```bash
// webpack 빌드와 서버실행을 동시에 진행합니다.
$ npm run start:production
```

위와 같이 실행하신 후에 `http://localhost:3000`으로 접속합니다.

# vue파일 생성하기 (vuecon)

```bash
// 프로젝트 루트(ROOT)디렉토리에서 진행하세요.
// ./vuecon {command} {component name}
$ ./vuecon vue VueContainer

what is component name? (exit is just enter)
1.
NaviBar
2.
SlideBar
3.
Container
4.

create to NaviBar, SlideBar, Container components
make success :)
path:
/path/to/project/src/VueContainer.vue
```

### vuecon.config.js 설명
```
{
    // 컴포넌트 생성시 기본적으로 생성여부를 설정할 수 있습니다.
  base: {
        
    style: 'css',       // 스타일의 타입을 지정합니다: css, scss, sass, stylus

    scoped: false,      // 각 기능의 값을 false로 설정시 vuecon에서 우회하여 .vue파일을 생성합니다.

    props: false,

    computed: false,

    methods: false,

    watch: false,

    beforeCreate: false,

    created: false,

    beforeMount: false,

    mounted: false,

    beforeUpdate: false,

    updated: false,

    beforeDestroy: false,

    destroyed: false,
  },

  vue: {
    'vuex': true,
    'vue-router': true,
  },

  use: {
    element: true,
    jquery: false,
  },
}
```
위에 있는 `vue.config.js`의 설정을 이용하면 보다 빠르고 간편하게 `.vue`파일을 생성하고 `vuejs`의 설정을 도와줍니다.


# 개발예정

- ~~기본설정관련 개발진행(완료)~~
- Element UI 반영하기
- vue관련 라이브러리 추가 및 연결해보기
- DB 연결해보기

