const request = require('request');
const cheerio = require('cheerio');

const base_url = 'http://dkmh.tdmu.edu.vn';

class ScheduleController {
    static index(req, res) {
        try {
            let subRequest = request.defaults({jar: true});

            var options = {
                url: base_url + '/Manage/DangNhapHeThong',
                headers: {
                    'Accept': 'application/json, text/javascript, */*; q=0.01',
                    'Referer': base_url + '/Manage/LoginPage',
                    'X-Requested-With': 'XMLHttpRequest',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                form: {
                    UserName: '1824801030053',
                    Pass: "ZiRDA01EZ7UPK7h5i4i1+FQxQO0Mu0vHPGqsiHia7f/k3yNFr9nIYsa29c7VCgeAfif2qVzVBXHN4gloNPrc7ZsEtCUR9exPZX1W9ZtzpdOpOli/Gkuk2vVvN04x3plzPiah6/vnGczNrYud3B1R/pWKwh8rZyTDpRLQA6CXtrg="
                }
            };


            subRequest.post(options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var options = {
                        url: base_url + '/SCH/LocThoiKhoaBieuHocKyTheoDoiTuong',
                        headers: {
                            //'Accept-Encoding': 'gzip, deflate',
                            'Accept': 'application/json, text/javascript, */*; q=0.01',
                            'Referer': base_url + '/Manage/LoginPage',
                            'X-Requested-With': 'XMLHttpRequest',
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        form: {
                            "keyValue": "",
                            "textSearch": "",
                            "index": 7,
                            "nhhk": "NHHK_20191",
                            "page": 0,
                            "locTKBKhongXep": false,
                            "isSortMonHoc": true,
                            "isSortThuTiet": false,
                            "widthscreen": 996
                        }
                    };

                    subRequest.post(options, async function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                             var info = JSON.parse(body);
                            // var $ = cheerio.load(body, {
                            //     xml: {
                            //         normalizeWhitespace: true,
                            //     }
                            // });
                            // var data = [];
                            //
                            // var info = await $('');
                            // console.log(info);
                            // for (var i = 0; i < info.length; i++) {
                            //     let t = await info.get(i);
                            //     let name = await $(t).text();
                            //     await data.push(name.trim());
                            // }
                            res.status(200).send(info);
                        }

                    });
                } else
                    console.error(error);
            });

        } catch (exception) {
            res.status(500).send(exception)
        }
    }
}

module.exports = ScheduleController;
