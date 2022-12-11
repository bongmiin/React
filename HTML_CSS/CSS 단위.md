- CSS에는 px, rem, em, % 등 여러 단위가 있습니다. 폰트 크기 뿐만 아니라 padding, margin, width 등 다양한 속성들에 이 단위들을 사용할 수 있습니다.

- 이 단위들의 차이에 대해 알아봅시다.

### px
- px는 절대적인 값입니다. 다른 요소의 값에 영향을 받지 않는다는 거죠.

```CSS
html {
  font-size: 20px;
}

.container {
  padding-top: 40px;
  background-color: lime;
}
```
### rem
- rem 은 상대적인 값입니다. 하지만 오직 <html> 태그의 font-size에만 영향을 받습니다.

- 2rem은 \<html> 태그의 font-size의 2배 크기입니다.

```CSS
html {
  font-size: 20px;
}

.container {
  padding-top: 2rem; /* html의 font-size * 2 = 40px */
  background-color: lime;
}
```
### em
- em도 rem과 마찬가지로 상대적인 값입니다. em은 자기 자신의 font-size를 기준으로 합니다.

- 2em은 자기 자신의 font-size의 2배 크기입니다. 자기 자신의 font-size를 따로 정해주지 않을 경우, 상위 요소에서 상속받은 값을 기준으로 합니다.

```CSS
html {
  font-size: 20px;
}

.container {
  /* 자동으로 html의 font-size 20px을 상속받음 */
  padding-top: 2em; /* 자신의 font-size * 2 = 40px */
  background-color: lime;
}
```
- 만약 자기 자신에게 정해진 font-size가 있다면 그 값을 기준으로 em이 결정됩니다.

```CSS
html {
  font-size: 20px;
}

.container {
  font-size: 40px;
  padding-top: 2em; /* 자신의 font-size * 2 = 80px */
  background-color: lime;
}
```
### 퍼센트 (%)
- % 역시 상대적인 값이겠죠? %는 어느 항목에서 쓰이냐에 따라 다른 기준이 적용됩니다.

- 예를 들어 font-size에서 %가 쓰일 경우, 상위 요소의 font-size에 곱해주는 방식으로 계산합니다.

```CSS
.container {
  font-size: 20px;
  background-color: lime;
}

.text {
  font-size: 180%; /* 상위 요소인 container의 font-size * 1.8 = 36px */
  background-color: skyblue;
  margin: 0;
}
```

- %가 margin이나 padding의 단위로 사용될 경우, 상위 요소의 width를 기준으로 계산됩니다.

```CSS
.container {
  width: 200px;
  background-color: lime;
}

.text {
  padding-left: 30%; /* 상위 요소의 width * 0.3 = 60px */
}
```

- 재미있는 점은 margin-top이나 padding-bottom 등 세로(상하) 속성를 조절할 때에도 상위 요소의 height가 아닌 width를 기준으로 계산된다는 것입니다.

```CSS
.container {
  width: 200px;
  background-color: lime;
}

.text {
  padding-top: 30%; /* 상위 요소의 width * 0.3 = 60px */
}
```