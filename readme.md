
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