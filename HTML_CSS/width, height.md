## 가로 길이, 세로 길이
### 텍스트
- 요소의 가로 길이(width)와 세로 길이(height)를 설정해봅시다.

```CSS
p {
  border: 1px solid blue;
  width: 400px;
  height: 300px;
}
```

### 이미지
- 사진의 크기도 똑같이 css에서 설정할 수 있습니다.

```CSS
.bond-img {
  width: 400px;
  height: 300px;
}
```

## 최소, 최대 가로 길이
- min-width, max-width로 요소의 최소, 최대 가로 길이를 설정할 수 있습니다.

```CSS
.p1 {
  border: 1px solid blue;
  max-width: 1000px;
}

.p2 {
  border: 1px solid red;
  max-width: 200px;
}

.p3 {
  border: 1px solid blue;
  min-width: 2000px;
}

.p4 {
  border: 1px solid red;
  min-width: 200px;
}
```
### 최소, 최대 세로 길이
- min-height, max-height로 요소의 최소, 최대 세로 길이를 설정할 수 있습니다.

```CSS
.p1 {
  border: 1px solid blue;
  min-height: 400px;
}

.p2 {
  border: 1px solid red;
  min-height: 200px;
}

.p3 {
  border: 1px solid blue;
  max-height: 1000px;
}

.p4 {
  border: 1px solid red;
  max-height: 50px;
}
```