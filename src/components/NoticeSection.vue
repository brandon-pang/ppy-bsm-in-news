<template>
    <div class="notice--system">
        <div class="cont--notice-detail" v-if="isShowDetail">
            <div class="wrap--detail-top">
                <div v-if="innerPostDatas[nowClickNo].Tags ==='0' || innerPostDatas[nowClickNo].Tags===''"></div>
                <img :src="innerPostDatas[nowClickNo].Tags | badgeImg" class="img--badge" v-else>
                <div class="top--title"
                     :style="{'background-image':'url('+innerPostDatas[nowClickNo].HeaderImgUrl+')'}">
                    <p class="txt--date" v-html="innerPostDatas[nowClickNo].postDate"></p>
                    <p class="txt--title" v-html="$options.filters.truncate(innerPostDatas[nowClickNo].postTitle, 80)"></p>
                </div>
            </div>
            <div class="wrap--detail-mid">
                <p class="txt--context" v-html="innerPostDatas[nowClickNo].postContent"></p>
            </div>
            <div class="wrap--detail-bt">
                <div class="btn--home" @click="isShowDetail=false;"><p>BACK</p></div>
                <div class="btn--prev" @click="gotoPostPrev(nowClickNo)" :class="{'disablePrev':isPrevBtn}">
                    <svg width="43px" height="64px" viewBox="0 0 43 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <polygon id="path-1" points="21 10.5 52.5 52.5 -10.5 52.5"></polygon>
                            <filter x="-0.8%" y="-1.2%" width="103.2%" height="104.8%" filterUnits="objectBoundingBox"
                                    id="filter-2">
                                <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0" type="matrix"
                                               in="shadowOffsetOuter1"></feColorMatrix>
                            </filter>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="NEWS2" transform="translate(-701.000000, -1229.000000)">
                                <g id="Group" transform="translate(701.000000, 1230.000000)" fill-rule="nonzero">
                                    <g id="Triangle"
                                       transform="translate(21.000000, 31.500000) rotate(-90.000000) translate(-21.000000, -31.500000) ">
                                        <use fill="black" fill-opacity="1" filter="url(#filter-2)"
                                             xlink:href="#path-1"></use>
                                        <use fill="#EEEEEE" xlink:href="#path-1" id="bg0"></use>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <p>PREV</p>
                </div>
                <div class="btn--next" @click="gotoPostNext(nowClickNo)" :class="{'disableNext':isNextBtn}">
                    <p>NEXT</p>
                    <svg width="43px" height="64px" viewBox="0 0 43 64" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <polygon id="path-1" points="21 10.5 52.5 52.5 -10.5 52.5"></polygon>
                            <filter x="-0.8%" y="-1.2%" width="103.2%" height="104.8%" filterUnits="objectBoundingBox"
                                    id="filter-2">
                                <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0" type="matrix"
                                               in="shadowOffsetOuter1"></feColorMatrix>
                            </filter>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="NEWS2" transform="translate(-701.000000, -1229.000000)">
                                <g id="Group" transform="translate(701.000000, 1230.000000)" fill-rule="nonzero">
                                    <g id="Triangle"
                                       transform="translate(21.000000, 31.500000) rotate(-90.000000) translate(-21.000000, -31.500000) ">
                                        <use fill="black" fill-opacity="1" filter="url(#filter-2)"
                                             xlink:href="#path-1"></use>
                                        <use fill="#EEEEEE" xlink:href="#path-1" id="bg1"></use>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        <div class="cont--notice-left">
            <section class="cont-slider">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(slide,index) in featuredDatas" :key="index" class="wrap-sl"
                                  :style="{'background-image':'url('+slide.FeaturedImgUrl+')'}">
                        <img :src="slide.Tags | badgeImg" alt="" class="img--badge">
                        <div class="btn--more" @click="getShowDetail(slide.postID, index)" v-if="slide.postID !==''">See
                            More
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </section>
        </div>
        <div class="cont--notice-right">
            <section class="cont--scroll">
                <div class="wrap--news" v-for="(item,index) in leftBannerDatas" v-if="item.NormalImgUrl !==''">
                    <img :src="item.Tags | badgeImg" alt="" class="img--badge">
                    <div class="wrap--img" :style="{'background-image':'url('+item.NormalImgUrl+')'}"></div>
                    <a href="#" class="cont--title-bar" @click="getShowDetail(item.postID, index)" v-if="item.outerLinkUrl ==''">
                        <div class="wrap--cate">
                            <p class="txt--cate" v-html="item.categoryName"></p>
                            <p class="txt--date" v-html="item.postDate"></p>
                        </div>
                        <div class="wrap--title">
                            <p class="txt--title" v-html="$options.filters.truncate(item.postTitle, 43)"></p>
                        </div>
                        <div class="wrap--icons">
                            <img :src="'./notice_ext/images/icons/go_inner.png'" alt="">
                        </div>
                    </a>
                    <a class="cont--title-bar" v-else :href="item.outerLinkUrl" target="_self">
                        <div class="wrap--cate">
                            <p class="txt--cate" v-html="item.categoryName"></p>
                            <p class="txt--date" v-html="item.postDate"></p>
                        </div>
                        <div class="wrap--title">
                            <p class="txt--title" v-html="$options.filters.truncate(item.postTitle, 43)"></p>
                        </div>
                        <div class="wrap--icons">
                            <img :src="'./notice_ext/images/icons/go_outer.png'" alt="">
                        </div>
                    </a>
                </div>
                <!--<div class="wrap&#45;&#45;btn"><div class="btn&#45;&#45;more">Load More</div></div>-->
            </section>
        </div>
    </div>
</template>

<script>
    import JQuery from 'jquery'

    let $ = JQuery;

    export default {
        name: 'NoticeSection',
        data() {
            return {
                isShowDetail: false,
                leftBannerDatas: [],
                nowClickNo: 0,
                innerPostDatas: [],
                featuredDatas: [],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                isPrevBtn: false,
                isNextBtn: false,
            }
        },
        mounted() {
            //this.detailLocBtn();
            this.getNewsPostUrl();
        },
        methods: {
	        getUrlParameter:function(sParam) {
		        var sPageURL = window.location.search.substring(1),
				        sURLVariables = sPageURL.split('&'),
				        sParameterName,
				        i;

		        for (i = 0; i < sURLVariables.length; i++) {
			        sParameterName = sURLVariables[i].split('=');

			        if (sParameterName[0] === sParam) {
				        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			        }
		        }
	        },
            detailLocBtn: function () {
                setTimeout(function () {
                    let viewportHei = $(window).height();
                    let contentTop = $('.wrap--detail-top')[0].scrollHeight;
                    let contentMid = $('.wrap--detail-mid')[0].scrollHeight;
                    let contentBt = $('.wrap--detail-bt')[0].scrollHeight;
                    let contentHei = contentTop + contentMid;
                   // console.log(viewportHei, contentHei)
                    if (contentHei >= viewportHei) {
                       // console.log(viewportHei <= contentHei)
                        $('.wrap--detail-bt').css({'top': (contentHei + 20)})
                    } else {
                        $('.wrap--detail-bt').css({'top': viewportHei - contentBt})
                    }

                }, 100);

            },
            getShowDetail: function (id, oriID) {
                let vm = this;
                console.log(id, oriID)
                vm.isPrevBtn = false;
                vm.isNextBtn = false;
	            vm.isShowDetail = false;

                if (id !== '') {
                    vm.nowClickNo = id;
                    vm.isShowDetail = true;
                    if (id == 0) {
                        vm.isPrevBtn = true;
                    }
                    if (id == (vm.innerPostDatas.length - 1)) {
                        vm.isNextBtn = true;
                    }
                    vm.detailLocBtn();
                } else {
                    vm.isShowDetail = false;
                    //window.open(vm.leftBannerDatas[oriID].outerLinkUrl, '_blank');
                    //location.href=vm.leftBannerDatas[oriID].outerLinkUrl
                }
            },

            gotoPostPrev: function (id) {
                let vm = this;
                vm.isPrevBtn = false;
                vm.isNextBtn = false;
                if (id > 0) {
                    vm.nowClickNo--
                    if (vm.nowClickNo == 0) {
                        vm.isPrevBtn = true;
                    }
                } else {
                    vm.nowClickNo = 0
                }

                vm.detailLocBtn();
            },
            gotoPostNext: function (id) {
                let vm = this;
                vm.isPrevBtn = false;
                vm.isNextBtn = false;
                if (id < (vm.innerPostDatas.length - 1)) {
                    vm.nowClickNo++
                    vm.isNextBtn = false;
                    if (vm.nowClickNo === (vm.innerPostDatas.length - 1)) {
                        vm.isNextBtn = true;
                    }
                } else {
                    vm.nowClickNo = (vm.innerPostDatas.length - 1);
                }
                vm.detailLocBtn();
            },
            getNewsPostUrl: function () {
                let vm = this;
	            let paramVer=this.getUrlParameter('ver') | '';
                let linkUrl = `./notice_ext/notice_data_${paramVer}.txt`;
                this.$http.get(linkUrl)
                    .then(function (res) {
                        //console.log('clan', res.body.ResultCode[0])
                        let Code = res.body.ResultCode[0].Code;
                        let Data = res.body.noticeData;
                        //console.log('code1', Code)
                        if (Code === "10000") {
                            //3개씩 끊기
                            //1:hot,2:new,3:sale,4:update
                            vm.leftBannerDatas = Data
                            //console.log('ori', vm.leftBannerDatas)
                            var insNo = 0
                            for (let i in Data) {
                                vm.leftBannerDatas[i].postID = '';
                                if (Data[i].outerLinkUrl === '') {
                                    vm.leftBannerDatas[i].postID = insNo++;
                                    vm.innerPostDatas.push(vm.leftBannerDatas[i]);
                                }
                                if (Data[i].Featured == 'Y') {
	                                vm.featuredDatas.push(vm.leftBannerDatas[i]);
                                }
                            }
                        }
                    })
                    .catch(function (err) {

                    })
                    .finally(function () {
                       // console.log("finally finished gists");
                    })
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            truncate: function (value, length) {
                //console.log(value);
                return value.slice(0, length) + (length < value.length ? '...' : '');
            },
            badgeImg: function (value) {
                //console.log(value)
                switch (value) {
                    case '1':
                        return './notice_ext/images/icons/tag-new.png';
                        break;
                    case '2':
                        return './notice_ext/images/icons/tag-hot.png';
                        break;
                    case '3':
                        return './notice_ext/images/icons/tag-sale.png';
                        break;
                    case '4':
                        return './notice_ext/images/icons/tag-update.png';
                        break;
                    default :
                        return '';
                        break;
                }
            }
        },
    }
</script>

<style lang="scss">
    @import '../assets/css/global';

    .notice--system {
        width: 100%;
        height: 100%;
        @include flex-style(center, center);
        position: relative;

        .cont--notice-detail {
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;
            overflow-x: hidden;
            overflow-y: auto;
            overscroll-behavior-y: contain;
            width: 100%;
            height: 100%;
            background-color: #132031;

            .wrap--detail-top {
                @include flex-style(center, center);
                position: relative;
                width: 100%;
                height: 38vh;
                border-bottom: 2px solid orange;
                .img--badge {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 10vh;
                    height: auto;
                }

                .top--title {
                    padding-left: 12vh;
                    padding-right: 10vh;
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-size: 100vw 60vh;
                    background-repeat: no-repeat;
                    @include flex-style(center, flex-start);
                    flex-direction: column;

                    .txt--date {
                        color: orange;
                        font-family: 'Rajdhani', sans-serif;
                        font-size: 4vh;
                        font-weight: 600;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                        background-color: rgba(#000, 0.5);
                        padding:5px;
                        b{
                            font-weight: bold;
                        }
                    }

                    .txt--title {
                        color: #FFFFFF;
                        font-family: 'Rajdhani', sans-serif;
                        font-size: 2rem;
                        font-weight: 700;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                        text-align: left;
                        background-color: rgba(#000, 0.5);
                        padding:5px;
                        b{
                            font-weight: bold;
                        }
                    }
                }
            }

            .wrap--detail-mid {
                width: 100%;
                @include flex-style(flex-start, flex-start);

                .txt--context {
                    padding: 1.4rem;
                    color: #eee;
                    font-family: 'Rajdhani', sans-serif;
                    font-size: 1.4rem;
                    font-weight: 500;
                    line-height: 1.8rem;
                    text-align: left;
                    b{
                        font-weight: bold;
                    }
                }
            }

            .wrap--detail-bt {
                width: 100%;
                @include flex-style(center, center);
                position: absolute;
                bottom: 0;
                left: 0;

                .btn--home {
                    cursor: pointer;
                    height: 12vh;
                    width: 10%;
                    background: linear-gradient(to bottom, #bc9627 0%, #a07310 50%, #d6b62d 100%);
                    border: 1px solid tan;
                    @include flex-style(center, center);

                    p {
                        padding-top: 2px;
                        color: #EEEEEE;
                        font-family: 'Rajdhani', sans-serif;
                        font-size: 4vh;
                        font-weight: 600;
                        text-shadow: 1px 1px 0 0 #000000;
                    }

                    &:hover, &:focus {
                        background: linear-gradient(to bottom, #efc961 0%, #edae10 48%, #efc961 100%);
                        transition: all .3s ease-in;

                        p {
                            color: #a07310;
                            transition: all .3s ease-in;
                        }
                    }
                }

                .btn--prev {
                    cursor: pointer;
                    height: 12vh;
                    width: 45%;
                    background: linear-gradient(to bottom, #bc9627 0%, #a07310 50%, #d6b62d 100%);
                    border: 1px solid tan;
                    @include flex-style(center, center);

                    svg {
                        width: 4vh;
                        height: auto;

                        #bg0 {
                            fill: white;
                            transition: all .3s ease-out;
                        }
                    }

                    p {
                        margin-left: 1rem;
                        padding-top: 2px;
                        color: #EEEEEE;
                        font-family: 'Rajdhani', sans-serif;
                        font-size: 8vh;
                        font-weight: 600;
                        text-shadow: 1px 1px 0 0 #000000;
                    }

                    &:hover, &:focus {
                        background: linear-gradient(to bottom, #efc961 0%, #edae10 48%, #efc961 100%);
                        transition: all .3s ease-in;

                        svg {
                            #bg0 {
                                fill: #a07310;
                                transition: all .3s ease-in;
                            }
                        }

                        p {
                            color: #a07310;
                            transition: all .3s ease-in;
                        }
                    }
                }


                .btn--next {
                    cursor: pointer;
                    height: 12vh;
                    width: 45%;
                    background: linear-gradient(to bottom, #bc9627 0%, #a07310 50%, #d6b62d 100%);
                    border: 1px solid tan;
                    @include flex-style(center, center);
                    transition: all .3s ease-out;

                    svg {
                        width: 4vh;
                        height: auto;
                        transform: rotate(180deg);

                        #bg1 {
                            fill: white;
                            transition: all .3s ease-out;
                        }
                    }

                    p {
                        margin-right: 1rem;
                        padding-top: 2px;
                        color: #EEEEEE;
                        font-family: 'Rajdhani', sans-serif;
                        font-size: 8vh;
                        font-weight: 600;
                        text-shadow: 1px 1px 0 0 #000000;
                        transition: all .3s ease-out;
                    }

                    &:hover, &:focus {
                        background: linear-gradient(to bottom, #efc961 0%, #edae10 48%, #efc961 100%);
                        transition: all .3s ease-in;

                        svg {
                            #bg1 {
                                fill: #a07310;
                                transition: all .3s ease-in;
                            }
                        }

                        p {
                            color: #a07310;
                            transition: all .3s ease-in;
                        }
                    }
                }

                .disablePrev {
                    opacity: 0.5;
                    pointer-events: none;

                }

                .disableNext {
                    opacity: 0.5;
                    pointer-events: none;
                }
            }

        }

        .cont--notice-left {
            width: 45%;
            height: 100%;
            background-color: black;
            @include flex-style(center, center);

            .cont-slider {
                width: 100%;
                height: 100%;

                .wrap-sl {
                    width: 100%;
                    height: 100vh;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 47vw 100vh;
                    @include flex-style(center, flex-end);
                    position: relative;

                    .img--badge {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: auto;
                        height: 10vh;
                    }

                    .btn--more {
                        cursor: pointer;
                        margin-bottom: 10vh;
                        height: 10vh;
                        width: 20vw;
                        border: 1px solid rgba(244, 244, 244, 0.53);
                        background: linear-gradient(0deg, #B78B09 0%, #A07310 53.59%, #B1920D 100%);

                        color: #EEEEEE;
                        font-family: 'Rajdhani', sans-serif;

                        font-size: 5.5vh;
                        font-weight: 700;
                        line-height: 5.5vh;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                        @include flex-style(center, center);
                        transition: all .3s ease-out;

                        &:hover, &:focus {
                            background: linear-gradient(to bottom, #efc961 0%, #edae10 48%, #efc961 100%);
                            color: #a07310;
                            transition: all .3s ease-in;
                        }
                    }
                }

                .swiper-pagination {
                    .swiper-pagination-bullet {
                        height: 1vh;
                        width: 3vw;
                        border-radius: 0;
                        background-color: rgba(216, 216, 216,1);
                    }

                    .swiper-pagination-bullet-active {
                        opacity: 1;
                        background-color: #D8D8D8;
                    }
                }
            }
        }

        .cont--notice-right {
            width: 55%;
            height: 100%;
            background: linear-gradient(134.72deg, #12111B 0%, #4D5E9C 100%);
            @include flex-style(center, center);

            .cont--scroll {
                margin-top: 0;
                margin-right: 10px;
                margin-left: 10px;
                margin-bottom: 0;
                width: 100%;
                height: 100%;
                overflow-x: hidden;
                overflow-y: scroll;
                -webkit-overflow-scrolling: touch;
                overscroll-behavior-y: contain;

                .wrap--news {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    width: 100%;
                    height: 55vh;
                    @include flex-style(center, center);
                    flex-direction: column;
                    position: relative;
                    border: 1px solid #000000;
                    .img--badge {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: auto;
                        height: 8vh;
                    }

                    .wrap--img {
                        width: 100%;
                        height: 60%;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 54vw 35vh;
                    }

                    .cont--title-bar {
                        height: 40%;
                        width: 100%;
                        border-top: 1px solid #000000;
                        background-color: #1E344E;
                        position: relative;
                        text-decoration-line: none;

                        .wrap--cate {
                            margin-top: 3vh;
                            margin-left: 3vh;
                            @include flex-style(flex-start, center);
                            height: 10%;

                            .txt--cate {
                                color: #F1A441;
                                font-family: 'Rajdhani', sans-serif;
                                letter-spacing: -1;
                                font-size: 3.5vh;
                                font-weight: 700;
                                line-height:3.6vh;
                                b{
                                    font-weight: bold;
                                }
                            }
                            .txt--date {
                                margin-left: 10px;
                                color: #eee;
                                font-family: 'Rajdhani', sans-serif;
                                font-size: 3.5vh;
                                font-weight: 500;
                                line-height: 3.6vh;
                                b{
                                    font-weight: bold;
                                }
                            }
                        }

                        .wrap--title {
                            @include flex-style(flex-start, center);
                            height: 65%;
                            margin-left: 3vh;
                            margin-right: 4vh;

                            .txt--title {
                                color: #fff;
                                font-family: 'Rajdhani', sans-serif;
                                font-size: 6vh;
                                font-weight: 700;
                                line-height: 6.2vh;
                                text-align: left;
                                word-break: break-all;
                                b{
                                    font-weight: bold;
                                }
                            }
                        }

                        .wrap--icons {
                            position: absolute;
                            right: 8px;
                            bottom: 8px;

                            img {
                                width: 3vw;
                                height: 3vw;
                            }

                        }
                    }

                }

                .wrap--btn {
                    margin-top: 20px;
                    margin-bottom: 20px;
                    @include flex-style(center, center);

                    .btn--more {
                        height: 10vh;
                        width: 20vw;
                        border: 1px solid rgba(244, 244, 244, 0.53);
                        border-radius: 5px;
                        background: linear-gradient(0deg, #B78B09 0%, #A07310 53.59%, #B1920D 100%);

                        color: #EEEEEE;
                        font-family: 'Rajdhani', sans-serif;
                        font-size: 4.6vh;
                        font-weight: 700;
                        line-height: 4.6vh;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                        @include flex-style(center, center)
                    }
                }
            }
        }
    }

    @include tablet-hei-750() {
        .notice--system {
            .cont--notice-detail {
                .wrap--detail-top {
                    height: 34vh;
                    .img--badge {
                        width: 10vh;
                        height: 10vh;
                    }
                    .top--title {
                        padding-left: 6vh;

                        .txt--date {
                            color: orange;
                            font-size: 4vh;
                        }

                        .txt--title {
                            font-size: 6vh;
                        }
                    }
                }
                .wrap--detail-mid {
                    .txt--context {
                        padding: 5vh;
                        font-size: 4vh;
                        line-height: 4.2vh;
                    }
                }

                .wrap--detail-bt {
                    .btn--home {
                        height: 8vh;

                        p {
                            padding-top: 2px;
                            font-size: 3vh;
                            font-weight: 600;
                            text-shadow: 1px 1px 0 0 #000000;
                        }

                        &:hover, &:focus {
                            background: linear-gradient(to bottom, #efc961 0%, #edae10 48%, #efc961 100%);
                            transition: all .3s ease-in;

                            p {
                                color: #a07310;
                                transition: all .3s ease-in;
                            }
                        }
                    }

                    .btn--prev {
                        cursor: pointer;
                        height: 8vh;

                        svg {
                            width: 2vh;
                            height: auto;

                            #bg0 {
                                fill: white;
                                transition: all .3s ease-out;
                            }
                        }

                        p {
                            margin-left: 1rem;
                            padding-top: 2px;
                            color: #EEEEEE;
                            font-family: 'Rajdhani', sans-serif;
                            font-size: 5vh;
                            font-weight: 600;
                            text-shadow: 1px 1px 0 0 #000000;
                        }

                        &:hover, &:focus {
                            background: linear-gradient(to bottom, #efc961 0%, #edae10 48%, #efc961 100%);
                            transition: all .3s ease-in;

                            svg {
                                #bg0 {
                                    fill: #a07310;
                                    transition: all .3s ease-in;
                                }
                            }

                            p {
                                color: #a07310;
                                transition: all .3s ease-in;
                            }
                        }
                    }


                    .btn--next {
                        cursor: pointer;
                        height: 8vh;
                        width: 45%;
                        background: linear-gradient(to bottom, #bc9627 0%, #a07310 50%, #d6b62d 100%);
                        border: 1px solid tan;
                        @include flex-style(center, center);
                        transition: all .3s ease-out;

                        svg {
                            width: 2vh;
                            height: auto;
                            transform: rotate(180deg);

                            #bg1 {
                                fill: white;
                                transition: all .3s ease-out;
                            }
                        }

                        p {
                            margin-right: 1rem;
                            padding-top: 2px;
                            color: #EEEEEE;
                            font-family: 'Rajdhani', sans-serif;
                            font-size: 5vh;
                            font-weight: 600;
                            text-shadow: 1px 1px 0 0 #000000;
                            transition: all .3s ease-out;
                        }

                        &:hover, &:focus {
                            background: linear-gradient(to bottom, #efc961 0%, #edae10 48%, #efc961 100%);
                            transition: all .3s ease-in;

                            svg {
                                #bg1 {
                                    fill: #a07310;
                                    transition: all .3s ease-in;
                                }
                            }

                            p {
                                color: #a07310;
                                transition: all .3s ease-in;
                            }
                        }
                    }

                    .disablePrev {
                        opacity: 0.5;
                        pointer-events: none;

                    }

                    .disableNext {
                        opacity: 0.5;
                        pointer-events: none;
                    }
                }

            }

            .cont--notice-left {
                .cont-slider {
                    .wrap-sl {
                        width: 100%;
                        height: 100vh;

                        .img--badge {
                            height: 15vh;
                        }

                        .btn--more {
                            margin-bottom: 10vh;
                            height: 8vh;
                            width: 18vw;
                            font-size: 4vh;
                            line-height: 3vh;
                        }
                    }
                }
            }

            .cont--notice-right {
                .cont--scroll {
                    .wrap--news {
                        .img--badge {
                        }

                        .wrap--img {
                        }

                        .cont--title-bar {
                            .wrap--cate {
                                .txt--cate {
                                }

                                .txt--date {
                                }
                            }

                            .wrap--title {
                                @include flex-style(flex-start, center);
                                height: 65%;
                                margin-left: 3vh;
                                margin-right: 4vh;

                                .txt--title {
                                    font-size: 5vh;
                                    line-height: 5.5vh;
                                }
                            }

                            .wrap--icons {
                            }
                        }
                    }

                    .wrap--btn {
                        margin-top: 5vh;
                        margin-bottom: 5vh;

                        .btn--more {
                            height: 8vh;
                            width: 18vw;
                            font-size: 3.8vh;
                            line-height: 4.6vh;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                        }
                    }
                }
            }
        }
    }

</style>
