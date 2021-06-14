# DETETIVE-BOT

I chose the challenge `find the murderer` of [DojoPuzzle](http://dojopuzzles.com/) as to create this project. This app will simulate a bot called detective-bot in order to assist the user finding the murderer.

## Set up

First of all do the setup of [docker in your laptop](https://docs.docker.com/install/). After that check if docker was installed correctly and write the code below in your terminal.

```bash
$ docker version
```

If the info below show up in your screen it means that the setup was done successfully. Otherwise, check the [doc about docker](https://docs.docker.com/install/) again.

```bash
Client:
 Version:	17.12.0-ce
 API version:	1.35
 Go version:	go1.9.2
 Git commit:	c97c6d6
 Built:	Wed Dec 27 20:03:51 2017
 OS/Arch:	darwin/amd64

Server:
 Engine:
  Version:	17.12.0-ce
  API version:	1.35 (minimum version 1.12)
  Go version:	go1.9.2
  Git commit:	c97c6d6
  Built:	Wed Dec 27 20:12:29 2017
  OS/Arch:	linux/amd64
  Experimental:	true
```

## Quick start

Do the download or git clone of the project in [repository of Github](https://github.com/echinen/detective-bot).

Before run the app go to the root of the project and go to the folder ./desafio. Now we need to create a docker image of the application using the following code in your terminal:

```bash
  $ npm run build
```

After finalized the build process of docker it will create a local image of the project. Now let is go deploy the image in a container using the following code:

```bash
  $ npm run up
```

Finally the app is running through the new container!
