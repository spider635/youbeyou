// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded successfully!');
    
    // 获取所有按钮并添加点击事件
    const buttons = document.querySelectorAll('.interactive-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.textContent = 'Clicked!';
            this.style.backgroundColor = '#ff9800';
            
            // 创建一个新的日期显示元素
            const dateElement = document.createElement('p');
            dateElement.textContent = 'Clicked at: ' + new Date().toLocaleTimeString();
            this.parentNode.appendChild(dateElement);
        });
    });
});