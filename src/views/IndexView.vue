<template>
    <div class="containers">
        <div class="userSlide fl">
            <div class="userInf">
                <div class="ico">
                    <img :src="c_pic" class="btn-my" alt="" />
                </div>
                <div class="user-cont">
                    <div class="user-slide">
                        <div class="intr">
                            <div class="imgs">
                                <img :src="getImageUrl('+ c_pic +')" class="btn-my" alt="" />
                            </div>
                            <div class="txts">
                                <p class="txt-name btn-my">昵称：{{ c_name }}</p>
                                <p>
                                    <em> id:{{ id }}</em>
                                </p>
                            </div>
                        </div>
                        <div class="state">
                            <p>卡密：{{ c_user }}</p>
                            <p>到期时间：{{ c_dutime }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list">
                <ul>
                    <li>
                        <div class="ico">
                            <span class="iconfont icon-xiaoxi"></span>
                        </div>
                        <div class="txt">消息</div>
                        <div class="mess">消息</div>
                    </li>
                    <li class="btn-code" @click="showQrCode">
                        <div class="ico">
                            <span class="iconfont icon-erweima_o"></span>
                        </div>
                        <div class="txt">二维码</div>
                        <div class="mess">二维码</div>
                    </li>
                    <li>
                        <div class="ico">
                            <span class="iconfont icon-zhuanshu"></span>
                        </div>
                        <div class="txt">专属二维码</div>
                        <div class="mess">专属二维码</div>
                    </li>
                    <li class="btn-receive" @click="getRecepListFunc">
                        <div class="ico">
                            <span class="iconfont icon-jiedaishenqing"></span>
                        </div>
                        <div class="txt">接待</div>
                        <div class="mess">接待</div>
                    </li>
                    <li class="btn-blacklist" @click="getBlackListFunc">
                        <div class="ico">
                            <span class="iconfont icon-heimingdan"></span>
                        </div>
                        <div class="txt">黑名单</div>
                        <div class="mess">黑名单</div>
                    </li>
                    <li class="btn-mass" @click="getMassListFunc">
                        <div class="ico">
                            <span class="iconfont icon-icon"></span>
                        </div>
                        <div class="txt">群发</div>
                        <div class="mess">群发</div>
                    </li>
                    <li class="btn-greet" @click="getSayListFunc">
                        <div class="ico">
                            <span class="iconfont icon-dazhaohu"></span>
                        </div>
                        <div class="txt">打招呼</div>
                        <div class="mess">打招呼</div>
                    </li>
                    <li class="btn-fast" @click="getFastListFunc">
                        <div class="ico">
                            <span class="iconfont icon-kuaijiehuifuguanli"></span>
                        </div>
                        <div class="txt">快捷回复</div>
                        <div class="mess">快捷回复</div>
                    </li>
                    <li class="btn-QA" @click="getQualistFunc">
                        <div class="ico">
                            <span class="iconfont icon-zhinengsuanfa"></span>
                        </div>
                        <div class="txt">智能问答</div>
                        <div class="mess">智能问答</div>
                    </li>
                    <li class="btn-statistics" @click="getStatiFunc">
                        <div class="ico">
                            <span class="iconfont icon-tongji"></span>
                        </div>
                        <div class="txt">统计</div>
                        <div class="mess">统计</div>
                    </li>
                    <li>
                        <div class="ico">
                            <span class="iconfont icon-bangzhu"></span>
                        </div>
                        <div class="txt">帮助</div>
                        <div class="mess">帮助</div>
                    </li>
                    <li>
                        <div class="ico">
                            <span class="iconfont icon-shezhi"></span>
                        </div>
                        <div class="txt">设置</div>
                        <div class="mess">设置</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="userList fl">
            <div class="userButton">
                <div class="rows">
                    <button class="btn-color1" @click="addGroupClick">新建群聊</button>
                    <!-- <button class="btn-color2">功能键1</button>
          <button class="btn-color3">功能键2</button> -->
                </div>
                <div class="rows">
                    <button class="btn-color4" @click="delSessionFunc(3)">删除全部</button>
                    <button class="btn-color5" @click="delSessionFunc(1)">删除3天前</button>
                    <button class="btn-color6" @click="delSessionFunc(2)">删除5天前</button>
                </div>
                <div class="rows">
                    <button class="btn-color7">全部接待</button>
                    <button class="btn-color8">未读消息</button>
                    <!-- <button class="btn-color9">功能键1</button> -->
                </div>
            </div>
            <div class="userCont" @scroll="userHandlerScroll($event)" id="userlist_scroll">
                <div class="rightMenu" v-if="isShowRightMenu" :style="{ left: showRightMenuPos.x + 'px', top: showRightMenuPos.y + 'px' }">
                    <ul>
                        <li @click="setTopFunc"><a href="javascript:;" class="menu_a">置顶</a></li>
                        <li @click="setUnTopFunc"><a href="javascript:;" class="menu_a">取消置顶</a></li>
                        <li @click="setNoteFunc"><a href="javascript:;" class="menu_a">修改备注</a></li>
                        <li @click="!isGroupValue ? addBlackFunc() : editGroup()">
                            <a href="javascript:;" class="menu_a">{{ !isGroupValue ? '加入黑名单' : '修改信息' }}</a>
                        </li>
                        <li v-if="rightMenuUserModel.c_type === 1" @click="delGroupFunc"><a href="javascript:;" class="menu_a">解散群聊</a></li>
                        <li @click="delChatFunc"><a href="javascript:;" class="menu_a">清空聊天记录</a></li>
                        <li @click="refreshSessList"><a href="javascript:;" class="menu_a">刷新</a></li>
                    </ul>
                </div>
                <div class="userTabs dialogue show">
                    <ul id="session_users">
                        <li
                            :class="{ online: item.c_online == true, 'off-line': item.c_online == false, active: selectUser.c_identity == item.c_identity }"
                            v-for="(item, index) in sessList.list"
                            :key="index"
                            @click="userClickHandler(item)"
                            @contextmenu.prevent="priChatRightClick($event, item)"
                        >
                            <!-- selectUser.c_identity == item.c_identity ? 'active' : ''    [(item.c_online == 1 ? 'online' : 'off-line') ] -->
                            <i class="btn-close"></i>
                            <div class="imgs fl">
                                <img :src="item.c_pic" alt="" />
                                <div class="mess" v-if="item.c_read > 0">{{ item.c_read }}</div>
                            </div>
                            <div class="intr fr">
                                <div class="text fl">
                                    <div class="user">
                                        <div style="display: flex; justify-content: flex-start; width: 100%">
                                            <span style="color: red; font-weight: bold" v-if="item.c_top">置顶</span>
                                            <span style="color: red; font-weight: bold" v-if="item.c_top">-</span>
                                            <span style="color: blue" v-if="item.c_note">{{ item.c_note }}</span>
                                            <span style="color: blue; font-weight: bold" v-if="item.c_note">-</span>
                                            <span> {{ item.c_nick }}</span>
                                        </div>
                                        <i>{{ item.c_type == 0 ? '私聊' : '群组' }}</i>
                                    </div>
                                    <div class="txts">{{ getMsgType(item.lastmsg) == 'text' ? item.lastmsg : getMsgType(item.lastmsg) }}</div>
                                </div>
                                <div class="time fr">{{ item.c_time }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="userTabs userIntr">
                    <ul id="all_users">
                        <li class="online acti">
                            <i class="btn-close"></i>
                            <div class="imgs fl">
                                <img src="../assets/img/441e89_200x200.jpg" alt="" />
                            </div>
                            <div class="intr fr">
                                <div class="text fl">
                                    <div class="name">游客20227125625</div>
                                    <div class="nums">
                                        <div class="txt fl">积分：<span>2869</span></div>
                                        <div class="txt fl">消费：<em>6965</em></div>
                                    </div>
                                </div>
                                <div class="time fr">12月16日 14:19</div>
                            </div>
                        </li>
                        <li class="online">
                            <i class="btn-close"></i>
                            <div class="imgs fl">
                                <img src="../assets/img/25a639_200x200.jpg" alt="" />
                            </div>
                            <div class="intr fr">
                                <div class="text fl">
                                    <div class="name">游客20227125625</div>
                                    <div class="nums">
                                        <div class="txt fl">积分：<span>2869</span></div>
                                        <div class="txt fl">消费：<em>6965</em></div>
                                    </div>
                                </div>
                                <div class="time fr">12月16日 14:19</div>
                            </div>
                        </li>
                        <li class="online">
                            <i class="btn-close"></i>
                            <div class="imgs fl">
                                <img src="../assets/img/441e89_200x200.jpg" alt="" />
                            </div>
                            <div class="intr fr">
                                <div class="text fl">
                                    <div class="name">游客20227125625</div>
                                    <div class="nums">
                                        <div class="txt fl">积分：<span>2869</span></div>
                                        <div class="txt fl">消费：<em>6965</em></div>
                                    </div>
                                </div>
                                <div class="time fr">12月16日 14:19</div>
                            </div>
                        </li>
                        <li class="busy">
                            <i class="btn-close"></i>
                            <div class="imgs fl">
                                <img src="../assets/img/441e89_200x200.jpg" alt="" />
                            </div>
                            <div class="intr fr">
                                <div class="text fl">
                                    <div class="name">游客20227125625</div>
                                    <div class="nums">
                                        <div class="txt fl">积分：<span>2869</span></div>
                                        <div class="txt fl">消费：<em>6965</em></div>
                                    </div>
                                </div>
                                <div class="time fr">12月16日 14:19</div>
                            </div>
                        </li>
                        <li class="off-line">
                            <i class="btn-close"></i>
                            <div class="imgs fl">
                                <img src="../assets/img/25a639_200x200.jpg" alt="" />
                            </div>
                            <div class="intr fr">
                                <div class="text fl">
                                    <div class="name">游客20227125625</div>
                                    <div class="nums">
                                        <div class="txt fl">积分：<span>2869</span></div>
                                        <div class="txt fl">消费：<em>6965</em></div>
                                    </div>
                                </div>
                                <div class="time fr">12月16日 14:19</div>
                            </div>
                        </li>
                        <li class="online">
                            <i class="btn-close"></i>
                            <div class="imgs fl">
                                <img src="../assets/img/25a639_200x200.jpg" alt="" />
                            </div>
                            <div class="intr fr">
                                <div class="text fl">
                                    <div class="name">游客20227125625</div>
                                    <div class="nums">
                                        <div class="txt fl">积分：<span>2869</span></div>
                                        <div class="txt fl">消费：<em>6965</em></div>
                                    </div>
                                </div>
                                <div class="time fr">12月16日 14:19</div>
                            </div>
                        </li>
                        <li class="online">
                            <i class="btn-close"></i>
                            <div class="imgs fl">
                                <img src="../assets/img/441e89_200x200.jpg" alt="" />
                            </div>
                            <div class="intr fr">
                                <div class="text fl">
                                    <div class="name">游客20227125625</div>
                                    <div class="nums">
                                        <div class="txt fl">积分：<span>2869</span></div>
                                        <div class="txt fl">消费：<em>6965</em></div>
                                    </div>
                                </div>
                                <div class="time fr">12月16日 14:19</div>
                            </div>
                        </li>
                        <li class="busy">
                            <i class="btn-close"></i>
                            <div class="imgs fl">
                                <img src="../assets/img/441e89_200x200.jpg" alt="" />
                            </div>
                            <div class="intr fr">
                                <div class="text fl">
                                    <div class="name">游客20227125625</div>
                                    <div class="nums">
                                        <div class="txt fl">积分：<span>2869</span></div>
                                        <div class="txt fl">消费：<em>6965</em></div>
                                    </div>
                                </div>
                                <div class="time fr">12月16日 14:19</div>
                            </div>
                        </li>
                        <li class="off-line">
                            <i class="btn-close"></i>
                            <div class="imgs fl">
                                <img src="../assets/img/25a639_200x200.jpg" alt="" />
                            </div>
                            <div class="intr fr">
                                <div class="text fl">
                                    <div class="name">游客20227125625</div>
                                    <div class="nums">
                                        <div class="txt fl">积分：<span>2869</span></div>
                                        <div class="txt fl">消费：<em>6965</em></div>
                                    </div>
                                </div>
                                <div class="time fr">12月16日 14:19</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="containers-fr fr">
            <div class="content-welcome">
                <div class="intrs">
                    <div class="image">
                        <img src="../assets/img/967f82_118x88.png" alt="" />
                    </div>
                    <div class="txts">您好！欢迎您访问金弘客服系统</div>
                </div>
            </div>
            <div class="content-chat">
                <div class="chats fl">
                    <div class="shatConts" id="chat_content" ref="chatContent">
                        <div
                            style="text-align: center; color: #ccc; cursor: pointer; margin-top: 5px"
                            id="load_more"
                            @click="loadMoreClick"
                            v-if="getChatListQuery.isNext"
                        >
                            点击加载更多
                        </div>
                        <div style="text-align: center; color: #ccc; cursor: default; margin-top: 5px" id="load_more" v-else>没有更多数据了</div>

                        <div class="items" v-for="(item, index) in message" :key="index">
                            <div class="time">{{ item.time }}</div>
                            <div class="conts">
                                <div
                                    class="item"
                                    :class="[item2.chat_type == 1 ? 'item-reply' : '']"
                                    v-for="(item2, index2) in item.data"
                                    :key="index2"
                                >
                                    <div class="imgs">
                                        <img :src="item2.imgUrl" alt="" />
                                    </div>
                                    <div class="text" v-if="getMsgType(item2.msg) == '图片' || getMsgType(item2.msg) == '表情'">
                                        <div v-viewer v-html="convertChatMsg(item2.msg)"></div>
                                    </div>
                                    <div class="text" v-else-if="getMsgType(item2.msg) == '文件'">
                                        <pre v-html="convertChatMsg(item2.msg)"></pre>
                                    </div>
                                    <div class="text" v-else>
                                        <pre>{{ item2.msg }}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chatFunc">
                        <div class="function">
                            <div class="intr fl">
                                <div class="box fl">
                                    <i class="btn-emoji"></i>
                                    <div class="slide-bq">
                                        <div class="bq-conts scrollbar">
                                            <ul>
                                                <li>
                                                    <img src="../assets/img/bq/weixiao.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/xiaojiujie.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/deyi.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/aoman.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/baiyan.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/bishi.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/bizui.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/ciya.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/dabing.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/doge.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/fadai.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/fanu.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/haixiu.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/touxiao.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/lenghan.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/liulei.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/huaixiao.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/jie.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/jingxi.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/jingya.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/keai.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/kelian.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/koubi.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/ku.gif" alt="" />
                                                </li>

                                                <li>
                                                    <img src="../assets/img/bq/kun.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/leiben.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/liuhan.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/nanguo.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/haqian.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/saorao.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/tuosai.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/wunai.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/qinqin.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/qiudale.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/wozuimei.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/xia.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/xiaoku.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/zhouma.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/zhayanjian.gif" alt="" />
                                                </li>

                                                <li>
                                                    <img src="../assets/img/bq/zaijian.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/zuohengheng.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/shui.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/zhuakuang.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/tiaopi.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/zhemo.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/yun.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/xieyanxiao.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/kuaikule.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/cahan.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/weiqu.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/shui.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/tu.gif" alt="" />
                                                </li>

                                                <li>
                                                    <img src="../assets/img/bq/zhayanjian.gif" alt="" />
                                                </li>

                                                <li>
                                                    <img src="../assets/img/bq/piezui.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/penxue.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/yiwen.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/xu.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/yinxian.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/youhengheng.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/daku.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/guzhang.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/hanxiao.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/se.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/fendou.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/qiaoda.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/ganga.gif" alt="" />
                                                </li>

                                                <li>
                                                    <img src="../assets/img/bq/haobang.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/chi.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/kulou.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/jingkong.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/aixin.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/pijiu.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/xiaoyanger.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/shuai.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/shouqiang.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/xigua.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/yangtuo.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/youling.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/bangbangtang.gif" alt="" />
                                                </li>

                                                <li>
                                                    <img src="../assets/img/bq/lanqiu.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/juhua.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/hexie.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/hecai.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/gouyin.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/dan.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/caidao.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/baojin.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/baoquan.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/aini.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/qiang.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/OK.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/quantou.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/shengli.gif" alt="" />
                                                </li>
                                                <li>
                                                    <img src="../assets/img/bq/woshou.gif" alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="box fl box-picture" id="select_send_img" @click="msgUploadClick">
                                    <i class="btn-picture"></i>
                                    <input type="file" ref="msgFileRef" style="display: none" @change="msgFileChange" />
                                </div>
                                <div class="box fl" v-if="false">
                                    <i class="btn-mess"></i>
                                    <div class="slide-mess">
                                        <p>您好，欢迎光临，有什么可以帮助您的？</p>
                                        <p>稍等一下，我这边帮您查看一下</p>
                                        <p>您的预算是多少呢</p>
                                        <p>我们这边后台已经在处理中，情稍微等待一下</p>
                                    </div>
                                </div>
                                <div class="box fl" @click="groupQrCodeClick" v-if="isGroupValue">
                                    <i class="btn-conver"></i>
                                </div>
                            </div>
                        </div>
                        <div class="textarea">
                            <textarea name="" id="msg_cont" cols="0" rows="0" placeholder="请输入对话消息" v-model="send_msg_cont"></textarea>
                        </div>
                        <div class="button">
                            <button id="send_msg" @click="sendMsgClick">发送</button>
                        </div>
                    </div>
                </div>
                <div class="sidebarData fl">
                    <div class="userData">
                        <div class="user">
                            <div class="imgs fl">
                                <img :src="selectUser.c_pic" alt="" />
                            </div>
                            <div class="text fl">
                                <span>{{ selectUser.c_nick }}</span>
                                <i>PC端</i>
                            </div>
                        </div>
                        <div class="intrs" v-if="!isGroupValue">
                            <div class="rows">
                                <div class="labs fl">MID</div>
                                <div class="txts fl" id="cur_balance">{{ selectUser.c_identity }}</div>
                            </div>
                            <div class="rows">
                                <div class="labs fl">昵称</div>
                                <div class="txts fl" id="cur_balance">{{ selectUser.c_nick }}</div>
                            </div>
                            <div class="rows">
                                <div class="labs fl">在线状态</div>
                                <div class="txts fl" id="cur_consumption"></div>
                            </div>
                            <div class="rows">
                                <div class="labs fl">登陆IP</div>
                                <div class="txts fl" id="cur_online">{{ selectUser.c_ip }}</div>
                            </div>
                            <div class="rows">
                                <div class="labs fl">登陆地</div>
                                <div class="txts fl" id="cur_login_ip">{{ selectUser.c_addr }}</div>
                            </div>
                            <div class="rows">
                                <div class="labs fl">备注</div>
                                <div class="txts fl" id="cur_chat_note">{{ selectUser.c_note }}</div>
                            </div>
                        </div>
                        <div class="intrs" v-else>
                            <div class="rows">
                                <div class="labs fl">群名称</div>
                                <div class="txts fl" id="cur_balance">{{ selectUser.c_identity }}</div>
                            </div>
                            <div class="rows">
                                <div class="labs fl">群禁言</div>
                                <div class="txts fl" id="cur_balance">
                                    <el-switch @change="groupBannedSwitch" v-model="bannedState"></el-switch>
                                </div>
                            </div>
                            <div class="rows">
                                <div class="labs fl">群人数</div>
                                <div class="txts fl" id="cur_consumption"></div>
                            </div>
                            <div class="rows">
                                <div class="labs fl">群公告</div>
                                <div class="txts fl" id="cur_online">{{ selectUser.c_ip }}</div>
                            </div>

                            <div class="rows">
                                <div class="button">
                                    <button @click="editGroup">编辑信息</button>
                                    <button @click="openGroupMemberListBtnCLick">查看群成员</button>
                                </div>
                            </div>
                        </div>
                        <div class="fast">
                            <div class="title">
                                <span>快捷短语</span>
                                <button class="btn-adds"></button>
                            </div>
                            <div class="list">
                                <ul>
                                    <li v-for="item in fastList" :key="item.id" @click="fastItemClick(item)">{{ item.c_cont }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="alert">
        <div class="alert-bg"></div>
        <div class="alert-code">
            <div class="closes"></div>
            <div class="title">二维码</div>
            <div class="conts">
                <div class="links">访客链接：{{ QrState.url }}</div>
                <div class="imgs">
                    <img :src="QrCodeImg" alt="" />
                </div>
                <div class="button">
                    <button @click="setSessCodeFunc(0)">失效当前二维码</button>
                    <button @click="setSessCodeFunc(0)">重新生成二维码</button>
                </div>
                <div class="text">
                    <p>
                        【失效当前二维码】：会失效二维码的【过期值】，导致之前依然能正常使用的二维码也全部失效。【请谨慎操作该种方式生成二维码！！！】
                    </p>
                    <p>【重新生成二维码】：不会失效二维码的【过期值】，不会影响之前能正常使用的二维码。【推荐使用该种方式生成二维码】</p>
                    <p>
                        两种方式都会根据最新配置的二维码域名生成新二维码，请在需要重新生成二维码之前，自己扫码确认自己当前二维码是否能正常使用，若能正常使用则没必要重新生成二维码！！！
                    </p>
                </div>
            </div>
        </div>
        <div class="alert-content alert-receive">
            <div class="title">
                <span>我的接待</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="list">
                    <ul>
                        <li v-for="item in recepList" :key="item.id">
                            <div class="imgs fl">
                                <img :src="item.c_pic" alt="" />
                            </div>
                            <div class="text fl">
                                <span>{{ item.c_nick }}</span>
                                <a href="#">发消息</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="alert-content alert-blacklist">
            <div class="title">
                <span>黑名单</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="list">
                    <ul>
                        <li v-for="item in blackList" :key="item.id">
                            <div class="imgs fl">
                                <img :src="item.c_pic" alt="" />
                            </div>
                            <div class="text fl">
                                <span>{{ item.c_nick }}</span>
                                <a href="#" @click="cancelBlack(item)">取消拉黑</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="alert-content alert-mass">
            <div class="title">
                <span>我的群发</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="lists">
                    <ul>
                        <li v-for="item in massList" :key="item.id">
                            <div class="txts fl" v-if="item.c_cont">{{ item.c_cont }}</div>
                            <div class="imgs fl" v-if="item.c_pic">
                                <img :src="item.c_pic" alt="" />
                            </div>
                            <div class="func fr">
                                <span @click="startMassFunc(item)">群发</span>
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p @click="massMoveUp(item)">上移</p>
                                    <p @click="massMoveDown(item)">下移</p>
                                    <p class="edit-massTxt" @click="massEdit(item)">编辑</p>
                                    <p class="btn-del" @click="massDel(item)">删除</p>
                                </div>
                            </div>
                        </li>
                        <!-- <li>
              <div class="imgs fl">
                <img src="../assets/img/4b97db_303x304.jpg" alt="" />
              </div>
              <div class="func fr">
                <span>群发</span>
                <i class="btn-more"></i>
                <div class="btn-slide">
                  <p>上移</p>
                  <p>下移</p>
                  <p class="edit-massTxt">编辑</p>
                  <p class="btn-del">删除</p>
                </div>
              </div>
            </li> -->
                    </ul>
                </div>
                <div class="buttons">
                    <button class="btn-massTxt" @click="isMassAdd = true">新建文本群发</button>
                    <button @click="imgMassClick">新建图片群发</button>
                    <input type="file" ref="btnImgMassFile" id="btn_file" style="display: none" @change="uploadImgMass" />
                </div>
            </div>
        </div>
        <div class="alert-content alert-greet">
            <div class="title">
                <span>打招呼</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="lists">
                    <ul>
                        <li v-for="item in sayList" :key="item.id">
                            <div class="txts fl" v-if="!!item.c_cont">{{ item.c_cont }}</div>
                            <div class="imgs fl" v-else>
                                <img src="../assets/img/4b97db_303x304.jpg" alt="" />
                            </div>
                            <div class="func fr">
                                <span>开启</span>
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p @click="sayMoveUp(item)">上移</p>
                                    <p @click="sayMoveDown(item)">下移</p>
                                    <p class="edit-greet" @click="sayEdit(item)">编辑</p>
                                    <p class="btn-del" @click="sayDel(item)">删除</p>
                                </div>
                            </div>
                        </li>
                        <!-- <li>
              <div class="txts fl">aaa</div>
              <div class="func fr">
                <span>开启</span>
                <i class="btn-more"></i>
                <div class="btn-slide">
                  <p>上移</p>
                  <p>下移</p>
                  <p class="edit-greet">编辑</p>
                  <p class="btn-del">删除</p>
                </div>
              </div>
            </li>
            <li>
              <div class="txts fl">aaa</div>
              <div class="func fr">
                <span>开启</span>
                <i class="btn-more"></i>
                <div class="btn-slide">
                  <p>上移</p>
                  <p>下移</p>
                  <p class="edit-greet">编辑</p>
                  <p class="btn-del">删除</p>
                </div>
              </div>
            </li>
            <li>
              <div class="txts fl">aaa</div>
              <div class="func fr">
                <span>开启</span>
                <i class="btn-more"></i>
                <div class="btn-slide">
                  <p>上移</p>
                  <p>下移</p>
                  <p class="edit-greet">编辑</p>
                  <p class="btn-del">删除</p>
                </div>
              </div>
            </li> -->
                    </ul>
                </div>
                <div class="buttons">
                    <button class="btn-greetTxt" @click="isSayAdd = true">新建文本招呼</button>
                    <button @click="addSayImgClick">新建图片招呼</button>
                    <input type="file" ref="btnImgSayFile" style="display: none" @change="uploadImgSay" />
                </div>
            </div>
        </div>
        <div class="alert-content alert-fast">
            <div class="title">
                <span>快捷回复</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="list">
                    <ul>
                        <li v-for="item in fastList" :key="item.id">
                            <div class="sele fl">
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div class="text fl" v-if="!!item.c_cont">{{ item.c_cont }}</div>
                            <div class="text fl" v-else>
                                <img src="../assets/img/4b97db_303x304.jpg" alt="" />
                            </div>
                            <div class="func fr">
                                <span>群发</span>
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p @click="fastMoveUp(item)">上移</p>
                                    <p @click="fastMoveDown(item)">下移</p>
                                    <p class="edit-fastTxt" @click="fastEdit(item)">编辑</p>
                                    <p class="btn-del" @click="fastDel(item)">删除</p>
                                </div>
                            </div>
                        </li>
                        <!-- <li>
              <div class="sele fl">
                <input type="checkbox" name="" id="" />
              </div>
              <div class="text fl">啊啊啊</div>
              <div class="func fr">
                <span>群发</span>
                <i class="btn-more"></i>
                <div class="btn-slide">
                  <p>上移</p>
                  <p>下移</p>
                  <p class="edit-fastTxt">编辑</p>
                  <p class="btn-del">删除</p>
                </div>
              </div>
            </li>
            <li>
              <div class="sele fl">
                <input type="checkbox" name="" id="" />
              </div>
              <div class="text fl">
                <img src="../assets/img/4b97db_303x304.jpg" alt="" />
              </div>
              <div class="func fr">
                <span>群发</span>
                <i class="btn-more"></i>
                <div class="btn-slide">
                  <p>上移</p>
                  <p>下移</p>
                  <p class="edit-fastTxt">编辑</p>
                  <p class="btn-del">删除</p>
                </div>
              </div>
            </li> -->
                    </ul>
                </div>
            </div>
            <div class="buttons">
                <button class="btn-fastTxt" @click="isFastAdd = true">新建文本快捷回复</button>
                <button class="btn-pic" @click="addFastImgClick">新建图片快捷回复</button>
                <input type="file" ref="btnImgFastFile" style="display: none" @change="uploadImgFast" />
                <button class="btn-sele">批量发送选中</button>
            </div>
        </div>
        <div class="alert-content alert-QA">
            <div class="title">
                <span>智能问答</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="list">
                    <ul>
                        <!-- <li>
                            <div class="intr fl">
                                <div class="rows rows-q">
                                    <i>Q1:</i>
                                    <em>您好</em>
                                </div>
                                <div class="rows rows-a">
                                    <i>A1:</i>
                                    <em>您好</em>
                                </div>
                            </div>
                            <div class="func fr">
                                <span>开启</span>
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p>上移</p>
                                    <p>下移</p>
                                    <p class="edit-QA">编辑</p>
                                    <p class="btn-del">删除</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="intr fl">
                                <div class="rows rows-q">
                                    <i>Q2:</i>
                                    <em>在吗</em>
                                </div>
                                <div class="rows rows-a">
                                    <i>A2:</i>
                                    <em>在的</em>
                                </div>
                            </div>
                            <div class="func fr">
                                <span>开启</span>
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p>上移</p>
                                    <p>下移</p>
                                    <p class="edit-QA">编辑</p>
                                    <p class="btn-del">删除</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="intr fl">
                                <div class="rows rows-q">
                                    <i>Q3:</i>
                                    <em>1</em>
                                </div>
                                <div class="rows rows-a">
                                    <i>A3:</i>
                                    <em>2</em>
                                </div>
                            </div>
                            <div class="func fr">
                                <span>开启</span>
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p>上移</p>
                                    <p>下移</p>
                                    <p class="edit-QA">编辑</p>
                                    <p class="btn-del">删除</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="intr fl">
                                <div class="rows rows-q">
                                    <i>Q4:</i>
                                    <em>3</em>
                                </div>
                                <div class="rows rows-a">
                                    <i>A4:</i>
                                    <em>4</em>
                                </div>
                            </div>
                            <div class="func fr">
                                <span>开启</span>
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p>上移</p>
                                    <p>下移</p>
                                    <p class="edit-QA">编辑</p>
                                    <p class="btn-del">删除</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="intr fl">
                                <div class="rows rows-q">
                                    <i>Q5:</i>
                                    <em>5</em>
                                </div>
                                <div class="rows rows-a">
                                    <i>A5:</i>
                                    <em>6</em>
                                </div>
                            </div>
                            <div class="func fr">
                                <span>开启</span>
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p>上移</p>
                                    <p>下移</p>
                                    <p class="edit-QA">编辑</p>
                                    <p class="btn-del">删除</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="intr fl">
                                <div class="rows rows-q">
                                    <i>Q6:</i>
                                    <em>7</em>
                                </div>
                                <div class="rows rows-a">
                                    <i>A6:</i>
                                    <em>8</em>
                                </div>
                            </div>
                            <div class="func fr">
                                <span>开启</span>
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p>上移</p>
                                    <p>下移</p>
                                    <p class="edit-QA">编辑</p>
                                    <p class="btn-del">删除</p>
                                </div>
                            </div>
                        </li> -->
                        <li v-for="(item, index) in quaList" :key="item.id">
                            <div class="intr fl">
                                <div class="rows rows-q">
                                    <i>Q{{ index + 1 }}:</i>
                                    <em>{{ item.c_q }}</em>
                                </div>
                                <div class="rows rows-a">
                                    <i>A{{ index + 1 }}:</i>
                                    <em v-if="!!item.c_a">{{ item.c_a }}</em>
                                    <img v-else src="../assets/img/4b97db_303x304.jpg" alt="" />
                                </div>
                            </div>
                            <div class="func fr">
                                <span>开启</span>
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p @click="quaMoveUp(item)">上移</p>
                                    <p @click="quaMoveDown(item)">下移</p>
                                    <p class="edit-QA" @click="quaEdit(item)">编辑</p>
                                    <p class="btn-del" @click="quaDel(item)">删除</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="buttons">
                    <button class="btn-QATxt" @click="isQuaAdd = true">新建智能问答</button>
                </div>
            </div>
        </div>
        <div class="alert-content alert-statistics">
            <div class="title">
                <span>统计<em>统计近七天新增数据</em></span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="list">
                    <ul>
                        <li v-for="item in statiList" :key="item.id">
                            <div class="time fl">{{ item.time }}</div>
                            <div class="new fr">新增客户:{{ item.num }}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="alert-content alert-groupMemberlist">
            <div class="title">
                <span>群成员信息</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="list">
                    <ul>
                        <li v-for="item in groupList" :key="item.id">
                            <div class="sele fl">
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div class="text fl">{{ item.c_nick }}</div>
                            <div class="func fr">
                                <i class="btn-more"></i>
                                <div class="btn-slide">
                                    <p @click="bannedGroupMemberClick(item)">禁言</p>
                                    <p @click="delGroupMemberFunc(item)">移除群聊</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="alert-group-code">
            <div class="closes"></div>
            <div class="title">群聊二维码</div>
            <div class="conts">
                <div class="links">访客链接：{{ groupQrCode.url }}</div>
                <div class="imgs">
                    <img :src="groupQrCodeImg" alt="" />
                </div>
                <div class="button">
                    <button @click="refGroupCodeFunc()">重新生成二维码</button>
                </div>
            </div>
        </div>
    </div>
    <div class="alerts">
        <div class="alerts-bg"></div>
        <div class="alerts-slide alert-msssText">
            <div class="title">
                <span>我的群发</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="rows">
                    <div class="labs fl">消息内容</div>
                    <div class="text fr">
                        <textarea name="" id="" cols="0" rows="0" v-model="massModelValue"></textarea>
                    </div>
                </div>
                <div class="button">
                    <button @click="isMassAdd ? addMassFunc(0) : editMassFunc()">确定</button>
                </div>
            </div>
        </div>
        <div class="alerts-slide alerts-greetTxt">
            <div class="title">
                <span>打招呼</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="rows">
                    <div class="labs fl">消息内容</div>
                    <div class="text fr">
                        <textarea name="" id="" cols="0" rows="0" v-model="sayModelValue.cont"></textarea>
                    </div>
                </div>
                <div class="rows">
                    <div class="labs fl">状态</div>
                    <div class="text fr">
                        <div class="select">
                            <div class="box fl acti">
                                <input type="radio" checked name="open" id="" />
                                <label>开启</label>
                            </div>
                            <div class="box fl">
                                <input type="radio" name="open" id="" />
                                <label>关闭</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <button @click="isSayAdd ? addSayFunc(0) : editSayFunc()">确定</button>
                </div>
            </div>
        </div>
        <div class="alerts-slide alerts-fastTxt">
            <div class="title">
                <span>快捷回复</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="rows">
                    <div class="labs fl">消息内容</div>
                    <div class="text fr">
                        <textarea name="" id="" cols="0" rows="0" v-model="fastModelValue.msg"></textarea>
                    </div>
                </div>
                <div class="button">
                    <button @click="isFastAdd ? addFastFunc(0) : editFastFunc()">确定</button>
                </div>
            </div>
        </div>
        <div class="alerts-slide alerts-QATxt">
            <div class="title">
                <span>智能问答</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="rows">
                    <div class="labs fl">问题</div>
                    <div class="text fr">
                        <input type="text" placeholder="请输入问题" v-model="quaModelValue.q" />
                    </div>
                </div>
                <div class="rows">
                    <div class="labs fl">类型</div>
                    <div class="text fr">
                        <select name="" id="">
                            <option value="">文本</option>
                            <option value="">文本2</option>
                            <option value="">文本3</option>
                        </select>
                    </div>
                </div>
                <div class="rows">
                    <div class="labs fl">消息内容</div>
                    <div class="text fr">
                        <textarea name="" id="" cols="0" rows="0" v-model="quaModelValue.a"></textarea>
                    </div>
                </div>
                <div class="rows">
                    <div class="labs fl">状态</div>
                    <div class="text fr">
                        <div class="select">
                            <div class="box fl acti">
                                <input type="radio" checked name="open" id="" />
                                <label>开启</label>
                            </div>
                            <div class="box fl">
                                <input type="radio" name="open" id="" />
                                <label>关闭</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <button @click="isQuaAdd ? addQuaFunc(0) : editQuaFunc()">确定</button>
                </div>
            </div>
        </div>
        <div class="alerts-slide alerts-groupTxt">
            <div class="title">
                <span>{{ isGroupAdd ? '新建群聊' : '修改群聊-' + (groupModel.nick || selectUser.c_nick) }}</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="rows">
                    <div class="labs fl">群名称</div>
                    <div class="text fr">
                        <input type="text" placeholder="请输入群名称" v-model="groupModel.nick" />
                    </div>
                </div>
                <div class="rows" style="margin-bottom: 10px">
                    <div class="labs fl">群头像</div>
                    <div class="text fr" @click="groupImgClick">
                        <img :src="groupModel.pic" alt="" class="group-img" />
                        <input type="file" ref="groupImgFile" @change="groupImgFileChange" style="display: none" />
                    </div>
                </div>
                <div class="rows">
                    <div class="labs fl">群公告</div>
                    <div class="text fr">
                        <textarea name="" id="" cols="0" rows="0" v-model="groupModel.announ"></textarea>
                    </div>
                </div>
                <div class="rows">
                    <div class="labs fl">群禁言</div>
                    <div class="text fr">
                        <div class="select">
                            <div class="box fl" style="display: flex">
                                <input type="radio" id="banned_opened" name="groupbanned" value="1" v-model="groupModel.banned" />
                                <label for="banned_opened">开启</label>
                            </div>
                            <div class="box fl" style="display: flex">
                                <input type="radio" id="banned_closed" name="groupbanned" value="0" v-model="groupModel.banned" />
                                <label for="banned_closed">关闭</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <button @click="isGroupAdd ? addGroupFunc() : editGroupFunc()">确定</button>
                </div>
            </div>
        </div>
        <div class="alert-my">
            <div class="title">
                <span>修改资料</span>
                <i class="closes"></i>
            </div>
            <div class="conts">
                <div class="rows">
                    <div class="labs fl">{{ kefuState.c_name }}</div>
                    <div class="text fl">
                        <input type="text" v-model="editCustModel.nick" />
                    </div>
                </div>
                <div class="rows">
                    <div class="labs fl">客服头像</div>
                    <div class="text fl">
                        <div class="image">
                            <div class="box">
                                <img :src="editCustModel.pic" alt="" />
                                <input type="file" name="" id="" @change="uploadFunc($event, 0)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button">
                <button @click="setCustInfoFunc">确定</button>
            </div>
        </div>
    </div>
    <audio ref="audioRef"></audio>
</template>

<script setup>
import $ from 'jquery'
import { ref, reactive, toRefs, onMounted, toRef, onUnmounted, nextTick, computed } from 'vue'

// 引入浏览器指纹识别
import Fingerprintjs2 from 'fingerprintjs2'
// 引入websocket
import SocketService from '@/utils/websocket'
import { useRoute } from 'vue-router'
const route = useRoute()

import {
    getCustInfo,
    getSessList,
    getUserinfo,
    getChatList,
    sendMsg,
    setTop,
    setNote,
    delChat,
    delSession,
    addBlack,
    read,
    getSessCode,
    setSessCode,
    upload,
    uploadAliOss,
    getMassList,
    addMass,
    setMass,
    onMass,
    unMass,
    delMass,
    startMass,
    getSayList,
    addSay,
    setSay,
    onSay,
    unSay,
    delSay,
    getFastList,
    addFast,
    setFast,
    onFast,
    unFast,
    delFast,
    getQualist,
    addQua,
    setQua,
    onQua,
    unQua,
    delQua,
    getStati,
    setNick,
    getBlackList,
    delBlack,
    setCustInfo,
    getRecepList,
    addGroup,
    setGroup,
    getGroupList,
    setBanned,
    getGroupCode,
    refGroupCode,
    delGroup,
    delGroupMember,
} from '@/api/user'
import { Decrypt, Encrypt, encryptByMd5 } from '@/utils/encrypt'

import { ElMessage, ElImage, ElUpload, ElSwitch } from 'element-plus'
// 引入pinia
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()

// 引入layer
import { layer } from 'vue3-layer'

// 引入public
import { getImageUrl, convertChatMsg, getMsgType, get_suffix, getNowDate } from '@/utils/public'

// 获取文件md5
import tool from '@/utils/tool'

onMounted(() => {
    // loadScript()
    // console.log(route.query.ewm)
    // createFingerprint()
    getCustInfoFunc()
    getSessListFunc()
    // 获取快捷短语
    getFastListFunc()
    SocketService.Instance.registerCallBack('successful_launch', _successfulLaunch)
    SocketService.Instance.registerCallBack('login_failed', _loginFailed)
    SocketService.Instance.registerCallBack('user_access', _userAccess)
    SocketService.Instance.registerCallBack('user_offline', _userOffline)
    SocketService.Instance.registerCallBack('messages', _messages)
})
onUnmounted(() => {
    SocketService.Instance.close()
})

/*************  客服操作开始 ************/

const kefuState = reactive({
    id: '',
    c_user: '',
    c_name: '',
    c_pic: '',
    c_dutime: '',
    ws_addr: '',
})
const reconnectTimer  = ref(0)


const { c_user, c_name, c_pic, c_dutime, id, ws_addr } = toRefs(kefuState)

// 获取客服信息
const getCustInfoFunc = () => {
    if(reconnectTimer.value > 0){
        clearInterval(reconnectTimer.value)
        reconnectTimer.value = 0
    }
    getCustInfo()
        .then((res) => {
            const { code, msg, result } = res
            if (code != 0) {
                return ElMessage({ type: 'error', message: msg, showClose: true })
            }
            let info = JSON.parse(Decrypt(result, appStore.token))
            // console.log(info)
            kefuState.id = info.id
            kefuState.c_user = info.c_user
            kefuState.c_name = info.c_name
            kefuState.c_pic = info.c_pic
            kefuState.c_dutime = info.c_dutime
            kefuState.ws_addr = info.ws_addr
            editCustModel.nick = info.c_name
            editCustModel.pic = info.c_pic
            // 连接websocket
            const wsAddr = info.ws_addr + '/cust/' + appStore.token
            SocketService.Instance.connect(wsAddr)
                .then(() => {
                    // 检测是否断线，检测断线重连
                    reconnectTimer.value = setInterval(()=>{
                        if(!SocketService.Instance.connected){
                            // 如果是token链接失败, 不要在重新连接了
                            if(isLoginFailed.value){ 
                                if(reconnectTimer.value > 0){
                                    clearInterval(reconnectTimer.value)
                                    reconnectTimer.value = 0
                                    return
                                }
                            } else {
                                chatState.message = []
                                getCustInfoFunc()
                            }
                        } 
                    }, 5000)
                })
                .catch((err) => {
                    return ElMessage({ type: 'error', message: err.message, showClose: true })
                })
        })
        .catch((err) => {
            layer.msg(err.message)
        })
}

// 客服头像更改上传文件
const uploadFunc = (e, _type) => {
    let file = e.target.files[0]
    let filename = file.name
    let suffix = get_suffix(filename)

    if (!file) return
    let load = layer.load(0)
    let uploadUrl = ''
    tool.md5(file)
        .then((md5Res) => {
            let newFilename = md5Res + suffix
            upload({ type: _type, name: newFilename })
                .then((res) => {
                    if (res.code != 0) {
                        return
                    }
                    let _data = JSON.parse(Decrypt(res.result, appStore.token))
                    const { state, property } = _data
                    if (!state) {
                        const { accessid, dir, expire, host, policy, signature } = property
                        let formData = new FormData()
                        formData.append('OSSAccessKeyId', accessid)
                        formData.append('signature', signature)
                        formData.append('policy', policy)
                        formData.append('key', dir + newFilename)
                        formData.append('success_action_status', 200)
                        formData.append('file', file)

                        uploadAliOss(host, formData)
                            .then((res) => {
                                layer.close(load)
                                layer.msg('上传成功')
                                uploadUrl = `${host}/${dir}/${newFilename}`
                            })
                            .catch((err) => {
                                layer.close(load)
                                layer.msg('上传失败=>' + err.message)
                            })
                    } else {
                        const { url } = _data
                        layer.close(load)
                        layer.msg('上传成功')
                        uploadUrl = url
                    }
                    editCustModel.pic = uploadUrl
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

//

// 封装成promise的上传文件
const uploadFile = (e, _type) => {
    return new Promise((resolve, reject) => {
        let file = e.target.files[0]
        console.log(file)
        let filename = file.name
        let suffix = get_suffix(filename)

        if (!file) return reject('file not found')
        tool.md5(file)
            .then((md5Res) => {
                let newFilename = md5Res + suffix
                upload({ type: _type, name: newFilename })
                    .then((res) => {
                        if (res.code != 0) {
                            reject(res.msg)
                        }
                        let _data = JSON.parse(Decrypt(res.result, appStore.token))
                        const { state, property } = _data
                        if (!state) {
                            const { accessid, dir, expire, host, policy, signature } = property
                            let formData = new FormData()
                            formData.append('OSSAccessKeyId', accessid)
                            formData.append('signature', signature)
                            formData.append('policy', policy)
                            formData.append('key', dir + newFilename)
                            formData.append('success_action_status', 200)
                            formData.append('file', file)

                            uploadAliOss(host, formData)
                                .then((res) => {
                                    resolve(`${host}/${dir}${newFilename}`)
                                })
                                .catch((err) => {
                                    reject(err)
                                })
                        } else {
                            const { url } = _data
                            resolve(url)
                        }
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
            .catch((err) => {
                reject(err)
            })
            .finally(() => {
                e.target.value = ''
            })
    })
}

// 修改客服信息
const editCustModel = reactive({
    nick: '',
    pic: '',
})
const setCustInfoFunc = () => {
    let obj = {
        nick: Encrypt(editCustModel.nick, appStore.token),
        pic: editCustModel.pic,
    }
    let load = layer.close(0)
    setCustInfo(obj)
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            getCustInfoFunc()
            layer.close(load)
            layer.msg('操作成功')
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

/*************  客服操作结束 ************/

// 当前选中用户
const selectUser = reactive({
    id: '',
    c_addr: '',
    c_identity: '',
    c_nick: '',
    c_pic: '',
    c_note: '',
    c_top: '',
    c_ip: '',
    c_time: '',
})
const getChatListQuery = reactive({
    mid: '',
    page: 1,
    limit: 10,
    isNext: true,
})

// 点击加载更多聊天记录
const loadMoreClick = () => {
    getChatListQuery.page++
    getChatListFunc()
}

// 获取用户信息
const userClickHandler = (item) => {
    // console.log(item)
    if (selectUser.c_identity == item.c_identity) {
        console.log('再次点击了自己，不用操作')
        return
    }
    // 点击把聊天信息置空
    chatState.message = []
    // 右侧的也要置空
    selectUser.value = {}

    getUserinfoFunc(item)
    getChatListQuery.page = 1
    getChatListQuery.mid = item.c_identity
    getChatListQuery.isNext = true

    getChatListFunc()
    // 获取用户聊天记录
}

const getUserinfoFunc = (user) => {
    let load = layer.load(0)
    getUserinfo({ mid: user.c_identity })
        .then((res) => {
            layer.close(load)
            if (res.code != 0) {
                return layer.msg(res.msg)
            }
            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            selectUser.id = _data.id
            selectUser.c_addr = _data.c_addr
            selectUser.c_identity = _data.c_identity
            selectUser.c_nick = _data.c_nick
            selectUser.c_pic = _data.c_pic
            selectUser.c_note = _data.c_note
            selectUser.c_top = _data.c_top
            selectUser.c_ip = _data.c_ip
            selectUser.c_time = _data.c_time
            selectUser.c_type = user.c_type
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}

const getChatListFunc = () => {
    let load = layer.load(0)
    getChatList(getChatListQuery)
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            // console.log(_data)
            const { count, list, page } = _data

            if (getChatListQuery.page > page) {
                layer.close(load)
                getChatListQuery.isNext = false
                return
            }
            if (list.length == 0) {
                layer.close(load)
                return
            }

            createShowMsg(list)


             // 发送消息已读
            read({ mid: getChatListQuery.mid })
                .then((res) => {
                    if (res.code != 0) {
                        return layer.msg(res.msg)
                    }
                     // 发送成功，更新用户未读消息
                    sessList.list.forEach((item) => {
                        if (item.c_identity == getChatListQuery.mid) {
                            item.c_read = 0
                            return
                        }
                    })
                })
                .catch((err) => layer.msg(err.message))
           

            layer.close(load)
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}

/****websocket消息处理开始 ********/
const _successfulLaunch = (data) => {
    // console.log('连接成功')
}
const isLoginFailed = ref(false)
const _loginFailed = (data) => {
    isLoginFailed.value = true
    console.log('连接失败,Token认证失败')
}
const _userAccess = (data) => {
    data = JSON.parse(data)
    console.log('用户进入', data)
    playSound('7501')
    // getSessListFunc()
    let isFound = false
    let tt = {}
    sessList.list.forEach((item,index)=>{
        if(item.c_identity == data.c_identity){
            console.log('item', item)
            tt = item
            tt.c_online = true
            sessList.list.splice(index, 1)
            isFound = true
            return
        }
    })
    if(!isFound){
        let tmp ={
            id: data.id,
            c_addr: data.addr,
            c_identity: data.c_identity,
            c_nick: data.c_nick,
            c_pic: data.c_pic,
            c_note: data.c_note, // 备注
            c_top: data.c_top,
            c_ip: data.c_ip,
            c_time: data.c_time,
            c_type: 0,
            c_announ: '',
            c_banned: '',
            c_ceiling: 0,
            c_read: 0,
            c_online: true,
            lastmsg: ''
        }
        sessList.list.unshift(tmp)
    } else {
        sessList.list.unshift(tt)
    }
}
const _userOffline = (data) => {
    data = JSON.parse(data)
    // console.log('用户下线', data)
    sessList.list.forEach(item=>{
        if(item.c_identity == data.mid){
            item.c_online = false
            return
        }
    })
}
const _messages = (data) => {
    let _data = JSON.parse(data)
    console.log('收到新消息', _data)
    if(_data.c_type == 0){
            playSound('message')
    }
    
    /**
   *  c_cont: "我的"
      c_mid: "ab174f6bdc6f7e1c70ea17d2f861e645"
      c_time: "2023-03-23 18:27:31"
      c_type: 0
      pic: "/img/head/5871c1_100x100.png"
      unread: 1
   *
   */
    

    // 如果当前选择的用户是当前用户
    if (selectUser.c_identity == _data.c_mid) {
        // 插入消息到聊天窗口
        if (timeInterval(chatState.latest_chat_time, _data.c_time)) {
            let tmp = {
                time: _data.c_time,
                data: [
                    {
                        time: _data.c_time,
                        chat_type: _data.c_type,
                        imgUrl: _data.c_pic,
                        msg: _data.c_cont,
                    },
                ],
            }
            chatState.message.push(tmp)
        } else {
            chatState.message[chatState.message.length - 1].data.push({
                time: _data.c_time,
                chat_type: _data.c_type,
                imgUrl: _data.c_pic,
                msg: _data.c_cont,
            })
        }

        chatState.latest_chat_time = _data.c_time
        // 发送消息已读
        read({ mid: _data.c_mid })
            .then((res) => {
                if (res.code != 0) {
                    return layer.msg(res.msg)
                }
                 // 更新用户的最后一条消息和未读消息为0
                sessList.list.forEach((item) => {
                    if (item.c_identity == _data.c_mid) {
                        item.lastmsg = _data.c_cont
                        item.c_read = 0
                        return
                    }
                })
            })
            .catch((err) => layer.msg(err.message))
       
        // 移动滚动条到最新
        nextTick(() => {
            chatContent.value.scrollTop = chatContent.value.scrollHeight
        })
    } else {
        //如果不是当前用户，
        //1. 查询当前用户是否在会话列表中
        let isFind = false
        sessList.list.forEach((item) => {
            if (item.c_identity == _data.c_mid) {
                isFind = true
                // todo 需要后端更改未读消息
                item.c_read = _data.unread
                item.lastmsg = _data.c_cont
                return
            }
        })
        // 如果会话列表中不存在用户, 把用户插入到sessList.list的头部
        if (!isFind) {
            sessList.list.unshift({
                id: '',
                c_addr: '',
                c_identity: _data.c_mid,
                c_nick: '',
                c_pic: _data.pic,
                c_note: '', // 备注
                c_top: '',
                c_ip: '',
                c_time: _data.c_time,
                c_type: 0,
                c_announ: '',
                c_banned: '',
                c_ceiling: 0,
                c_read: _data.unread,
                c_online: 1,
                lastmsg: _data.c_cont,
            })
        }
    }
}

// 插入最新消息到消息到聊天窗口
const insertNewMessage = (_data) => {
    // 插入消息到聊天窗口
    if (timeInterval(chatState.latest_chat_time, _data.c_time)) {
        // 如果大于5分钟则，重新插入新的项
        let tmp = {
            time: _data.c_time,
            data: [
                {
                    time: _data.c_time,
                    chat_type: _data.c_type,
                    imgUrl: _data.c_pic,
                    msg: _data.c_cont,
                },
            ],
        }
        chatState.message.push(tmp)
    } else {
        // 如果小于5分钟直接
        chatState.message[chatState.message.length - 1].data.push({
            time: _data.c_time,
            chat_type: _data.c_type,
            imgUrl: _data.c_pic,
            msg: _data.c_cont,
        })
    }
    // 发送消息已读
    read({ mid: _data.c_mid })
        .then((res) => {
            if (res.code != 0) {
                return layer.msg(res.msg)
            }
        })
        .catch((err) => layer.msg(err.message))
    // 更新用户的最后一条消息
    sessList.list.forEach((item) => {
        if (item.c_identity == _data.c_mid) {
            item.lastmsg = _data.c_cont
            return
        }
    })
    // 移动滚动条到最新
    nextTick(() => {
        chatContent.value.scrollTop = chatContent.value.scrollHeight
    })
}

// 生成聊天信息展示数据
const chatContent = ref(null)
const createShowMsg = (_data) => {
    /*
      c_cont: "哈哈哈"
      c_read: 0
      c_time: "2023-03-22 18:28:58"
      c_type: 1
      id: 31

      从大到小降序排列的
      */

    // 如果是第一页，需要清空 聊天记录
    if (getChatListQuery.page == 1) {
        chatState.message = []
        let last_time = null

        for (let i = _data.length - 1; i >= 0; i--) {
            // 大于5分钟重新起一个新的
            // console.log(last_time, _data[i].c_time)
            if (timeInterval(last_time, _data[i].c_time)) {
                last_time = _data[i].c_time
                let tmp = {
                    time: _data[i].c_time,
                    data: [
                        {
                            time: _data[i].c_time,
                            chat_type: _data[i].c_type,
                            imgUrl: _data[i].c_pic,
                            msg: _data[i].c_cont,
                        },
                    ],
                }
                chatState.message.push(tmp)
            } else {
                last_time = _data[i].c_time
                // 如果小于5分钟需要在内部插入
                chatState.message[chatState.message.length - 1].data.push({
                    time: _data[i].c_time,
                    chat_type: _data[i].c_type,
                    imgUrl: _data[i].c_pic,
                    msg: _data[i].c_cont,
                })
            }
        }
    } else if (getChatListQuery.page > 1) {
        let early_time = chatState.earliest_chat_time
        //1. 先拿最早时间来判断 , 如果和最早时间在5分钟内就需要push原来的地方最前面
        for (let i = 0; i < _data.length; i++) {
            if (!timeInterval(_data[i].c_time, early_time)) {
                //如果消息在5分钟内，就要加入到原来的第一个位置的头部
                //console.log(chatState.message)
                early_time = _data[i].c_time
                chatState.message[0].time = _data[i].c_time
                chatState.message[0].data.unshift({
                    time: _data[i].c_time,
                    chat_type: _data[i].c_type,
                    imgUrl: _data[i].c_pic,
                    msg: _data[i].c_cont,
                })
            } else {
                //2. 如果超过5分钟就重新加入到头部
                early_time = _data[i].c_time
                let tmp = {
                    time: _data[i].c_time,
                    data: [
                        {
                            time: _data[i].c_time,
                            chat_type: _data[i].c_type,
                            imgUrl: _data[i].c_pic,
                            msg: _data[i].c_cont,
                        },
                    ],
                }
                chatState.message.unshift(tmp)
            }
        }
    }

    if (getChatListQuery.page == 1) {
        chatState.latest_chat_time = _data[0].c_time
    }
    chatState.earliest_chat_time = _data[_data.length - 1].c_time
    let oldScrollHeight = chatContent.value.scrollHeight
    //console.log(chatList)
    nextTick(() => {
        if (getChatListQuery.page == 1) {
            // console.log(chatContent.value.scrollHeight, chatContent.value.clientHeight)
            if (chatContent.value.scrollHeight > chatContent.value.clientHeight) {
                chatContent.value.scrollTop = chatContent.value.scrollHeight
            }
        } else {
            let new_scrollHeight = chatContent.value.scrollHeight
            chatContent.value.scrollTop = new_scrollHeight - oldScrollHeight
        }
    })

    // console.log(chatState.latest_chat_time,chatState.earliest_chat_time)
}

/****websocket消息处理结束 ********/

/***************群聊操作开始 ****************/
const addGroupClick = () => {
    $('.alerts').fadeIn()
    $('.alerts-groupTxt').slideDown()
}

/***************群聊操作结束 ****************/

/************* 接待列表操作开始 *************/
const recepList = ref([])
const getRecepListFunc = () => {
    let load = layer.load(0)
    getRecepList()
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            console.log(_data)
            const { list } = _data
            recepList.value = list
            layer.close(load)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

/************* 接待列表操作结束 *************/

const sessListQuery = reactive({
    type: 0,
    page: 1,
    limit: 10,
})
const sessList = reactive({
    count: 0,
    list: [],

    // id: '',
    // c_addr: '',
    // c_identity: '',
    // c_nick: '',
    // c_pic: '',
    // c_note: '', // 备注
    // c_top: '',
    // c_ip: '',
    // c_time: '',
    // c_type: 0,
    // c_announ: '',
    // c_banned: '',
    // c_ceiling: 0,
    // c_read: 0
    // c_online: 0,
    // lastmsg: ''
})
// 取会话列表
const getSessListFunc = () => {
    try {
        getSessList(sessListQuery).then((res) => {
            const { code, msg, result } = res
            if (code != 0) {
                return ElMessage({ type: 'error', message: msg, showClose: true })
            }
            let _data = JSON.parse(Decrypt(result, appStore.token))
            const { count, list, page, pagesize } = _data
            if (page < sessListQuery.page) {
                sessListQuery.page = page
                return
            }
            // console.log(list)

            sessList.count = count

            if (sessListQuery.page == 1) {
                sessList.list = list
            } else {
                sessList.list = [...sessList.list, ...list]
            }
        })
    } catch (error) {
        ElMessage({ type: 'error', message: error.message, showClose: true })
    }
}

const send_msg_cont = ref('')
// 发送消息
const sendMsgClick = () => {
    // console.log(send_msg_cont.value)
    if (send_msg_cont.value.length == 0) {
        return layer.msg('发送消息内容为空!!!')
    }
    if (selectUser.c_identity.length == 0) {
        return layer.msg('请选择需要发送消息的用户')
    }
    let obj = {
        mid: selectUser.c_identity,
        msg: Encrypt(send_msg_cont.value, appStore.token),
    }
    sendMsgFunc(obj)
    send_msg_cont.value = ''
}
const sendMsgFunc = (params) => {
    let load = layer.load(0)
    sendMsg(params)
        .then((res) => {
            if (res.code != 0) {
                return layer.msg(res.msg)
            }
            layer.msg('发送成功')
            playSound('send')
        })
        .catch((err) => {
            return layer.msg(err.message)
        })
        .finally(() => {
            layer.close(load)
        })
}

// 发送图片聊天操作
const msgFileRef = ref(null)
const msgUploadClick = () => {
    msgFileRef.value.click()
}

const msgFileChange = async (e) => {
    let load = layer.load(0)
    try {
        const url = await uploadFile(e, 2)
        send_msg_cont.value = `[pic=${url}]`
    } catch (err) {
        layer.close(load)
        layer.msg(err)
    } finally {
        layer.close(load)
    }
}
// 发送图片聊天操作结束

// 会话列表滚动事件
const userHandlerScroll = (e) => {
    let el = e.currentTarget
    if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        sessListQuery.page++
        getSessListFunc()
    }
}

// 取浏览器指纹
const createFingerprint = () => {
    const fingerprint = Fingerprintjs2.get((components) => {
        const values = components.map((component) => component.value)
        const murmur = Fingerprintjs2.x64hash128(values.join(''), 31)
        console.log('浏览器指纹id:', murmur)
    })
}

/**
 * 思路：
 * 1. 从接口获取数据， 判断当前信息的时间和message中最后一条记录的时间
 * 2. 如果大于5分钟 则向message中添加一个新的数数组对象
 * 3. 如果小于5分钟，则把新消息追加到 当前message中的最后一个元素的data数据中
 * 4. 点击加载更多翻页的时候， 如果当前数据为空 则表示没有数据 ，把点击加载更多隐藏， 没有更多数据在显示出来
 */

/********************** 鼠标右键操作开始  *********************/

// 右键选择的用户信息
const rightMenuUser = ref('')
const rightMenuUserModel = ref({})
// 展示或者隐藏右键菜单
const isShowRightMenu = ref(false)
const isShowGroupRightMenu = ref(false)
// const isGroupValue = ref(false)
const showRightMenuPos = reactive({
    x: 0,
    y: 0,
})

// 鼠标右键点击
const priChatRightClick = (e, item) => {
    rightMenuUser.value = item.c_identity
    rightMenuUserModel.value = item
    showRightMenuPos.x = e.clientX
    showRightMenuPos.y = e.clientY
    isShowRightMenu.value = true
}

//置顶操作
const setTopFunc = () => {
    if (rightMenuUser.value == '') {
        return layer.msg('请选择用户')
    }
    let load = layer.load(0)
    setTop({ mid: rightMenuUser.value, state: 1 })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }

            // 把用户找到 然后置顶操作
            let tmp = {}
            sessList.list.forEach((item, index) => {
                if (item.c_identity == rightMenuUser.value) {
                    tmp = item
                    sessList.list.splice(index, 1)
                    return
                }
            })
            tmp.c_top = 1
            sessList.list.unshift(tmp)
            layer.close(load)
            rightMenuUser.value = ''
            layer.msg('置顶成功')
        })
        .catch((err) => {
            rightMenuUser.value = ''
            layer.close(load)
            layer.msg(err.message)
        })
}

// 取消置顶操作
const setUnTopFunc = () => {
    if (rightMenuUser.value == '') {
        return layer.msg('请选择用户')
    }
    let load = layer.load(0)
    setTop({ mid: rightMenuUser.value, state: 0 })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }

            // 把用户找到 然后置顶操作
            let tmp = {}
            sessList.list.forEach((item, index) => {
                if (item.c_identity == rightMenuUser.value) {
                    tmp = item
                    sessList.list.splice(index, 1)
                    return
                }
            })
            tmp.c_top = 0
            sessList.list.push(tmp)
            layer.close(load)
            rightMenuUser.value = ''
            layer.msg('取消置顶成功')
        })
        .catch((err) => {
            rightMenuUser.value = ''
            layer.close(load)
            layer.msg(err.message)
        })
}

// 修改备注
const setNoteFunc = () => {
    if (rightMenuUser.value == '') {
        return layer.msg('请选择修改的用户')
    }
    layer.prompt(
        {
            title: '修改' + rightMenuUser.value + '的备注',
        },
        (value, index, elem) => {
            let load = layer.load(0)

            setNote({ mid: rightMenuUser.value, note: value })
                .then((res) => {
                    if (res.code != 0) {
                        rightMenuUser.value = ''
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    let tmp = {}
                    sessList.list.forEach((item, index) => {
                        if (item.c_identity == rightMenuUser.value) {
                            tmp = item
                            tmp.c_note = value
                            // 删除后又插入数组
                            sessList.list.splice(index, 1, tmp)
                            return
                        }
                    })
                    rightMenuUser.value = ''
                    layer.msg('修改成功')
                    layer.close(load)
                    layer.close(index)
                })
                .catch((err) => {
                    rightMenuUser.value = ''
                    layer.msg(err.message)
                    layer.close(index)
                })
        }
    )
}

// 清空聊天记录
const delChatFunc = () => {
    if (rightMenuUser.value == '') {
        return layer.msg('请选择修改的用户')
    }
    let load = layer.load(0)
    delChat({ mid: rightMenuUser.value }).then((res) => {
        if (res.code != 0) {
            rightMenuUser.value = ''
            layer.close(load)
            return layer.msg(res.msg)
        }

        chatState.message = []
        getChatListQuery.isNext = false
        rightMenuUser.value = ''
        layer.close(load)
    })
}

// 删除会话
const delSessionFunc = (_type, mid) => {
    layer.confirm(
        '确定删除吗?',
        { icon: 3, title: '提示' },
        function (index) {
            let load = layer.load(0)
            let params = {}
            if (_type > 0) {
                params.mid = mid
            }
            params.type = _type

            delSession(params).then((res) => {
                if (res.code != 0) {
                    layer.close(load)
                    return layer.msg(res.msg)
                }

                //删除成功重新 获取接口渲染数据
                chatState.message = []
                sessListQuery.page = 1
                getSessListFunc()
                layer.msg('删除成功')
                layer.close(load)
            })
            layer.close(index)
        },
        function () {
            $('.btn-slide').fadeOut()
        }
    )
}

// 加入黑名单
const addBlackFunc = () => {
    if (rightMenuUser.value == '') {
        return layer.msg('请选择修改的用户')
    }
    let load = layer.load(0)
    addBlack({ mid: rightMenuUser.value })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }

            rightMenuUser.value = ''
            getSessListFunc()
            layer.close(load)
            layer.msg(res.msg)
        })
        .catch((err) => {
            layer.msg(err.message)
            rightMenuUser.value = ''
            layer.close(load)
        })
}

// 刷新会话列表
const refreshSessList = () => {
    sessListQuery.page = 1
    getSessListFunc()
}

/************************** 鼠标右键操作结束  *******************/

/************************** 二维码操作开始  **************/

// 点击二维码
const QrState = reactive({
    url: '',
    code: '',
})
const showQrCode = () => {
    let load = layer.load(0)
    getSessCode({ type: 0 })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            QrState.url = _data.url
            QrState.code = _data.code

            layer.close(load)
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}
const QrCodeImg = computed(() => {
    return QrState.code.length > 0 ? 'data:image/jpeg;base64,' + QrState.code : ''
})

//操作二维码
const setSessCodeFunc = (_t) => {
    let load = layer.load(0)
    setSessCode({ type: _t })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            const { url, code } = _data
            QrState.url = url
            QrState.code = code
            layer.msg('操作成功')
            layer.close(load)
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}

/************************** 二维码操作结束  **************/

/****************黑名单操作开始  **********************/
const blackList = ref([])
const getBlackListQuery = reactive({
    page: 1,
    limit: 10,
})
const getBlackListFunc = () => {
    let load = layer.load(0)
    getBlackList(getBlackListQuery)
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            // console.log(_data)
            const { list } = _data
            blackList.value = list
            layer.close(load)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

const cancelBlack = (item) => {
    $('.btn-slide').fadeOut()
    if (item.id == 0) {
        return layer.msg('请选择需要操作的用户')
    }
    layer.confirm(
        '确定移除黑名单吗?',
        { icon: 3, title: '提示' },
        function (index) {
            let load = layer.load(0)
            delBlack({ mid: item.c_identity })
                .then((res) => {
                    $('.btn-slide').fadeOut()
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    getBlackListFunc()
                    getSessListFunc()
                    layer.close(load)
                    layer.msg(res.msg)
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
            layer.close(index)
        },
        function () {
            $('.btn-slide').fadeOut()
        }
    )
}

/****************黑名单操作结束  **********************/

/************群发操作开始 **********/

//取群发列表
const massList = ref({})
const getMassListFunc = () => {
    let load = layer.load(0)
    getMassList().then((res) => {
        if (res.code != 0) {
            layer.close(load)
            return layer.msg(res.msg)
        }
        let _data = JSON.parse(Decrypt(res.result, appStore.token))
        // console.log(_data)
        const { list } = _data
        massList.value = list
        layer.close(load)
    })
}
// 新建文字群发
const massModelValue = ref('')
const addMassFunc = (_type) => {
    if (massModelValue.value.length == 0) {
        return layer.msg('请填写群发内容')
    }
    let load = layer.load(0)
    addMass({ type: _type, msg: Encrypt(massModelValue.value, appStore.token) })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            //let _data = JSON.parse(Decrypt(res.result, appStore.token))
            massModelValue.value = ''
            layer.close(load)
            layer.msg('新建成功')
            $('.alerts').fadeOut()
            $('.alert-msssText').slideUp()
            massModelValue.value = ''
            getMassListFunc()
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 新建图片群发
const btnImgMassFile = ref(null)
const imgMassClick = () => {
    btnImgMassFile.value.click()
}

// 上传群发图片
const uploadImgMass = (e) => {
    let file = e.target.files[0]
    let filename = file.name
    let suffix = get_suffix(filename)

    if (!file) return
    let load = layer.load(0)
    let uploadUrl = ''
    tool.md5(file)
        .then((md5Res) => {
            let newFilename = md5Res + suffix
            upload({ type: 1, name: newFilename })
                .then((res) => {
                    e.target.value = ''
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    let _data = JSON.parse(Decrypt(res.result, appStore.token))
                    const { state, property } = _data
                    if (!state) {
                        const { accessid, dir, expire, host, policy, signature } = property
                        let formData = new FormData()
                        formData.append('OSSAccessKeyId', accessid)
                        formData.append('signature', signature)
                        formData.append('policy', policy)
                        formData.append('key', dir + newFilename)
                        formData.append('success_action_status', 200)
                        formData.append('file', file)

                        uploadAliOss(host, formData)
                            .then((res) => {
                                uploadUrl = `${host}/${dir}/${newFilename}`
                            })
                            .catch((err) => {
                                layer.msg('上传失败=>' + err.message)
                            })
                    } else {
                        const { url } = _data

                        uploadUrl = url
                        // console.log('已经上传过了', url)
                    }

                    // 调用新建群发接口
                    massModelValue.value = Encrypt(uploadUrl, appStore.token)
                    addMassFunc(1)
                    layer.close(load)
                    layer.msg('新建图片群发成功')
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

const isMassAdd = ref(true)
const editMassModel = reactive({
    id: '',
    msg: '',
})
const massMoveUp = (item) => {
    if (item.id == 0) {
        return layer.msg('请选择需要操作的群发')
    }
    let load = layer.load(0)
    onMass({ id: item.id })
        .then((res) => {
            $('.btn-slide').fadeOut()
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            //找到数据把数据移动到前面去
            let tmp = {}
            let idx = -1
            massList.value.forEach((element, index) => {
                if (element.id == item.id) {
                    tmp = element
                    idx = index
                    massList.value.splice(index, 1)
                    return
                }
            })

            if (idx != -1) {
                massList.value.splice(idx <= 0 ? 0 : idx - 1, 0, tmp)
            }

            layer.close(load)
            layer.msg(res.msg)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}
const massMoveDown = (item) => {
    if (item.id == 0) {
        return layer.msg('请选择需要操作的群发')
    }
    let load = layer.load(0)
    unMass({ id: item.id })
        .then((res) => {
            $('.btn-slide').fadeOut()
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            //找到数据把数据移动到前面去
            let tmp = {}
            let idx = -1
            massList.value.forEach((element, index) => {
                if (element.id == item.id) {
                    tmp = element
                    idx = index
                    massList.value.splice(index, 1)
                    return
                }
            })

            if (idx != -1) {
                massList.value.splice(idx > massList.value.length - 1 ? massList.value.length - 1 : idx + 1, 0, tmp)
            }

            layer.close(load)
            layer.msg(res.msg)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}
const massEdit = (item) => {
    $('.btn-slide').fadeOut()
    if (item.id == 0) {
        return layer.msg('请选择需要修改的群发')
    }
    isMassAdd.value = false
    editMassModel.id = item.id
    massModelValue.value = item.c_cont
}
const editMassFunc = () => {
    let load = layer.load(0)
    editMassModel.msg = Encrypt(massModelValue.value, appStore.token)
    setMass(editMassModel)
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            // 查找到更新的数据然后修改
            let tmp = {}
            massList.value.forEach((element) => {
                if (element.id == editMassModel.id) {
                    tmp = element
                    tmp.c_cont = massModelValue.value
                    return
                }
            })
            massModelValue.value = ''
            editMassModel.id = ''
            editMassModel.msg = ''
            $('.alerts').fadeOut()
            $('.alert-msssText').slideUp()
            layer.msg('操作成功')
            layer.close(load)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}
const massDel = (item) => {
    $('.btn-slide').fadeOut()
    if (item.id == 0) {
        return layer.msg('请选择需要操作的群发')
    }
    layer.confirm(
        '确定删除吗?',
        { icon: 3, title: '提示' },
        function (index) {
            let load = layer.load(0)
            delMass({ id: item.id })
                .then((res) => {
                    $('.btn-slide').fadeOut()
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    getMassListFunc()
                    layer.close(load)
                    layer.msg(res.msg)
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
            layer.close(index)
        },
        function () {
            $('.btn-slide').fadeOut()
        }
    )
}
//开始群发
const startMassFunc = (item) => {
    console.log(item)
    if (item.id == 0) {
        return layer.msg('请选择需要操作的群发')
    }
    layer.confirm(
        '确定群发吗?',
        { icon: 1, title: '提示' },
        function (index) {
            let load = layer.load(0)
            startMass({ id: item.id })
                .then((res) => {
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    //2、更新会话列表最后一次通讯时间
                    let now = getNowDate()
                    sessList.list.forEach((v) => {
                        v.c_time = now
                        v.lastmsg = item.c_cont
                    })

                    // 更新消息到当前聊天窗口中去
                    if (selectUser.c_identity != '') {
                        insertNewMessage({
                            c_time: now,
                            c_type: 0,
                            c_pic: kefuState.c_pic,
                            c_cont: item.c_cont,
                            c_mid: selectUser.c_identity,
                        })
                    }
                    layer.close(load)
                    layer.msg(res.msg)
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
            layer.close(index)
        },
        function () {
            // 点击取消回调函数
        }
    )
}

/************群发操作结束 **********/

/********* 打招呼操作 **********/

// 取打招呼列表
const sayList = ref([])
// 是否是新增招呼
const isSayAdd = ref(true)
// 新建图片招呼引用
const btnImgSayFile = ref(null)

const getSayListFunc = () => {
    let load = layer.load(0)
    getSayList()
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.message)
            }

            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            // console.log(_data)
            sayList.value = _data.list

            layer.close(load)
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}

// 新建打招呼
const sayModelValue = reactive({
    cont: '',
    id: '',
})
const addSayFunc = (_type) => {
    if (sayModelValue.cont == '') {
        return layer.msg('请输入打招呼内容')
    }

    let load = layer.load(0)
    addSay({ type: _type, msg: Encrypt(sayModelValue.cont, appStore.token) })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            layer.close(load)
            layer.msg('新建打招呼成功')
            $('.alerts').fadeOut()
            $('.alert-greetTxt').slideUp()
            sayModelValue.cont = ''
            getSayListFunc()
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}

//新建图片打招呼
const addSayImgClick = () => {
    btnImgSayFile.value.click()
}
const uploadImgSay = (e) => {
    let file = e.target.files[0]
    let filename = file.name
    let suffix = get_suffix(filename)

    if (!file) return
    let load = layer.load(0)
    let uploadUrl = ''
    tool.md5(file)
        .then((md5Res) => {
            let newFilename = md5Res + suffix
            upload({ type: 1, name: newFilename })
                .then((res) => {
                    e.target.value = ''
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    let _data = JSON.parse(Decrypt(res.result, appStore.token))
                    const { state, property } = _data
                    if (!state) {
                        const { accessid, dir, expire, host, policy, signature } = property
                        let formData = new FormData()
                        formData.append('OSSAccessKeyId', accessid)
                        formData.append('signature', signature)
                        formData.append('policy', policy)
                        formData.append('key', dir + newFilename)
                        formData.append('success_action_status', 200)
                        formData.append('file', file)

                        uploadAliOss(host, formData)
                            .then((res) => {
                                uploadUrl = `${host}/${dir}/${newFilename}`
                            })
                            .catch((err) => {
                                layer.msg('上传失败=>' + err.message)
                            })
                    } else {
                        const { url } = _data

                        uploadUrl = url
                    }

                    // 调用新建群发接口
                    sayModelValue.cont = Encrypt(uploadUrl, appStore.token)
                    addSayFunc(1)
                    layer.close(load)
                    layer.msg('新建图片群发成功')
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 编辑打招呼
const sayEdit = (item) => {
    $('.btn-slide').fadeOut()
    if (item.id == 0) {
        return layer.msg('请选择需要修改的打招呼')
    }
    isSayAdd.value = false
    sayModelValue.cont = item.c_cont
    sayModelValue.id = item.id
}
const editSayFunc = () => {
    let load = layer.load(0)
    let msg = Encrypt(sayModelValue.cont, appStore.token)
    setSay({ id: sayModelValue.id, msg })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            // 查找到更新的数据然后修改
            let tmp = {}
            sayList.value.forEach((element) => {
                if (element.id == sayModelValue.id) {
                    tmp = element
                    tmp.c_cont = sayModelValue.cont
                    return
                }
            })
            sayModelValue.cont = ''
            sayModelValue.id = ''
            sayModelValue.cont = ''
            $('.alerts').fadeOut()
            $('.alert-greetTxt').slideUp()
            layer.msg('操作成功')
            layer.close(load)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 打招呼上移操作
const sayMoveUp = (item) => {
    if (item.id == 0) {
        return layer.msg('请选择需要操作的打招呼')
    }
    let load = layer.load(0)
    onSay({ id: item.id })
        .then((res) => {
            $('.btn-slide').fadeOut()
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            //找到数据把数据移动到前面去
            let tmp = {}
            let idx = -1
            sayList.value.forEach((element, index) => {
                if (element.id == item.id) {
                    tmp = element
                    idx = index
                    sayList.value.splice(index, 1)
                    return
                }
            })

            if (idx != -1) {
                sayList.value.splice(idx <= 0 ? 0 : idx - 1, 0, tmp)
            }

            layer.close(load)
            layer.msg(res.msg)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 打招呼下移操作
const sayMoveDown = (item) => {
    if (item.id == 0) {
        return layer.msg('请选择需要操作的群发')
    }
    let load = layer.load(0)
    unSay({ id: item.id })
        .then((res) => {
            $('.btn-slide').fadeOut()
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            //找到数据把数据移动到前面去
            let tmp = {}
            let idx = -1
            sayList.value.forEach((element, index) => {
                if (element.id == item.id) {
                    tmp = element
                    idx = index
                    sayList.value.splice(index, 1)
                    return
                }
            })

            if (idx != -1) {
                sayList.value.splice(idx > sayList.value.length - 1 ? sayList.value.length - 1 : idx + 1, 0, tmp)
            }

            layer.close(load)
            layer.msg(res.msg)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 删除打招呼
const sayDel = (item) => {
    $('.btn-slide').fadeOut()
    if (item.id == 0) {
        return layer.msg('请选择需要操作的群发')
    }
    layer.confirm(
        '确定删除吗?',
        { icon: 3, title: '提示' },
        function (index) {
            let load = layer.load(0)
            delSay({ id: item.id })
                .then((res) => {
                    $('.btn-slide').fadeOut()
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    getSayListFunc()
                    layer.close(load)
                    layer.msg(res.msg)
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
            layer.close(index)
        },
        function () {
            $('.btn-slide').fadeOut()
        }
    )
}

/********** 打招呼操作结束 *************/

/********************** 快捷回复操作 *************/
const fastList = ref([])
const isFastAdd = ref(true)
const fastModelValue = reactive({
    id: '',
    msg: '',
})
const btnImgFastFile = ref(null)
// 取快捷回复列表
const getFastListFunc = () => {
    let load = layer.load(0)
    getFastList()
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.message)
            }

            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            // console.log(_data)
            fastList.value = _data.list
            layer.close(load)
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}
//新增快捷回复
const addFastFunc = (_type) => {
    if (fastModelValue.msg == '') {
        return layer.msg('请输入打招呼内容')
    }

    let load = layer.load(0)
    addFast({ type: _type, msg: Encrypt(fastModelValue.msg, appStore.token) })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            layer.close(load)
            layer.msg('新建11成功')
            $('.alerts').fadeOut()
            $('.alert-fastTxt').slideUp()
            fastModelValue.msg = ''
            getFastListFunc()
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}

// 新增图片快捷回复
const addFastImgClick = () => {
    btnImgFastFile.value.click()
}
const uploadImgFast = (e) => {
    let file = e.target.files[0]
    let filename = file.name
    let suffix = get_suffix(filename)

    if (!file) return
    let load = layer.load(0)
    let uploadUrl = ''
    tool.md5(file)
        .then((md5Res) => {
            let newFilename = md5Res + suffix
            upload({ type: 1, name: newFilename })
                .then((res) => {
                    e.target.value = ''
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    let _data = JSON.parse(Decrypt(res.result, appStore.token))
                    const { state, property } = _data
                    if (!state) {
                        const { accessid, dir, expire, host, policy, signature } = property
                        let formData = new FormData()
                        formData.append('OSSAccessKeyId', accessid)
                        formData.append('signature', signature)
                        formData.append('policy', policy)
                        formData.append('key', dir + newFilename)
                        formData.append('success_action_status', 200)
                        formData.append('file', file)

                        uploadAliOss(host, formData)
                            .then((res) => {
                                uploadUrl = `${host}/${dir}/${newFilename}`
                            })
                            .catch((err) => {
                                layer.msg('上传失败=>' + err.message)
                            })
                    } else {
                        const { url } = _data

                        uploadUrl = url
                    }

                    // 调用新建群发接口
                    fastModelValue.msg = Encrypt(uploadUrl, appStore.token)
                    addFastFunc(1)
                    layer.close(load)
                    layer.msg('新建成功')
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 编辑快捷回复
const fastEdit = (item) => {
    $('.btn-slide').fadeOut()
    if (item.id == 0) {
        return layer.msg('请选择需要修改的快捷回复')
    }
    isFastAdd.value = false
    fastModelValue.msg = item.c_cont
    fastModelValue.id = item.id
}
//
const editFastFunc = () => {
    let load = layer.load(0)
    let msg = Encrypt(fastModelValue.msg, appStore.token)
    setFast({ id: fastModelValue.id, msg })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            // 查找到更新的数据然后修改
            let tmp = {}
            fastList.value.forEach((element) => {
                if (element.id == fastModelValue.id) {
                    tmp = element
                    tmp.c_cont = fastModelValue.msg
                    return
                }
            })
            fastModelValue.msg = ''
            fastModelValue.id = ''
            $('.alerts').fadeOut()
            $('.alert-greetTxt').slideUp()
            layer.msg('操作成功')
            layer.close(load)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 上移快捷回复
const fastMoveUp = (item) => {
    if (item.id == 0) {
        return layer.msg('请选择需要操作的打招呼')
    }
    let load = layer.load(0)
    onFast({ id: item.id })
        .then((res) => {
            $('.btn-slide').fadeOut()
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            //找到数据把数据移动到前面去
            let tmp = {}
            let idx = -1
            fastList.value.forEach((element, index) => {
                if (element.id == item.id) {
                    tmp = element
                    idx = index
                    fastList.value.splice(index, 1)
                    return
                }
            })

            if (idx != -1) {
                fastList.value.splice(idx <= 0 ? 0 : idx - 1, 0, tmp)
            }

            layer.close(load)
            layer.msg(res.msg)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 下移快捷回复
const fastMoveDown = (item) => {
    if (item.id == 0) {
        return layer.msg('请选择需要操作的选项')
    }
    let load = layer.load(0)
    unFast({ id: item.id })
        .then((res) => {
            $('.btn-slide').fadeOut()
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            //找到数据把数据移动到前面去
            let tmp = {}
            let idx = -1
            fastList.value.forEach((element, index) => {
                if (element.id == item.id) {
                    tmp = element
                    idx = index
                    fastList.value.splice(index, 1)
                    return
                }
            })

            if (idx != -1) {
                fastList.value.splice(idx > fastList.value.length - 1 ? fastList.value.length - 1 : idx + 1, 0, tmp)
            }

            layer.close(load)
            layer.msg(res.msg)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

const fastDel = (item) => {
    $('.btn-slide').fadeOut()
    if (item.id == 0) {
        return layer.msg('请选择需要操作的选项')
    }
    layer.confirm(
        '确定删除吗?',
        { icon: 3, title: '提示' },
        function (index) {
            let load = layer.load(0)
            delFast({ id: item.id })
                .then((res) => {
                    $('.btn-slide').fadeOut()
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    getFastListFunc()
                    layer.close(load)
                    layer.msg(res.msg)
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
            layer.close(index)
        },
        function () {
            $('.btn-slide').fadeOut()
        }
    )
}

// 点击聊天窗口快捷短语
const fastItemClick = (item) => {
    send_msg_cont.value = item.c_cont
}

/********************** 快捷回复操作结束 *************/

/********************** 智能问答操作开始 *************/
const quaList = ref([])
const isQuaAdd = ref(true)
const quaModelValue = reactive({
    id: '',
    q: '',
    a: '',
})

// 取智能问答列表
const getQualistFunc = () => {
    let load = layer.load(0)
    getQualist()
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.message)
            }

            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            // console.log(_data)
            quaList.value = _data.list
            layer.close(load)
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}

const addQuaFunc = (_type) => {
    if (quaModelValue.q == '' || quaModelValue.a == '') {
        return layer.msg('请输入问题和答案')
    }

    let load = layer.load(0)
    addQua({ type: _type, q: Encrypt(quaModelValue.q, appStore.token), a: Encrypt(quaModelValue.a, appStore.token) })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            layer.close(load)
            layer.msg('新建成功')
            $('.alerts').fadeOut()
            $('.alert-QATxt').slideUp()
            quaModelValue.q = ''
            quaModelValue.a = ''
            getQualistFunc()
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}

// 编辑智能问答
const quaEdit = (item) => {
    $('.btn-slide').fadeOut()
    if (item.id == 0) {
        return layer.msg('请选择需要问答')
    }
    isQuaAdd.value = false
    quaModelValue.q = item.c_q
    quaModelValue.a = item.c_a
    quaModelValue.id = item.id
}
const editQuaFunc = () => {
    let load = layer.load(0)
    let q = Encrypt(quaModelValue.q, appStore.token)
    let a = Encrypt(quaModelValue.a, appStore.token)
    setQua({ id: quaModelValue.id, q, a })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            // 查找到更新的数据然后修改
            let tmp = {}
            quaList.value.forEach((element) => {
                if (element.id == quaModelValue.id) {
                    tmp = element
                    tmp.c_q = quaModelValue.q
                    tmp.c_a = quaModelValue.a
                    return
                }
            })
            quaModelValue.q = ''
            quaModelValue.a = ''
            quaModelValue.id = ''
            $('.alerts').fadeOut()
            $('.alert-QATxt').slideUp()
            layer.msg('操作成功')
            layer.close(load)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}
// 上移智能问答
const quaMoveUp = (item) => {
    if (item.id == 0) {
        return layer.msg('请选择需要操作的打招呼')
    }
    let load = layer.load(0)
    onQua({ id: item.id })
        .then((res) => {
            $('.btn-slide').fadeOut()
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            //找到数据把数据移动到前面去
            let tmp = {}
            let idx = -1
            quaList.value.forEach((element, index) => {
                if (element.id == item.id) {
                    tmp = element
                    idx = index
                    quaList.value.splice(index, 1)
                    return
                }
            })

            if (idx != -1) {
                quaList.value.splice(idx <= 0 ? 0 : idx - 1, 0, tmp)
            }

            layer.close(load)
            layer.msg(res.msg)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 下移智能问答
const quaMoveDown = (item) => {
    if (item.id == 0) {
        return layer.msg('请选择需要操作的选项')
    }
    let load = layer.load(0)
    unQua({ id: item.id })
        .then((res) => {
            $('.btn-slide').fadeOut()
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            //找到数据把数据移动到前面去
            let tmp = {}
            let idx = -1
            quaList.value.forEach((element, index) => {
                if (element.id == item.id) {
                    tmp = element
                    idx = index
                    quaList.value.splice(index, 1)
                    return
                }
            })

            if (idx != -1) {
                quaList.value.splice(idx > quaList.value.length - 1 ? quaList.value.length - 1 : idx + 1, 0, tmp)
            }

            layer.close(load)
            layer.msg(res.msg)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 删除智能问答
const quaDel = (item) => {
    $('.btn-slide').fadeOut()
    if (item.id == 0) {
        return layer.msg('请选择需要操作的选项')
    }
    layer.confirm(
        '确定删除吗?',
        { icon: 3, title: '提示' },
        function (index) {
            let load = layer.load(0)
            delQua({ id: item.id })
                .then((res) => {
                    $('.btn-slide').fadeOut()
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    getQualistFunc()
                    layer.close(load)
                    layer.msg(res.msg)
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
            layer.close(index)
        },
        function () {
            $('.btn-slide').fadeOut()
        }
    )
}

/********************** 智能问答操作结束 *************/

/********************** 统计操作开始 *************/

const statiList = ref([])
// 取统计列表
const getStatiFunc = () => {
    let load = layer.load(0)
    getStati()
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.message)
            }

            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            // console.log(_data)
            statiList.value = _data.list
            layer.close(load)
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}

/********************** 统计操作结束 *************/

/********************** 群聊操作开始 *************/

// 计算是否是群组
const isGroupValue = computed(() => {
    return selectUser.c_type == 1
})

const isGroupAdd = ref(true)
const groupModel = reactive({
    nick: '', //群名称
    pic: getImageUrl('img/shuxing-img.png'), //群头像
    announ: '', //群公告
    banned: 1,
    mid: '',
})

// 新增群组
const addGroupFunc = (state) => {
    let load = layer.load(0)
    let obj = {
        nick: Encrypt(groupModel.nick, appStore.token),
        pic: '',
        announ: Encrypt(groupModel.announ, appStore.token),
        banned: groupModel.banned,
    }
    addGroup(obj)
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            getSessListFunc()
            layer.close(load)
            layer.msg(res.msg)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}
const groupImgFile = ref(null)
const groupImgClick = () => {
    groupImgFile.value.click()
}

const groupImgFileChange = async (e) => {
    try {
        const url = await uploadFile(e, 1)
        groupModel.pic = url
    } catch (error) {
        layer.msg(error)
    }
}



// 点击编辑群聊点击事件
const editGroup = () => {
    isGroupAdd.value = false
    $('.alerts').fadeIn()
    $('.alerts-groupTxt').slideDown()
    // 这里获取右键选中的用户的信息 赋值给groupModel
    groupModel.mid = rightMenuUserModel.value.c_identity
    groupModel.nick = rightMenuUserModel.value.c_nick
    groupModel.pic = rightMenuUserModel.value.c_pic
}

// 点击编辑群聊处理函数
const editGroupFunc = () => {
    let load = layer.load(0)
    let obj = {
        mid: groupModel.mid,
        nick: Encrypt(groupModel.nick, appStore.token),
        pic: groupModel.pic,
        announ: groupModel.announ,
        banned: groupModel.banned,
    }
    setGroup(obj)
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            layer.msg(res.msg)
            layer.close(load)
            $('.alerts').fadeOut()
            $('.alerts-groupTxt').slideUp()
            getSessListFunc()
        })
        .catch((err) => {
            layer.msg(err.message)
            layer.close(load)
        })
}

// 获取成员群聊列表
const groupList = ref({})
const getGroupListQuery = reactive({
    mid: '',
    page: 1,
    limit: 10,
})
const getGroupListFunc = () => {
    let load = layer.load(0)
    getGroupListQuery.mid = selectUser.c_identity
    getGroupList(getGroupListQuery)
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            // console.log(_data)
            groupList.value = _data.list
            layer.close(load)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 查看群成员按钮单击事件
const openGroupMemberListBtnCLick = () => {
    $('.alert').fadeIn()
    $('.alert-groupMemberlist').animate({ right: -1 + 'px' }, 300)
    getGroupListFunc()
}

// 点击打开群聊二维码
const groupQrCode = ref({})
const groupQrCodeClick = () => {
    $('.alert').fadeIn()
    $('.alert-group-code').slideDown()
    getGroupCodeFunc()
}
const groupQrCodeImg = computed(() => {
    return groupQrCode.value.code?.length > 0 ? 'data:image/jpeg;base64,' + QrState.code : ''
})

// 取群聊二维码
const getGroupCodeFunc = () => {
    if (selectUser.c_identity == '') {
        return layer.msg('请选择要操作的群聊')
    }
    let load = layer.load(0)
    getGroupCode({ mid: selectUser.c_identity })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            groupQrCode.value = _data

            layer.close(load)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 刷新群聊二维码
const refGroupCodeFunc = () => {
    if (selectUser.c_identity == '') {
        return layer.msg('请选择要操作的群聊')
    }
    let load = layer.load(0)
    refGroupCode({ mid: selectUser.c_identity })
        .then((res) => {
            if (res.code != 0) {
                layer.close(load)
                return layer.msg(res.msg)
            }
            let _data = JSON.parse(Decrypt(res.result, appStore.token))
            console.log(_data)
            groupQrCode.value = _data

            layer.close(load)
        })
        .catch((err) => {
            layer.close(load)
            layer.msg(err.message)
        })
}

// 解散群聊
const delGroupFunc = () => {
    if (rightMenuUser.value.c_identity == '') {
        return layer.msg('请选择需要解散的群聊')
    }
    layer.confirm(
        '确定解散吗?',
        { icon: 3, title: '提示' },
        function (index) {
            let load = layer.load(0)

            delGroup({ mid: rightMenuUser.value })
                .then((res) => {
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    //删除成功重新 获取接口渲染数据
                    chatState.message = []
                    sessListQuery.page = 1
                    getSessListFunc()
                    layer.close(load)
                    layer.msg(res.msg)
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
            layer.close(index)
        },
        function () {
            //$('.btn-slide').fadeOut()
        }
    )
}

// 群聊禁言
const bannedState = ref(false)
const bannedGroupMemberClick = (item) => {
    layer.prompt(
        {
            title: '禁言-' + item.c_nick,
            value: '',
            placeholder: '请输入禁言时间',
        },
        (value, index, elem) => {
            let params = {
                mid: selectUser.c_identity,
                qmid: item.c_qmid,
                time: value,
            }
            setBanned(params)
                .then((res) => {
                    if (res.code != 0) {
                        layer.close(index)
                        return layer.msg(res.msg)
                    }
                    layer.msg(res.msg)
                    layer.close(index)
                })
                .catch((err) => {
                    layer.msg(err.message)
                    layer.close(index)
                })
                .finally(() => {
                    $('.btn-slide').fadeOut()
                })
        }
    )
}


// 群禁言调用
const groupBannedSwitch = e =>{
    console.log(e)
}

// 移除群聊成员
const delGroupMemberFunc = (item) => {
    layer.confirm(
        '确定移除此成员吗?',
        { icon: 3, title: '提示' },
        function (index) {
            let load = layer.load(0)
            let params = {
                mid: selectUser.c_identity,
                qmid: item.c_qmid,
            }
            delGroupMember(params)
                .then((res) => {
                    if (res.code != 0) {
                        layer.close(load)
                        return layer.msg(res.msg)
                    }
                    //删除成功重新 获取接口渲染数据
                    getGroupListFunc()
                    layer.close(load)
                    layer.msg(res.msg)
                })
                .catch((err) => {
                    layer.close(load)
                    layer.msg(err.message)
                })
            layer.close(index)
        },
        function () {
            //$('.btn-slide').fadeOut()
        }
    )
}

/********************** 群聊操作结束 *************/

const chatState = reactive({
    latest_chat_time: '', //当前会话用户最后时间
    earliest_chat_time: '', //当前会话最早的时间
    message: [
        {
            time: '2020-12-16 14:19',
            data: [],
            //   data: [
            //     {
            //       time: '2020-12-16 14:19',
            //       chat_type: 1,
            //       imgUrl: '/src/assets/img/25a639_200x200.jpg',
            //       msg: '你好小姐姐',
            //     },
            //     {
            //       time: '2020-12-16 15:19',
            //       chat_type: 0,
            //       imgUrl: '/src/assets/img/25a639_200x200.jpg',
            //       msg: '你的眼睛真漂亮',
            //     },
            //   ],
            // },
            // {
            //   time: '2020-12-16 25:19',
            //   data: [
            //     {
            //       time: '2020-12-16 14:19',
            //       chat_type: 2,
            //       imgUrl: '/src/assets/img/25a639_200x200.jpg',
            //       msg: '看看我的法拉利好不好',
            //     },
            //     {
            //       time: '2020-12-16 14:19',
            //       chat_type: 1,
            //       imgUrl: '/src/assets/img/25a639_200x200.jpg',
            //       msg: '23333333333333',
            //     },
            //   ],
        },
    ],
})

const { message, latest_chat_time, earliest_chat_time } = toRefs(chatState)

// 计算两个是否大于5分钟(小的时间在前)
const timeInterval = (t1, t2) => {
    if (t2 == null || t2 == '' || t1 == null || t1 == '') {
        return true
    }
    let d1 = new Date(t1)
    let d2 = new Date(t2)
    let diff = parseInt(d2 - d1) / 1000
    return diff > 5 * 60
}

import send from '@/assets/sound/send.wav'
import S7501 from '@/assets/sound/7501.wav'
import smessage from '@/assets/sound/message.wav'
// 播放音效
const audioRef = ref(null)
const playSound = (so) => {
    if (so == '') return
    audioRef.value.pause()
    if (so == 'send') {
        audioRef.value.src = send
    }
    if (so == '7501') {
        audioRef.value.src = S7501
    }
    if (so == 'message') {
        audioRef.value.src = smessage
    }

    audioRef.value.play()
}

// 原生js代码
// import '@/assets/js/wow.min.js'
// import '@/assets/js/swiper.min.js'
// import '@/assets/js/Epp-2.1.1.min.js'

const loadScript = () => {
    const wowScript = document.createElement('script')
    wowScript.type = 'text/javascript'
    wowScript.src = '/src/assets/js/wow.min.js'
    document.body.appendChild(wowScript)

    const swiperScript = document.createElement('script')
    swiperScript.type = 'text/javascript'
    swiperScript.src = '/src/assets/js/swiper.min.js'
    document.body.appendChild(swiperScript)

    const EppScript = document.createElement('script')
    EppScript.type = 'text/javascript'
    EppScript.src = '/src/assets/js/Epp-2.1.1.min.js'
    document.body.appendChild(EppScript)
}

$(function () {
    // $('.containers .userList .userCont .userTabs ul li').click(function () {  //会话列表对象切换
    //     $(this).addClass('acti').siblings().removeClass('acti')
    // })
    $('.containers .userList .tabs ul li').click(function () {
        //用户列表对象切换
        var m = $(this).index()
        $(this).addClass('acti').siblings().removeClass('acti')
        $('.containers .userList .userCont .userTabs').eq(m).addClass('show').siblings().removeClass('show')
    })

    // $('body').on('click', '.dialogue ul li', function () {
    //   console.log('被单击', $(this))
    //   //列表选择右侧信息更改
    //   var img = $(this).find('img').attr('src')
    //   var name = $(this).find('.user span').text()
    //   var lab = $(this).find('.user i').text()
    //   $('.containers .sidebarData .userData .user .imgs img').attr('src', img)
    //   $('.containers .sidebarData .userData .user .text span').text(name)
    //   $('.containers .sidebarData .userData .user .text i').text(lab)
    // })

    // $('.dialogue ul li').click(function () {
    //   console.log('被单击', $(this))
    //   //列表选择右侧信息更改
    //   var img = $(this).find('img').attr('src')
    //   var name = $(this).find('.user span').text()
    //   var lab = $(this).find('.user i').text()
    //   $('.containers .sidebarData .userData .user .imgs img').attr('src', img)
    //   $('.containers .sidebarData .userData .user .text span').text(name)
    //   $('.containers .sidebarData .userData .user .text i').text(lab)
    // })

    $('.containers .userList .userCont .userIntr ul li').click(function () {
        var img = $(this).find('img').attr('src')
        var name = $(this).find('.text .name').text()
        $('.containers .sidebarData .userData .user .imgs img').attr('src', img)
        $('.containers .sidebarData .userData .user .text span').text(name)
    })

    $('i.btn-emoji').click(function () {
        //弹出表情框
        $(this).parent('div').find('.slide-bq').fadeIn()
    })

    $('.bq-conts ul li').click(function () {
        //选择表情
        var s = $(this).find('img').attr('src')
        s = s.substr(9)
        var m = s.replace(/.gif/, '')
        var txt = '[' + m + ']'
        insert(txt)
        $('.slide-bq').fadeOut()
    })

    function insert(txt) {
        // 输入框写入内容
        var insertText = txt
        var m = $('.containers .chats .chatFunc .textarea textarea').val()
        // console.log(m)
        $('.containers .chats .chatFunc .textarea textarea').val(m + insertText)
        $('.containers .chats .chatFunc .textarea textarea').focus()
    }

    var mess1 = '<div class="item item-reply"><div class="imgs"><img src="./img/25a639_200x200.jpg" alt=""></div><div class="text"><pre>' //对话结构
    var mess2 = '</pre></div></div>'
    var labs = '' //对话内容
    var txt = null

    $('.containers .chats .chatFunc .textarea textarea').blur(function () {
        txt = $(this).val()
        labs = txt
    })

    $('.containers .chats .chatFunc .button button').click(function () {
        //发送消息
        // console.log(111);
        // if (labs != '') {
        //     msg_right(labs)
        //     $('.containers .chats .chatFunc .textarea textarea').val('');
        //     labs = '';
        // }
    })

    function msg_right(tex) {
        //追加结构
        console.log(111)
        if (tex != '') {
            $('.shatConts .items')
                .siblings()
                .last()
                .find('.conts')
                .append(mess1 + tex + mess2)
            $('.shatConts').scrollTop($('.shatConts').prop('scrollHeight')) //滚动到最底部
        }
    }

    $('.containers .dialogue .reply .textarea textarea').keypress(function (e) {
        //设置快捷键发送
        // var key = e.which;
        // if (key == 10) {
        //     down = 0;
        //     txt = $(this).val();
        //     $(this).val(txt + '\n')
        // }
        // if (key == 13) {
        //     down = 1;
        // }
    })
    $('i.btn-mess').click(function () {
        //快捷短语弹出
        $('.slide-mess').fadeIn()
    })
    $('.slide-mess p').click(function () {
        //快捷短语选择
        var mess = $(this).text()
        send_msg_cont.value = mess
        // insert(mess)
        $('.slide-mess').fadeOut()
    })

    $('.function .box').hover(
        function () {},
        function () {
            $('.slide-mess').fadeOut()
            $('.slide-bq').fadeOut()
        }
    )
    $('.containers .contactList .title i').attr('att', '1')
    $('.containers .contactList .title i').click(function () {
        if ($(this).attr('att') == 1) {
            $(this).addClass('btn-unfold')
            $(this).parent('.title').attr('title', '展开')
            $('.containers .contactList .list ul li .intr').hide()
            $('.containers .contactList .title span').hide()
            $('.containers').addClass('unfold')
            $(this).attr('att', '0')
        } else if ($(this).attr('att') == 0) {
            $(this).removeClass('btn-unfold')
            $(this).parent('.title').attr('title', '折叠')
            $('.containers .contactList .list ul li .intr').show()
            $('.containers .contactList .title span').show()
            $('.containers').removeClass('unfold')
            $(this).attr('att', '1')
        }
    })

    $('.btn-code').click(function () {
        $('.alert').fadeIn()
        $('.alert-code').slideDown()
    })
    $('.alert .alert-code .closes').click(function () {
        $('.alert').fadeOut()
        $('.alert-code').slideUp()
    })
    $('.btn-receive').click(function () {
        $('.alert').fadeIn()
        $('.alert-receive').animate({ right: -1 + 'px' }, 300)
    })
    $('.alert-bg').click(function () {
        $('.btn-slide').fadeOut()
        $('.alert').fadeOut()
        $('.alert-code').slideUp()
        $('.alert-group-code').slideUp()
        $('.alert-content').animate({ right: -501 + 'px' }, 300)
        rightMenuUser.value = ''
        rightMenuUserModel.value = {}
    })
    $('.btn-blacklist').click(function () {
        $('.alert').fadeIn()
        $('.alert-blacklist').animate({ right: -1 + 'px' }, 300)
    })
    $('.btn-mass').click(function () {
        $('.alert').fadeIn()
        $('.alert-mass').animate({ right: -1 + 'px' }, 300)
    })
    $('.btn-greet').click(function () {
        $('.alert').fadeIn()
        $('.alert-greet').animate({ right: -1 + 'px' }, 300)
    })
    $('.btn-fast').click(function () {
        $('.alert').fadeIn()
        $('.alert-fast').animate({ right: -1 + 'px' }, 300)
    })
    $('.btn-QA').click(function () {
        $('.alert').fadeIn()
        $('.alert-QA').animate({ right: -1 + 'px' }, 300)
    })

    $('.btn-statistics').click(function () {
        $('.alert').fadeIn()
        $('.alert-statistics').animate({ right: -1 + 'px' }, 300)
    })

    $('.alert-content i.closes').click(function () {
        $('.alert').fadeOut()
        $(this)
            .parents('.alert-content')
            .animate({ right: -501 + 'px' }, 300)
    })

    // $('i.btn-more').click(function () {
    //   $(this).parents('.func').find('.btn-slide').fadeIn()
    // })
    // $('body').on('mouseover  mouseout','.list ul li,.lists ul li', function(e){
    //   $(this).find('.btn-slide').fadeOut()
    // })
    // $('.list ul li,.lists ul li').hover(
    //   function () {},
    //   function () {
    //     $(this).find('.btn-slide').fadeOut()
    //   }
    // )
    $('.btn-massTxt').click(function () {
        $('.alerts').fadeIn()
        $('.alert-msssText').slideDown()
    })

    // $('.edit-massTxt').click(function () {
    //   $('.alerts').fadeIn()
    //   $('.alert-msssText').slideDown()
    // })

    $('.btn-greetTxt').click(function () {
        $('.alerts').fadeIn()
        $('.alerts-greetTxt').slideDown()
    })

    // $('.edit-greet').click(function () {
    //   $('.alerts').fadeIn()
    //   $('.alerts-greetTxt').slideDown()
    // })

    $('.btn-fastTxt').click(function () {
        $('.alerts').fadeIn()
        $('.alerts-fastTxt').slideDown()
    })

    // $('.edit-fastTxt').click(function () {
    //   $('.alerts').fadeIn()
    //   $('.alerts-fastTxt').slideDown()
    // })

    $('.btn-QATxt').click(function () {
        $('.alerts').fadeIn()
        $('.alerts-QATxt').slideDown()
    })

    $('.edit-QA').click(function () {
        $('.alerts').fadeIn()
        $('.alerts-QATxt').slideDown()
    })
    $('.alerts-slide .title i.closes').click(function () {
        $('.alerts').fadeOut()
        $(this).parents('.alerts-slide').slideUp()
    })
    $('.alerts .alerts-bg').click(function () {
        $('.alerts').fadeOut()
        $('.alerts-slide').slideUp()
    })
    $('.select .box').click(function () {
        $(this).addClass('acti').siblings().removeClass('acti')
        // $(this).find('input').attr('checked', 'checked')
    })

    $('.btn-my').click(function () {
        $('.alerts').fadeIn()
        $('.alert-my').slideDown()
    })

    $('.alerts .alert-my .title i.closes').click(function () {
        $('.alerts').fadeOut()
        $('.alert-my').slideUp()
    })

    $('.btn-del').click(function () {
        $(this).parents('li').remove()
    })

    $('body').on('click', '.userTabs ul li', function () {
        $('.containers-fr').addClass('onChat')
    })
    // $('.userTabs ul li').click(function () {
    //   $('.containers-fr').addClass('onChat')
    // })
    $('.userData .fast .list ul li').click(function () {
        var fastTxt = $(this).text()
        $('.containers .chats .chatFunc .textarea textarea').val('')
        insert(fastTxt)
    })

    document.oncontextmenu = function () {
        return false
    }
    // $('.userCont').on('mousedown', function (e) {
    //   var key = e.which //获取鼠标键位
    //   if (key == 3) {
    //     //1：代表左键；2：代表中键；3：代表右键
    //     //获取右键点击坐标
    //     var x = e.clientX
    //     var y = e.clientY
    //     $('.rightMenu').show().css({ left: x, top: y })
    //   }
    // })

    addFunc()
})

// 新增的js
function addFunc() {
    // //点击任意部位隐藏
    $(document).on('click', function () {
        isShowRightMenu.value = false
        // rightMenuUser.value = ''
        // rightMenuUserModel.value ={}
        //$('.btn-slide').fadeOut()
    })

    // 点击编辑快捷回复
    $('body').on('click', '.edit-fastTxt', function () {
        $('.alerts').fadeIn()
        $('.alerts-fastTxt').slideDown()
    })

    // 点击编辑智能问答
    $('body').on('click', '.edit-QA', function () {
        $('.alerts').fadeIn()
        $('.alerts-QATxt').slideDown()
    })

    // 点击编辑打招呼
    $('body').on('click', '.edit-greet', function () {
        $('.alerts').fadeIn()
        $('.alerts-greetTxt').slideDown()
    })

    // 点击编辑群发
    $('body').on('click', '.edit-massTxt', function () {
        $('.alerts').fadeIn()
        $('.alert-msssText').slideDown()
    })

    // 点击更多三个点按钮弹出操作菜单
    $('body').on('click', 'i.btn-more', function () {
        // $('.btn-slide').fadeOut()
        $(this).parents('.func').find('.btn-slide').fadeIn()
    })

    $('.bq-conts ul li').off('click')
    $('.bq-conts ul li').click(function () {
        //选择表情
        var s = $(this).find('img').attr('src')
        let idx = s.indexOf('/assets/img/bq/')
        s = s.substr(idx + 15)
        var m = s.replace(/.gif/, '')
        send_msg_cont.value += '[face=' + m + ']'
        $('.slide-bq').fadeOut()
    })

    // 点击隐藏群聊二维码
    $('.alert .alert-group-code .closes').click(function () {
        $('.alert').fadeOut()
        $('.alert-group-code').slideUp()
    })
}
</script>

<style scoped>
/* 引入css */
@import '../assets/css/style.css';
@import '../assets/css/css.css';
@import '../assets/css/Swiper.css';
@import '../assets/css/iconfont.css';
@import '../assets/css/bootstrap.min.css';
@import '../assets/css/bootstrap-theme.min.css';
@import '../assets/css/animate.min.css';

.containers .userList .userCont .dialogue ul li.active {
    background-color: #eff0f1;
}
.containers .userList .userCont .dialogue ul li.active:after {
    content: '';
    position: absolute;
    height: 100%;
    left: 0;
    width: 4px;
    top: 0;
    background-color: #307bee;
}
.alerts .alerts-groupTxt .conts .rows .text input {
    width: 100%;
    height: 32px;
    border: 1px solid #dddedf;
    border-radius: 4px;
    padding: 0 10px;
    margin: 8px 0;
}
.alerts .alerts-groupTxt {
    height: 520px;
    margin-top: -220px;
}
.alerts .alerts-groupTxt .conts .rows .text .select {
    width: 100%;
}
.alerts .alerts-groupTxt .conts .rows .text .select .box {
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 10px;
}
.alerts .alerts-groupTxt .conts .rows .text .select .box input {
    padding: 0;
    margin: 0;
    margin-right: 4px;
    width: 14px;
    height: 14px;
    border: 1px solid #dddedf;
    border-radius: 50%;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.alerts .alerts-groupTxt .conts .rows .text .select .box input:checked {
    border: 4px solid #409eff;
    background-color: #fff;
}

.alerts .alerts-groupTxt .conts .rows .text .select .box.acti label {
    color: #409eff;
}
.alerts .alerts-groupTxt .conts .rows .text .select .box label {
    margin: 0;
    padding: 0;
    padding-right: 10px;
    color: #666;
    font-weight: normal;
}
.group-img {
    width: 100px;
    height: 100px;
}

.dpno {
    display: none;
}

.alert .alert-groupMemberlist .conts {
    width: 100%;
    padding-top: 30px;
}
.alert .alert-groupMemberlist .conts .list {
    width: 100%;
    height: calc(100vh - 165px);
    overflow-y: scroll;
}
.alert .alert-groupMemberlist .conts .list::-webkit-scrollbar-track-piece {
    background-color: #f8f8f8;
}
.alert .alert-groupMemberlist .conts .list::-webkit-scrollbar {
    width: 0px;
    height: 9px;
}
.alert .alert-groupMemberlist .conts .list::-webkit-scrollbar-thumb {
    background-color: #ddd;
    background-clip: padding-box;
    min-height: 28px;
}
.alert .alert-groupMemberlist .conts .list::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
}
.alert .alert-groupMemberlist .conts .list ul {
    width: 100%;
    margin: 0;
}
.alert .alert-groupMemberlist .conts .list ul li {
    width: 100%;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    padding: 15px 12px;
    margin-bottom: 20px;
    border-radius: 6px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.alert .alert-groupMemberlist .conts .list ul li .sele {
    width: 36px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.alert .alert-groupMemberlist .conts .list ul li .func {
    width: 72px;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.alert .alert-groupMemberlist .conts .list ul li .func span {
    color: #307bee;
}
.alert .alert-groupMemberlist .conts .list ul li .func i.btn-more {
    width: 20px;
    height: 20px;
    background: url('../assets/img/304dfe_18x18.png') center no-repeat;
    display: inline-block;
}
.alert .alert-groupMemberlist .conts .list ul li .func i.btn-more:hover {
    background: url('../assets/img/24ba6b_18x18.png') center no-repeat;
}
.alert .alert-groupMemberlist .conts .list ul li .func .btn-slide {
    width: 154px;
    height: auto;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    right: -10px;
    top: 50px;
    display: none;
    z-index: 99;
    border-radius: 6px;
}
.alert .alert-groupMemberlist .conts .list ul li .func .btn-slide:after {
    content: '';
    position: absolute;
    right: 10px;
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
}
.alert .alert-groupMemberlist .conts .list ul li .func .btn-slide p {
    width: 100%;
    text-align: center;
    line-height: 30px;
    margin: 0;
    font-size: 14px;
    color: #307bee;
}
.alert .alert-groupMemberlist .conts .list ul li .func .btn-slide p:hover {
    background-color: #307bee;
    color: #fff;
}
.alert .alert-groupMemberlist .conts .list ul li .text {
    width: calc(100% - 108px);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
}
.alert .alert-groupMemberlist .conts .list ul li .text img {
    width: 100%;
    max-width: 100px;
}
.alert .alert-groupMemberlist .buttons {
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
.alert .alert-groupMemberlist .buttons button {
    width: 30%;
    height: 40px;
    background-color: #409eff;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    border: none;
}
.alert .alert-groupMemberlist .buttons button.btn-pic {
    background-color: #07c160;
}
.alert .alert-groupMemberlist .buttons button.btn-sele {
    background-color: #f56c6c;
}

.alert .alert-group-code {
    width: 500px;
    height: 720px;
    background-color: #fff;
    border-radius: 8px;
    padding: 18px;
    position: absolute;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    margin-top: -360px;
    display: none;
}
.alert .alert-group-code .closes {
    width: 40px;
    height: 40px;
    background: url('../assets/img/18c7e2_13x12.jpg') center no-repeat;
    position: absolute;
    right: 20px;
    cursor: pointer;
    top: 24px;
}
.alert .alert-group-code .title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
}
.alert .alert-group-code .conts {
    width: 100%;
    padding-top: 20px;
}
.alert .alert-group-code .conts .links {
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #555;
    line-height: 28px;
}
.alert .alert-group-code .conts .imgs {
    width: 100%;
    padding: 20px 0;
    text-align: center;
}
.alert .alert-group-code .conts .imgs img {
    width: 80%;
    max-width: 300px;
}
.alert .alert-group-code .conts .button {
    width: 100%;
    padding: 12px 0;
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
}
.alert .alert-group-code .conts .button button {
    width: 140px;
    height: 40px;
    background-color: #409eff;
    border-radius: 4px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
}
.alert .alert-group-code .conts .text {
    width: 100%;
    padding-top: 8px;
}
.alert .alert-group-code .conts .text p {
    line-height: 22px;
    font-size: 14px;
    color: #ea4141;
}
</style>
