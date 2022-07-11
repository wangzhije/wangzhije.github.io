# node

1. nodeName 属性获得结点名称  
   对于元素结点返回的是标记名称,如：`<a herf><a>`返回的是"a"  
   对于属性结点返回的是属性名称,如：class="test" 返回的是 test  
   对于文本结点返回的是文本的内容
2. nodeType 返回结点的类型  
   元素结点返回 1  
   属性结点返回 2  
   文本结点返回 3
3. nodeValue 返回结点的值
   元素结点返回 null  
   属性结点返回 undefined  
   文本结点返回文本内容
