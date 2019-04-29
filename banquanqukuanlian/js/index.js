/* 
动态创建表格
*/
//假设的后台数据
var datas = [{
        hash: 'd3544c8c7c194bead6808cbd4d1be59ebbe2c37bc85e760c731794820f775eb8',
        banquan: '版权家',
        zh: '账户',
        time: '2019 - 04 - 24 06: 55: 34'
    },
    {
        hash: 'd3544c8c7c194bead6808cbd4d1be59ebbe2c37bc85e760c731794820f775eb8',
        banquan: '版权家',
        zh: '账户',
        time: '2019 - 04 - 24 06: 55: 34'
    },
    {
        hash: 'd3544c8c7c194bead6808cbd4d1be59ebbe2c37bc85e760c731794820f775eb8',
        banquan: '版权家',
        zh: '账户',
        time: '2019 - 04 - 24 06: 55: 34'
    },
    {
        hash: 'd3544c8c7c194bead6808cbd4d1be59ebbe2c37bc85e760c731794820f775eb8',
        banquan: '版权家',
        zh: '账户',
        time: '2019 - 04 - 24 06: 55: 34'
    },
    {
        hash: 'd3544c8c7c194bead6808cbd4d1be59ebbe2c37bc85e760c731794820f775eb8',
        banquan: '版权家',
        zh: '账户',
        time: '2019 - 04 - 24 06: 55: 34'
    },
    {
        hash: 'd3544c8c7c194bead6808cbd4d1be59ebbe2c37bc85e760c731794820f775eb8',
        banquan: '版权家',
        zh: '账户',
        time: '2019 - 04 - 24 06: 55: 34'
    },
    {
        hash: 'd3544c8c7c194bead6808cbd4d1be59ebbe2c37bc85e760c731794820f775eb8',
        banquan: '版权家',
        zh: '账户',
        time: '2019 - 04 - 24 06: 55: 34'
    },
    {
        hash: 'd3544c8c7c194bead6808cbd4d1be59ebbe2c37bc85e760c731794820f775eb8',
        banquan: '版权家',
        zh: '账户',
        time: '2019 - 04 - 24 06: 55: 34'
    },
    {
        hash: 'd3544c8c7c194bead6808cbd4d1be59ebbe2c37bc85e760c731794820f775eb8',
        banquan: '版权家',
        zh: '账户',
        time: '2019 - 04 - 24 06: 55: 34'
    },
    {
        hash: 'd3544c8c7c194bead6808cbd4d1be59ebbe2c37bc85e760c731794820f775eb8',
        banquan: '版权家',
        zh: '账户',
        time: '2019 - 04 - 24 06: 55: 34'
    }

];
//通过for循环进行动态加载表格
for (var i = 0; i < datas.length; i++) {
    var tbody = $('tbody');
    var strHtml = `
                    <tr>
                        <td><a href="#">${datas[i].hash}</a></td>
                        <td>${datas[i].banquan}</td>
                        <td>${datas[i].zh}</td>
                        <td>${datas[i].time}</td>
                    </tr>
`;
    $(strHtml).appendTo(tbody);
}

//点击tab进行页面切换
$('#liebiao li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var num = $(this).index();
    $('.content').children('div').eq(num).css('display', 'block').siblings().css('display', 'none');
});

//点击二维码弹出二维码
$('#erwei').mouseenter(function () {
    $('.erma').css('display','block');
});
$('#erwei').mouseout(function () {
    $('.erma').css('display','none');
});