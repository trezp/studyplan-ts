# Catra/OHM Assessments Front End

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## File structure

### `/layouts` 
Layouts rendered by top level component (App.vue)

### `/views` 
Page-level components to be render by Vue Router (see `/router`).

### `/components`
Smaller application components to be rendered by page-level components. 

### `/components/layout`
Smaller components that are the building blocks of various `/layouts`, such as headers, footers and nav bars. 

### `/router`
[Vue-Router](https://router.vuejs.org/), Vue's official router. For now, a single router file that renders `/views` components. 

### `/store`
[Vuex](https://vuex.vuejs.org/) store using a modular pattern. Each feature/page has a store which is imported into `store/index.js`.

### `/configs`
TBD
