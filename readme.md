
## Building your image

```sh
docker build -t hello-world .
docker build -t alphao/node-docker-basics .
```



## Running your image


```sh
docker run -p 8081:8081 hello-world
docker run -p 49160:8080 -d alphao/node-docker-basics
```


## Share
docker login
docker push alpha/hello-world
docker run alpha/hello-world



- Get container ID
docker ps

- Print app output
docker logs <container id>

- Example
Running on http://localhost:8080




If you need to go inside the container you can use the exec command:

# Enter the container
$ docker exec -it <container id> /bin/bash


# Docker Node best practises


docker run \
-e "NODE_ENV=production" \
-u "node" \
-m "300M" --memory-swap "1G" \
-w "/home/node/app" \
--name "my-nodejs-app" \
node [script]


Environment Variables
-e "NODE_ENV=production"


Non-root User
-u "node"

FROM node:6.10.3
...
# At the end, set the user to use when running this image
USER node


Memory
-m "300M" --memory-swap "1G"


CMD
CMD ["node","index.js"]
