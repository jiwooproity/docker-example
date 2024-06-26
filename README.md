## Docker Desktop 설치
<a href="https://hub.docker.com/" target="_blank">Docker Hub</a>

## Docker Hub Public Image
<a href="https://hub.docker.com/r/jiwooproity/docker-example/tags">docker-example PUBLIC 이미지</a>

## Dockerfile 작성 예시

```
FROM node:16-alpine
```

- 도커의 이미지는 아무것도 없는 상태에서 만드는 것이 아닌 베이스가 되는 이미지를 가지고 생성한다.

- **node:16** - Node.js 16 버전을 사용

- **alpine** - 리눅스의 최소 단위 버전으로서 알파인 리눅스를 사용

---

```
WORKDIR /app
```

- 루트 디렉토리의 app 디렉토리에서 모든 명령문 작업이 실행된다.

---

```
COPY package.json .yarn .pnp.cjs yarn.lock ./
```

- yarn berry 사용을 위한 필수 파일 복사 진행

- /app/[here]에 모든 파일이 복사된다.

---

```
RUN yarn install
```

- 빌드와 실행에 필요한 모듈을 다운로드 ex: npm install or npm ci

---

```
COPY index.js .
```

- 필요한 파일과 모듈이 모두 복사되거나 설치가 완료되면 실행의 엔트리가 되는 파일을 복사

---

```
CMD [ "yarn", "start" ]
```

- ENTRY POINT: 명령어로 컨테이너의 애플리케이션 구동

- 왼쪽에서 오른쪽 순서로 "'yarn'으로 'start' 스크립트 명령어를 실행하라" 라는 의미로 명령어 작성

## in Dockerfile

```
FROM node:16-alpine

WORKDIR /app

COPY package.json .yarn .pnp.cjs yarn.lock ./

RUN yarn install

COPY index.js .

CMD [ "yarn", "start" ]

```
