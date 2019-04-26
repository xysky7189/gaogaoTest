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