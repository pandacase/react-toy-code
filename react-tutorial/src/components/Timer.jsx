import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0); // 初始化计时器状态
  const [isActive, setIsActive] = useState(false); // 控制计时器是否在运行

  useEffect(() => {
    let timer = null;
    
    if (isActive) {
      // 如果计时器是活动的，每秒更新计数
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    // 清理函数，在组件卸载时或计时器状态改变时停止计时器
    return () => clearInterval(timer);
  }, [isActive]); // 依赖项是 isActive，只有它变化时，副作用才会重新运行

  const handleStart = () => setIsActive(true); // 开始计时
  const handleStop = () => setIsActive(false); // 停止计时
  const handleReset = () => {
    setIsActive(false); // 停止计时
    setCount(0); // 重置计数
  };

  return (
    <div>
      <h1>计时器: {count} 秒</h1>
      <button onClick={handleStart}>开始</button>
      <button onClick={handleStop}>停止</button>
      <button onClick={handleReset}>重置</button>
    </div>
  );
};

export default Timer;

