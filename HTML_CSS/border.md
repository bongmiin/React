## 한 줄에 끝내기
- 가장 일반적인 방법은 border 속성으로 한 줄에 다 쓰는 것입니다. 이 방식을 사용하면 위, 아래, 왼쪽, 오른쪽 모두 같은 테두리가 생깁니다. 값을 쓰는 순서는 굵기, 스타일(실선, 점선 등), 색입니다.

```CSS
.p1 {
  border: 2px solid #4d9fff;
}

.p2 {
  border: 2px dotted #4d9fff;
}

.p3 {
  border: 2px dashed #4d9fff;
}
```
## 명확하게 나누기
- 다른 방법은 border-style, border-color, border-width 속성을 써서 테두리의 스타일을 하나씩 지정해주는 것입니다.

```CSS
.p1 {
  border-style: dotted;
  border-color: red;
  border-width: 5px;
}
```
## 다채로운 테두리
- 지금까지는 4면의 테두리가 모두 같았는데, 다 다르게 설정해주고 싶으면 이렇게 하면 됩니다:

```CSS
.p1 {
  border-top: 3px dotted #4d9fff;
  border-bottom: 2px dashed red;
  border-left: 5px solid green;
}
```
## 테두리 없애기
- 어떤 요소들(예: <input> 태그)은 기본적으로 테두리가 설정되어 있습니다. 이런 요소들의 테두리를 없애고 싶으면 직접 border 속성을 설정해주면 되는데요. 두 가지 방법이 있습니다:

1. border: none;
2. border: 0;