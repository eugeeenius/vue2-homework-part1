# vue2-homework-part1

## Задание

Использую Virtual DOM отодразить список пользователей по макету. В качестве релизации Virtual DOM используйте библиотеку [snabbdom](https://github.com/snabbdom/snabbdom).

Для создания виртуальных узлов используйте функцию `h` из библиотеки `snabbdom`. Пример:

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

*Комментарий к макету: Список пользователей должен отобраться по центру экрана. Для аватарок используйте локальные изображения из папки assets, а не из public.*
