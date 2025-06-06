// 随机生成彩色粒子轨迹
document.addEventListener('mousemove', e => {
  const particle = document.createElement('div');
  particle.style = `left:${e.pageX}px;top:${e.pageY}px;background:hsl(${Math.random()*360},70%,60%)`;
  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 1000);
});
