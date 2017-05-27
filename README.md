# About zeng.js

<img src= "https://mblur.com/files/zeng.jpg?v" width="400" />

The name comes from the DreamWorks Animation's movie. Mr Zeng is a supporting protagonists in the _Kung Fu Panda_, is a palace servant too. what does he do ?

as zeng's quote:

> I'm just the messenger.

zeng.js simply make a communication between different tabs or windows. is a mini javascript library without any else frameworks. only 70+ lines.

**Install**

```
npm install zeng.js
```

**How To Use**

emit event in the one page
```
import zeng from 'zeng.js'

zeng.emit('EVENT_NAME', arg1, arg2, ...)
```


receive event in other pages
```
zeng.on('EVENT_NAME', (arg1, arg2, ...) => {
  // do something
})
```

online demo: https://mblur.com/demos/zeng/

**Browser Support**

IE8+ and model browsers.
