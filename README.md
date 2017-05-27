# About zeng.js

<img src= "https://mblur.com/files/zeng.jpg" width="400" />

Mr zeng is a supporting protagonists in the _Kung Fu Panda_, is a palace servant too. what does he do ?

as zeng's quote:

> I'm just the messenger.

zeng.js simply make a communication between different tabs or windows. is a mini javascript library without any else frameworks. only 63 lines.

**Install**

```
npm install zeng.js
```

**How To Use**

emit event in original pages
```
import zeng from 'zeng.js'

zeng.emit('EVEN_NAME', arg1, arg2, ...)
```


receive event in other pages
```
zeng.on('EVEN_NAME', (arg1, arg2, ...) => {
  // do something
})
```

online demo: https://mblur.com/demos/zeng/
