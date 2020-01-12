export default {
  /**
   * @desc 时间戳格式化方法
   * @param timestamp {int} 时间戳(单位:毫秒/秒)
   * @param fmt {string} 返回时间格式 'yyyy-MM-dd hh:mm:ss EEE' -> 2018-12-27 12:02:02 星期五
   * @return {string} 时间字符串 '2018-12-27 12:02:02'
   */
  formatTimeStamp: function (timestamp, fmt = 'yyyy-MM-dd hh:mm:ss') {
    // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let seconds = parseInt(timestamp, 10) || 0;
    if (seconds && (seconds + '').length < 13) {
      seconds *= 1000;
    }

    let date = new Date(seconds);
    var o = {
      // 月份
      'M+': date.getMonth() + 1,
      // 日
      'd+': date.getDate(),
      // 小时
      'h+': date.getHours(),
      // 分
      'm+': date.getMinutes(),
      // 秒
      's+': date.getSeconds(),
      // 季度
      'q+': Math.floor((date.getMonth() + 3) / 3),
      // 毫秒
      'S': date.getMilliseconds()
    };
    var week = {
      0: '\u65e5',
      1: '\u4e00',
      2: '\u4e8c',
      3: '\u4e09',
      4: '\u56db',
      5: '\u4e94',
      6: '\u516d'
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '（\u661f\u671f' : '（\u5468') : '（') +
        week[date.getDay() + ''] + '）');
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  }
};
