# express-art-mini

最简单的express和art-template集成

express-generator默认生成的是jade，我很喜欢jade的极简风格，唯一麻烦的就是要有转换思维，对初学者来说略麻烦。这里为了照顾大家，使用art-template，它类似jsp、asp、php等直接使用html标签的语法，可读性上更好，对新手更友好。

[art-template](https://github.com/aui/art-template) 是一个简约、超快的模板引擎。它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持 NodeJS 和浏览器。

## 依赖模块

```
"art-template": "^4.12.2",
"express": "^4.16.2",
"express-art-template": "^1.0.0"
```

## 用法

app.js

```
// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
```

## 视图

将默认的express-generator生成的jade转成art

layout.art

```
<!--
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
-->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/stylesheets/style.css">
</head>
<body>
    {{block 'content'}}{{/block}}
</body>
</html>
```

index.art

```
<!--
extends layout

block content
  h1= title
  p Welcome to #{title}
-->

<% extend('./layout.art') %>
<% block('content', function(){ %>
  <h1>{{h1}}</h1>
  <p> Welcome to {{title}} </p>
<% }) %>
```

error.art

```
<!--
extends layout

block content
  h1= message
  h2= error.status
  pre #{error.stack}
-->

<% extend('./layout.art') %>
<% block('content', function(){ %>
  <h1>{{message}}</h1>
  <h2>{{error.status}}</h2>
  <pre> {{error.stack}} </pre>
<% }) %>
```

## 性能

其实art-template在小量的时候确实比jade好，但量大的时候比jade要弱一点，辩证的看就好了。

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v0.1.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
