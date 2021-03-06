Ant Design指引
1.基本理念
2.实践案例
3.设计原则
  3.1.亲密性
      如果信息之间关联性越高，它们之间的距离就应该越接近，也越像多个视觉单元
      1）纵向间距关系
        通过【小号间距】【中号间距】【大号间距】这三种规格来划分信息层次
        在这三种规格不适用的情况下，可以通过加减【基础间距】的倍数，或者增加元素来拉开信息层次
        注：在 Ant Design 中，y=8+8*n。其中，n>=0，y 是纵向间距，8 是『基础间距』。
      2）横向间距关系
         为了适用不同尺寸的屏幕，在横向采用栅格布局来排布组件，从而保证布局的灵活性
         在一个组件内部，元素的横向间距也应该有所不同。
  3.2.对齐
      将元素进行对齐，既符合用户的认知特性，也能引导视觉流向，让用户更流畅地接收信息
      1）文案类对齐
      2）表单类对齐
         冒号对齐（右对齐）能让内容锁定在一定范围内，让用户眼球顺着冒号的【视觉流】，就能找到所有填写项
      3）数字类对齐
         为了【快速对比】数值大小，建议所有数值取相同有效位数，并且右对齐
  3.3对比
     1）主次关系对比
     2）总分关系对比
     3）状态关系对比
  3.4重复
     相同元素在整个页面不断重复，不仅可以有效降低用户的【学习成本】，也可以帮助用户识别出这些元素之间的【关联性】
  3.5直截了当
     需要在哪里输出，就要允许在哪里输入
     1）页内编辑
        单字段行内编辑
        多字段行内编辑
     2）利用拖放
        拖放列表 只能限制在一个维度（上下或者左右）进行拖放
        拖放图片/文件
  3.6足不出户
     能在这个页面解决的问题，就不要去其他页面解决，因为任何页面刷新和跳转都会引起变换盲视，导致用户心流被打断。
     1）覆盖层
        二次确认覆盖层：避免滥用Modal进行二次确认，应该勇敢的让用户去尝试，给用户机会【撤销】即可
        详情覆盖层：一般在列表中，通过用户【悬停】/【点击】某个区块，在当前页加载该条列表项的更多详情信息
        输入覆盖层：在覆盖层上，让用户直接进行少量字段的输入
     2）嵌入层
        列表嵌入层：在列表中，显示某条列表项的详情信息，保持上下文不中断。
        标签页：将多个平级的信息进行整理和分类，一次只显示一组信息
     3）虚拟页面
        显示长列表：无限加载和分页器
        显示图片：走马灯
     4）流程处理
        渐进式展现：基于用户操作/某种特定规则，渐进式展现不同的操作选项
        配置程序
        弹出覆盖层
  3.7简化交互
     根据费茨法则所描述的，如果用户鼠标移动距离越少、对象相对目标越大，那么用户越容易操作。
     1）实时可见工具
     2）悬停即现工具
     3）开关显示工具
     4）交互中的工具
     5）可视区域!=可点击区域
  3.8提供邀请
     1）静态邀请
        指通过可视化技术在页面上提供引导交互的邀请
        引导操作邀请
        漫游探索邀请
     2）动态邀请
        悬停邀请
        推论邀请
        更多内容邀请
  3.9巧用过渡
  3.10即时反应