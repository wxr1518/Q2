document.addEventListener('DOMContentLoaded', function() {
    // 创建切换按钮
    var toggleButton = document.createElement('button');
    toggleButton.textContent = '切换夜间模式';
    document.body.appendChild(toggleButton);

    // 定义一个变量来跟踪夜间模式是否开启
    var isNightMode = false;

    // 为切换按钮添加点击事件监听器
    toggleButton.addEventListener('click', function() {
        if (!isNightMode) {
            document.body.classList.add('night - mode');
            isNightMode = true;
        } else {
            document.body.classList.remove('night - mode');
            isNightMode = false;
        }
    });
});