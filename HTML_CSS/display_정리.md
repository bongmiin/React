## display의 종류
- 모든 요소는 딱 한 개의 display 값을 갖고 있습니다. 가질 수 있는 display의 종류는

1. inline
2. block
3. inline-block
4. flex
5.list-item
6. none
- 등 여러 가지가 있는데, 대부분의 요소들은 inline과 block 중 한 가지입니다.

### inline display
- inline 요소들은 다른 요소들과 같은 줄에 머무르려고 하는 성향과, 필요한 만큼의 가로 길이만 차지하는 성향이 있습니다.

- 다음 요소들은 기본 display 값이 inline입니다.

1. \<span>
2. \<a>
3. \<b>
4. \<i>
5. \<img>
6. \<button>
```CSS
i {
  background-color: green;
}
```

- \<i> 태그는 기본적으로 inline이기 때문에 앞, 뒤의 텍스트와 같은 줄에 머무르고 있고, 가로 길이는 필요한 만큼만 차지하고 있습니다.

### block display
- block 요소들은 다른 요소들과 독단적인 줄에 가려고 하는 성향과, 최대한 많은 가로 길이를 차지하는 성향이 있습니다.

- 다음 요소들은 기본 display 값이 block입니다.

1. \<div>
2. \<h1>, \<h2>, \<h3>, \<h4>, \<h5>, \<h6>
3. \<p>
4. \<nav>
5. \<ul>
6. \<li>
```CSS
div {
  background-color: green;
}
```

- \<div> 태그는 기본적으로 block이기 때문에 새로운 줄에 가버립니다. 그리고 가로 길이는 최대한 많이, 100%를 차지하고 있죠?

## display 바꾸기
- 모든 요소는 기본적으로 정해진 display 값이 있는데요. CSS를 통해서 이를 바꿀 수 있습니다!

### inline 요소를 block으로 바꾸기
```CSS
i {
  display: block; /* <i> 태그를 block으로 바꾸기 */
  background-color: green;
}
```
### block 요소를 inline으로 바꾸기
```CSS
div {
  display: inline; /* <div> 태그를 inline으로 바꾸기 */
}

.div1 {
  background-color: green;
}

.div2 {
  background-color: blue;
}
```

- 만약 inline 요소처럼 다른 요소들과 같은 줄에 머무르면서 block 요소처럼 가로, 세로 길이도 설정해주고 싶으면 어떻게 해야 할까요? 바로 그 둘을 섞어놓은 inline-block을 사용하면 됩니다!

## inline-block
```CSS
i {
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: green;
}
```