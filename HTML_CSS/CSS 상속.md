## CSS 상속

```CSS
.div1 {
  color: blue;
}

```
- .div1의 폰트 색을 blue로 설정해주었고, <h1>과 <p>에 대해서는 별도의 설정이 없었습니다. 그런데도 <h1>과 <p> 태그의 폰트 색이 파란색으로 설정되었죠? 그 이유는 .div1의 스타일이 자식들에게 상속되었기 때문입니다.

## 상속되는 속성들
- 하지만 태그와 속성에 따라 상속이 되지 않는 경우도 많이 있습니다. 예를 들어서 부모 태그에 설정한 margin이 모든 자식들에게도 적용되면 총체적 난국이 되겠죠?

- 웬만하면 상속되는 몇 가지 속성들입니다:

1. color
2. font-family
3. font-size
4. font-weight
5. line-height
6. list-style
7. text-align
8. visibility

- 위에 있는 속성들도 항상 상속되는 건 아닙니다. 대표적인 예로 <a> 태그에는 color 속성이 상속되지 않습니다. <a> 태그가 억지로 상속을 받아오기 위해서는 해당 속성에 inherit 값을 쓰면 됩니다!

```CSS
.div1 {
  color: green;
}

.div2 {
  color: orange;
}

.div2 a {
  color: inherit;
}
```