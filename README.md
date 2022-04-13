# helix-express-defer-test

```
$ npm install
$ npm start

$ curl 'http://localhost:4000/graphql' -H 'Content-Type: application/json' --data-binary '{"query":"query WithInlineFragmentsQuery { computers { id ...on Computer @defer { cpu year screen { resolution ...on Screen @defer(label: \"b\") { isColor } } } } }"}'
```

```
---
Content-Type: application/json; charset=utf-8
Content-Length: 77

{"data":{"computers":[{"id":"Computer1"},{"id":"Computer2"}]},"hasNext":true}
---
Content-Type: application/json; charset=utf-8
Content-Length: 84

{"data":{"isColor":null},"path":["computers",0,"screen"],"hasNext":true,"label":"b"}
---
Content-Type: application/json; charset=utf-8
Content-Length: 106

{"data":{"cpu":"386","year":1993,"screen":{"resolution":"640x480"}},"path":["computers",0],"hasNext":true}
---
Content-Type: application/json; charset=utf-8
Content-Length: 84

{"data":{"isColor":null},"path":["computers",1,"screen"],"hasNext":true,"label":"b"}
---
Content-Type: application/json; charset=utf-8
Content-Length: 107

{"data":{"cpu":"486","year":1996,"screen":{"resolution":"800x600"}},"path":["computers",1],"hasNext":false}
-----

```
