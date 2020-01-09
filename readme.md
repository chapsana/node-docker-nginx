
## Building your image

```sh
docker build -t alphao/node-docker-basics .
```



## Running your image


```sh
docker run -p 49160:8080 -d alphao/node-docker-basics
```


- Get container ID
docker ps

- Print app output
docker logs <container id>

- Example
Running on http://localhost:8080




If you need to go inside the container you can use the exec command:

# Enter the container
$ docker exec -it <container id> /bin/bash