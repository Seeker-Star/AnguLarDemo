/// <reference lib="webworker" />

// 计算斐波那契数列（递归方式，适用于小数值）
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

addEventListener('message', ({ data }) => {
  if (typeof data === 'number' && data >= 0) {
    const result = fibonacci(data);
    postMessage(`斐波那契(${data}) = ${result}`);
  } else {
    postMessage('请输入非负整数');
  }
});
