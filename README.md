# publish.webmaker.org - endpoints style

this is a exploratory implementation of the projected 
[`publish.webmaker.org` API](https://github.com/mozilla/publish.webmaker.org),
built with the [endpoints framework](https://github.com/endpoints/endpoints).

## up and running

```shell
$ git clone https://github.com/ashleygwilliams/publishAPI-endpoints.git
$ cd publishAPI-endpoints
$ npm install
$ npm start
```

then open `http://localhost:8080/`. this will show you all supported routes,
relations, and filters.

## routes

```javascript
// http://localhost:8080/v1

{
  "files": "/v1/files?include={project}&filter[{project_id,type,path}]",
  "projects": "/v1/projects?include={user,files}&filter[{user_id,title}]",
  "users": "/v1/users?include={projects}&filter[{name}]"
}
```
