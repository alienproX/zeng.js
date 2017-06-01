var msg = 'IEkgV0lMTCBCRSBCQUNLIC0tIFpFTkcuSlM'

var zeng = {
  emit: function () {
    var params = Array.prototype.slice.call(arguments)
    var name = params[0]
    var args = params.slice(1)
    var arr = []
    for (var i = 0; i < args.length; i++) {
      var item = args[i]
      var str = ''
      switch (typeof item) {
        case 'string':
          str = '_string_:' + item
          break
        case 'number':
          str = '_number_:' + item
          break
        case 'object':
          str = '_object_:' + JSON.stringify(item)
          break
        case 'boolean':
          str = '_boolean_:' + (item ? 'true' : 'false')
          break
        case 'undefined':
          str = '_undefined_:undefined'
          break
      }
      arr.push(str)
    }
    window.localStorage.setItem('_zeng_' + name, JSON.stringify(arr))
    window.localStorage.setItem('_zeng_' + name, msg)
  },
  on: function (name, fn) {
    var handle = function (s) {
      if (s.key === '_zeng_' + name) {
        if (s.newValue === msg) {
          window.localStorage.removeItem('_zeng_' + name)
          return
        }
        var params = JSON.parse(s.newValue)
        var arr = []
        for (var i = 0; i < params.length; i++) {
          var item = params[i]
          var type = item.slice(0, item.indexOf(':'))
          var val = item.slice(item.indexOf(':') + 1)
          switch (type) {
            case '_string_':
              val = val + ''
              break
            case '_number_':
              val = +val
              break
            case '_object_':
              val = JSON.parse(val)
              break
            case '_boolean_':
              val === 'true' ? (val = true) : (val = false)
              break
            case '_undefined_':
              val = undefined
              break
          }
          arr.push(val)
        }
        fn && fn.apply(null, arr)
      }
    }
    if (window.addEventListener) {
      window.addEventListener('storage', handle, false)
    } else {
      window.attachEvent('onstorage', handle)
    }
  }
}

exports = module.exports = zeng
