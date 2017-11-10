// 'use strict'
// import superagent from 'superagent'
var superagent = require('superagent')
var cheerio = require('cheerio')
var async = require('async')
var _ = require('lodash')
var phantom = require('phantom')

console.log('爬虫程序开始运行')

// 对静态网页
superagent
.get('https://www.qiushibaike.com/')
.end(function (err, res) {
    if (err) {
        console.log(err)
        return
    }
    var $ = cheerio.load(res.text, {decodeEntities: false})
    var contentList = $('.contentHerf')
    // console.log(contentList.length)
    for (var i = 0, len = contentList.length; i < len; i++) {
        var content = contentList.eq(i)
        var r = _.trim(content.text())
        console.log((i + 1) + '：' + r)
        var thumb = content.siblings('.thumb')
        // console.log(thumb.length)
        if(thumb.length > 0) {
            r = r + content.siblings('.thumb img').attr('href')
        }
        // console.log(r)
    }
})

// for 动态网页，很多内容是脚本申请后生成的
// var page =

// phantom.create()
//     .then(instance => {
//         phInstance = instance
//     }).then(page => {
//
// })



// 动态下载某个人的博客，或者对博客内容做统计分析。
// 还涉及到中文分词啊喂！搜索引擎啊喂！

// 爬取技术博客

// 爬取美图

// 爬取连载小说，离线查看