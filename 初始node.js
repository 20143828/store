看了很多教程，我却在第一个看起来很简单的Http服务器构建上不知道如何下手？？？代码大概就长这个样子
var http = require('http');  
  
http.createServer(function (req, res) {  
  res.writeHead(200, {'Content-Type': 'text/plain'});  
  res.end('Hello World\n');  
}).listen(8080);  
  
console.log('Server running on port 8080.');
教程上这样描述的：在你的项目的根目录下创建一个叫server.js的文件，并写入上面的代码，然后node server.js调用
反正我是崩溃的，找了半天我还不知在哪，去哪执行
使用Node.js一种就是像在浏览器控制台一样的方式，另一种就是通过node命令来调用js文件执行，操作如下：
1.建立一个server.js文件，写入上面的代码
2.打开控制台，将路径切换为你server.js存储的路径，在这个路径下执行 node server.js，这个时候打开http://localhost:8080/就能看到Hello World了。
3.这个时候你会发现控制台不动了，这是因为你建立了一个服务器，而这个服务器在运行状态，直到你退出。

