# JavaScript 字符串数据结构与算法题

## 反转字符串

- 原生方法
```JS
let reverseString = function(s){
  return s.reverse();
}
```
- 遍历
```JS
let reverseString = function(s){
  let result = s;
  let i = 0, j = result.length-1;
  while(i < j){
    let cache = result[i];
    result[i] = result[j];
    result[j] = cache;
    i++;
    j--;
  }
  return result;
}
```

## 最长子串

### 滑动窗口

```JS
let lengthOfLongestSubstring = function(s){
  let queue = [];
    max = 0;
    result = [];
  for(let c of s){
    if(queue.include(c)){
      queue
    }
  }
  return max
}
```
