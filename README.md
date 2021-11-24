# vue2-homework-part1

## Задание

Сверстать список пользователей с использованием виртуальных узлов. В качестве релизации Virtual DOM используйте библиотеку [snabbdom](https://github.com/snabbdom/snabbdom).

В качестве создания виртуального узла используйте функцию `h` из библиотеки `snabbdom`. Пример:

```javascript
import { h } from "snabbdom";

const vnode = h("div", { style: { color: "#000" } }, [
  h("h1", "Headline"),
  h("p", "A paragraph"),
]);
```

В проекте должены без ошибок выполняться комманды `npm run build` и `npm run preview`.


Макет:
![Screen](./screen.png)
