<template>
  <div class="containers">
    <div class="userSlide fl">
      <div class="userInf">
        <div class="ico">
          <img src="../assets/img/user.jpg" class="btn-my" alt="" />
        </div>
        <div class="user-cont">
          <div class="user-slide">
            <div class="intr">
              <div class="imgs">
                <img src="../assets/img/user.jpg" class="btn-my" alt="" />
              </div>
              <div class="txts">
                <p class="txt-name btn-my">昵称：客服666082</p>
                <p>
                  <em>id:05626</em>
                </p>
              </div>
            </div>
            <div class="state">
              <p>卡密：AJ-8RQR1AP5BHE17IUF90R0</p>
              <p>到期时间：2023-03-08 13:21:25</p>
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
          <li class="btn-code">
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
          <li class="btn-receive">
            <div class="ico">
              <span class="iconfont icon-jiedaishenqing"></span>
            </div>
            <div class="txt">接待</div>
            <div class="mess">接待</div>
          </li>
          <li class="btn-blacklist">
            <div class="ico">
              <span class="iconfont icon-heimingdan"></span>
            </div>
            <div class="txt">黑名单</div>
            <div class="mess">黑名单</div>
          </li>
          <li class="btn-mass">
            <div class="ico">
              <span class="iconfont icon-icon"></span>
            </div>
            <div class="txt">群发</div>
            <div class="mess">群发</div>
          </li>
          <li class="btn-greet">
            <div class="ico">
              <span class="iconfont icon-dazhaohu"></span>
            </div>
            <div class="txt">打招呼</div>
            <div class="mess">打招呼</div>
          </li>
          <li class="btn-fast">
            <div class="ico">
              <span class="iconfont icon-kuaijiehuifuguanli"></span>
            </div>
            <div class="txt">快捷回复</div>
            <div class="mess">快捷回复</div>
          </li>
          <li class="btn-QA">
            <div class="ico">
              <span class="iconfont icon-zhinengsuanfa"></span>
            </div>
            <div class="txt">智能问答</div>
            <div class="mess">智能问答</div>
          </li>
          <li class="btn-statistics">
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
      <!-- <div class="search">
                <div class="conts">
                    <div class="btns fl">
                        <img src="../assets/img/cd5804_16x16.png" alt="">
                    </div>
                    <div class="input fl">
                        <input type="text" placeholder="搜索用户名称" name="" id="">
                    </div>
                    <div class="func fr">
                        <img src="../assets/img/5315af_16x16.png" alt="">
                    </div>
                </div>
            </div> -->
      <div class="tabs">
        <ul>
          <li :class="[location == 0 ? 'acti' : '']" id="session_tab" @click="location = 0">
            <span>会话列表</span>
          </li>
          <li id="alluser_tab" :class="[location == 1 ? 'acti' : '']" @click="location = 1">
            <span>用户列表</span>
          </li>
        </ul>
      </div>
      <div class="userCont" onscroll="alluserscroll(event)" id="userlist_scroll">
        <div class="userTabs dialogue show">
          <ul id="session_users" v-show="location == 0">
            <li class="off-line">
              <i class="btn-close"></i>
              <div class="imgs fl">
                <img src="../assets/img/441e89_200x200.jpg" alt="" />
                <div class="mess">7</div>
              </div>
              <div class="intr fr">
                <div class="text fl">
                  <div class="user">
                    <span>游客20227125625</span>
                    <i>PC端</i>
                  </div>
                </div>
                <div class="time fr">12月16日 14:19</div>
              </div>
            </li>
            <li class="online">
              <i class="btn-close"></i>
              <div class="imgs fl">
                <img src="../assets/img/25a639_200x200.jpg" alt="" />
                <div class="mess">3</div>
              </div>
              <div class="intr fr">
                <div class="text fl">
                  <div class="user">
                    <span>游客20227125625</span>
                    <i>PC端</i>
                  </div>
                  <div class="txts">您好！</div>
                </div>
                <div class="time fr">12月16日 14:19</div>
              </div>
            </li>
            <li class="busy">
              <i class="btn-close"></i>
              <div class="imgs fl">
                <img src="../assets/img/25f63b_200x200.jpg" alt="" />
              </div>
              <div class="intr fr">
                <div class="text fl">
                  <div class="user">
                    <span>游客20227125625</span>
                    <i>PC端</i>
                  </div>
                  <div class="txts">[图片]</div>
                </div>
                <div class="time fr">12月16日 14:19</div>
              </div>
            </li>
            <li class="off-line">
              <i class="btn-close"></i>
              <div class="imgs fl">
                <img src="../assets/img/441e89_200x200.jpg" alt="" />
                <div class="mess">9</div>
              </div>
              <div class="intr fr">
                <div class="text fl">
                  <div class="user">
                    <span>游客20227125625</span>
                    <i>PC端</i>
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
                  <div class="user">
                    <span>游客20227125625</span>
                    <i>PC端</i>
                  </div>
                  <div class="txts">222</div>
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
                  <div class="user">
                    <span>游客20227125625</span>
                    <i>PC端</i>
                  </div>
                  <div class="txts">222</div>
                </div>
                <div class="time fr">12月16日 14:19</div>
              </div>
            </li>
            <li class="busy">
              <i class="btn-close"></i>
              <div class="imgs fl">
                <img src="../assets/img/25f63b_200x200.jpg" alt="" />
              </div>
              <div class="intr fr">
                <div class="text fl">
                  <div class="user">
                    <span>游客20227125625</span>
                    <i>PC端</i>
                  </div>
                  <div class="txts">吃早饭了吗？</div>
                </div>
                <div class="time fr">12月16日 14:19</div>
              </div>
            </li>
            <li class="off-line">
              <i class="btn-close"></i>
              <div class="imgs fl">
                <img src="../assets/img/441e89_200x200.jpg" alt="" />
              </div>
              <div class="intr fr">
                <div class="text fl">
                  <div class="user">
                    <span>游客20227125625</span>
                    <i>PC端</i>
                  </div>
                  <div class="txts">昨天的工作好了呀。</div>
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
                  <div class="user">
                    <span>游客20227125625</span>
                    <i>PC端</i>
                  </div>
                  <div class="txts">快过来！</div>
                </div>
                <div class="time fr">12月16日 14:19</div>
              </div>
            </li>
            <li class="busy">
              <i class="btn-close"></i>
              <div class="imgs fl">
                <img src="../assets/img/25f63b_200x200.jpg" alt="" />
                <div class="mess">12</div>
              </div>
              <div class="intr fr">
                <div class="text fl">
                  <div class="user">
                    <span>游客20227125625</span>
                    <i>PC端</i>
                  </div>
                  <div class="txts">[图片]</div>
                </div>
                <div class="time fr">12月16日 14:19</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="userTabs userIntr">
          <ul id="all_users" v-show="location == 1">
            <li class="online acti">
              <i class="btn-close"></i>
              <div class="imgs fl">
                <img src="../assets/img/441e89_200x200.jpg" alt="" />
              </div>
              <div class="intr fr">
                <div class="text fl">
                  <div class="name">游客20227125625</div>
                  <div class="nums">
                    <div class="txt fl">
                      积分：
                      <span>2869</span>
                    </div>
                    <div class="txt fl">
                      消费：
                      <em>6965</em>
                    </div>
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
                    <div class="txt fl">
                      积分：
                      <span>2869</span>
                    </div>
                    <div class="txt fl">
                      消费：
                      <em>6965</em>
                    </div>
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
                    <div class="txt fl">
                      积分：
                      <span>2869</span>
                    </div>
                    <div class="txt fl">
                      消费：
                      <em>6965</em>
                    </div>
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
                    <div class="txt fl">
                      积分：
                      <span>2869</span>
                    </div>
                    <div class="txt fl">
                      消费：
                      <em>6965</em>
                    </div>
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
                    <div class="txt fl">
                      积分：
                      <span>2869</span>
                    </div>
                    <div class="txt fl">
                      消费：
                      <em>6965</em>
                    </div>
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
                    <div class="txt fl">
                      积分：
                      <span>2869</span>
                    </div>
                    <div class="txt fl">
                      消费：
                      <em>6965</em>
                    </div>
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
                    <div class="txt fl">
                      积分：
                      <span>2869</span>
                    </div>
                    <div class="txt fl">
                      消费：
                      <em>6965</em>
                    </div>
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
                    <div class="txt fl">
                      积分：
                      <span>2869</span>
                    </div>
                    <div class="txt fl">
                      消费：
                      <em>6965</em>
                    </div>
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
                    <div class="txt fl">
                      积分：
                      <span>2869</span>
                    </div>
                    <div class="txt fl">
                      消费：
                      <em>6965</em>
                    </div>
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
          <div class="shatConts" id="chat_content">
            <div style="text-align: center; color: #ccc; cursor: pointer; margin-top: 5px" id="load_more">点击加载更多</div>
            <div style="text-align: center; color: #ccc; cursor: default; margin-top: 5px" id="load_more">没有更多数据了</div>

            <div class="items" v-for="(item, index) in message" :key="index">
              <div class="time">{{ item.time }}</div>
              <div class="conts">
                <div class="item" :class="[item2.chat_type == 1 ? 'item-reply' : '']" v-for="(item2, index2) in item.data" :key="index2">
                  <div class="imgs">
                    <img :src="item2.imgUrl" alt="" />
                  </div>
                  <div class="text">
                    <pre>{{ item2.msg }}</pre>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="items items-reply" >
              <div class="time">12月16日 14:19</div>
              <div class="conts">
                <div class="item item-reply">
                  <div class="imgs">
                    <img src="../assets/img/25a639_200x200.jpg" alt="" />
                  </div>
                  <div class="text">
                    <pre>
您好，欢迎光临，这段欢迎语可以随意修改，请输入以下序号可进行回复1.请问怎么搭建这套客服系统2.这个价格能便宜吗</pre
                    >
                  </div>
                </div>
                <div class="item">
                  <div class="imgs">
                    <img src="../assets/img/25a639_200x200.jpg" alt="" />
                  </div>
                  <div class="text">
                    <pre>2</pre>
                  </div>
                </div>
                <div class="item item-reply">
                  <div class="imgs">
                    <img src="../assets/img/25a639_200x200.jpg" alt="" />
                  </div>
                  <div class="text">
                    <pre>您好子，这个价格已经最低了哦</pre>
                  </div>
                </div>
                <div class="item">
                  <div class="imgs">
                    <img src="../assets/img/25a639_200x200.jpg" alt="" />
                  </div>
                  <div class="text">
                    <pre>86996</pre>
                  </div>
                </div>
              </div>
            </div>
            <div class="items">
              <div class="time">12月16日 14:19</div>
              <div class="conts">
                <div class="item item-reply">
                  <div class="imgs">
                    <img src="../assets/img/25a639_200x200.jpg" alt="" />
                  </div>
                  <div class="text">
                    <pre>2</pre>
                  </div>
                </div>
                <div class="item">
                  <div class="imgs">
                    <img src="../assets/img/25a639_200x200.jpg" alt="" />
                  </div>
                  <div class="text">
                    <pre>85996</pre>
                  </div>
                </div>
              </div>
            </div>
            <div class="items">
              <div class="time">12月16日 14:19</div>
              <div class="conts">
                <div class="item item-reply">
                  <div class="imgs">
                    <img src="../assets/img/25a639_200x200.jpg" alt="" />
                  </div>
                  <div class="text">
                    <pre>
您好，欢迎光临，这段欢迎语可以随意修改，请输入以下序号可进行回复1.请问怎么搭建这套客服系统2.这个价格能便宜吗</pre
                    >
                  </div>
                </div>
                <div class="item">
                  <div class="imgs">
                    <img src="../assets/img/25a639_200x200.jpg" alt="" />
                  </div>
                  <div class="text">
                    <pre>85996</pre>
                  </div>
                </div>
              </div>
            </div> -->
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
                <div class="box fl box-picture" id="select_send_img">
                  <i class="btn-picture"></i>
                  <!-- <input type="file" name="" id="">  -->
                </div>
                <div class="box fl">
                  <i class="btn-mess"></i>
                  <div class="slide-mess">
                    <p>您好，欢迎光临，有什么可以帮助您的？</p>
                    <p>稍等一下，我这边帮您查看一下</p>
                    <p>您的预算是多少呢</p>
                    <p>我们这边后台已经在处理中，情稍微等待一下</p>
                  </div>
                </div>
                <div class="box fl">
                  <i class="btn-conver"></i>
                </div>
              </div>
            </div>
            <div class="textarea">
              <textarea name="" id="msg_cont" cols="0" rows="0" placeholder="请输入对话消息"></textarea>
            </div>
            <div class="button">
              <button id="send_msg">发送</button>
            </div>
          </div>
        </div>
        <div class="sidebarData fl">
          <div class="userData">
            <div class="user">
              <div class="imgs fl">
                <img src="../assets/img/441e89_200x200.jpg" alt="" />
              </div>
              <div class="text fl">
                <span>游客2022719587</span>
                <i>PC端</i>
              </div>
            </div>
            <div class="intrs">
              <div class="rows btns">
                <div class="labs fl">密码</div>
                <div class="txts fl" id="cur_pass"></div>
              </div>
              <div class="rows">
                <div class="labs fl">余额</div>
                <div class="txts fl" id="cur_balance"></div>
              </div>
              <div class="rows">
                <div class="labs fl">消费</div>
                <div class="txts fl" id="cur_consumption"></div>
              </div>
              <div class="rows">
                <div class="labs fl">积分</div>
                <div class="txts fl" id="cur_integral"></div>
              </div>
              <div class="rows">
                <div class="labs fl">在线状态</div>
                <div class="txts fl" id="cur_online"></div>
              </div>
              <!-- <div class="rows">
                                <div class="labs fl">登陆时间</div>
                                <div class="txts fl" id="cur_login_time"></div>
                            </div> -->
              <div class="rows">
                <div class="labs fl">登陆IP</div>
                <div class="txts fl" id="cur_login_ip"></div>
              </div>
              <div class="rows">
                <div class="labs fl">登陆地</div>
                <div class="txts fl" id="cur_address"></div>
              </div>
              <!-- <div class="rows">
                                <div class="labs fl">登陆次数</div>
                                <div class="txts fl" id="cur_login_num"></div>
                            </div> -->
              <div class="rows">
                <div class="labs fl">注册时间</div>
                <div class="txts fl" id="cur_reg_time"></div>
              </div>
              <div class="rows">
                <div class="labs fl">上次对话</div>
                <div class="txts fl" id="cur_chat_time"></div>
              </div>
              <div class="rows">
                <div class="labs fl">备注</div>
                <div class="txts fl" id="cur_chat_note"></div>
              </div>
              <div class="rows">
                <div class="button">
                  <button>按钮一</button>
                  <button>按钮二</button>
                </div>
              </div>
            </div>
            <div class="fast">
              <div class="title">快捷短语</div>
              <div class="list">
                <ul>
                  <li>您好，有什么可以帮助您！</li>
                  <li>臣妾做不到啊~~~要是我是老板多好啊。</li>
                  <li>亲，真的好会砍价哦，我差点就答应您了。</li>
                  <li>亲，您打算等下下单吗，如果您确定要的话我和主管申请价格哦。</li>
                  <li>亲，真的好可惜，我刚才去申请了，还是不行。</li>
                  <li>亲，非常抱歉的啊，因为活动期间。</li>
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
        <div class="links">访客链接：http://commi.cn/?ewm=ma1ofuwlbupxhaq81435</div>
        <div class="imgs">
          <img src="../assets/img/068522_300x300.jpg" alt="" />
        </div>
        <div class="button">
          <button>失效当前二维码</button>
          <button>重新生成二维码</button>
        </div>
        <div class="text">
          <p>【失效当前二维码】：会失效二维码的【过期值】，导致之前依然能正常使用的二维码也全部失效。【请谨慎操作该种方式生成二维码！！！】</p>
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
            <li>
              <div class="imgs fl">
                <img src="../assets/img/da8a96_320x200.png" alt="" />
              </div>
              <div class="text fl">
                <span>骚娘们</span>
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
            <li>
              <div class="imgs fl">
                <img src="../assets/img/da8a96_320x200.png" alt="" />
              </div>
              <div class="text fl">
                <span>骚娘们</span>
                <a href="#">取消拉黑</a>
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
            <li>
              <div class="txts fl">aaa</div>
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>
        <div class="buttons">
          <button class="btn-massTxt">新建文本群发</button>
          <button>新建图片群发</button>
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
              <div class="imgs fl">
                <img src="../assets/img/4b97db_303x304.jpg" alt="" />
              </div>
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
          </ul>
        </div>
        <div class="buttons">
          <button class="btn-greetTxt">新建文本群发</button>
          <button>新建图片群发</button>
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
            <li>
              <div class="sele fl">
                <input type="checkbox" name="" id="" />
              </div>
              <div class="text fl">1</div>
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
            </li>
          </ul>
        </div>
      </div>
      <div class="buttons">
        <button class="btn-fastTxt">新建文本快捷回复</button>
        <button class="btn-pic">新建图片快捷回复</button>
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
            <li>
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
            </li>
            <li>
              <div class="intr fl">
                <div class="rows rows-q">
                  <i>Q7:</i>
                  <em>9</em>
                </div>
                <div class="rows rows-a">
                  <i>A7:</i>
                  <img src="../assets/img/4b97db_303x304.jpg" alt="" />
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
          </ul>
        </div>
        <div class="buttons">
          <button class="btn-QATxt">新建智能问答</button>
        </div>
      </div>
    </div>
    <div class="alert-content alert-statistics">
      <div class="title">
        <span>
          统计
          <em>统计近七天新增数据</em>
        </span>
        <i class="closes"></i>
      </div>
      <div class="conts">
        <div class="list">
          <ul>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
            <li>
              <div class="time fl">2023-03-06</div>
              <div class="new fr">新增客户:2</div>
            </li>
          </ul>
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
            <textarea name="" id="" cols="0" rows="0"></textarea>
          </div>
        </div>
        <div class="button">
          <button>确定</button>
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
            <textarea name="" id="" cols="0" rows="0"></textarea>
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
          <button>确定</button>
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
            <textarea name="" id="" cols="0" rows="0"></textarea>
          </div>
        </div>
        <div class="button">
          <button>确定</button>
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
            <input type="text" placeholder="请输入问题" />
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
            <textarea name="" id="" cols="0" rows="0"></textarea>
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
          <button>确定</button>
        </div>
      </div>
    </div>
    <div class="alert-my">
      <div class="title">
        <span>打招呼</span>
        <i class="closes"></i>
      </div>
      <div class="conts">
        <div class="rows">
          <div class="labs fl">客服昵称</div>
          <div class="text fl">
            <input type="text" value="客服666082" />
          </div>
        </div>
        <div class="rows">
          <div class="labs fl">客服头像</div>
          <div class="text fl">
            <div class="image">
              <div class="box">
                <img src="../assets/img/5871c1_100x100.png" alt="" />
                <input type="file" name="" id="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <button>确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import $ from 'jquery'
import { ref, reactive, toRefs, onMounted } from 'vue'

// 引入浏览器指纹识别
import Fingerprintjs2 from 'fingerprintjs2'
import SocketService from '@/utils/websocket'
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
  console.log(route.query.ewm)
  createFingerprint()
})

const createFingerprint = () => {
  const fingerprint = Fingerprintjs2.get((components) => {
    const values = components.map((component) => component.value)
    const murmur = Fingerprintjs2.x64hash128(values.join(''), 31)
    console.log('浏览器指纹id:', murmur)
  })
}

// 当前location
const location = ref(0)

/**
 * 思路：
 * 1. 从接口获取数据， 判断当前信息的时间和message中最后一条记录的时间
 * 2. 如果大于5分钟 则向message中添加一个新的数数组对象
 * 3. 如果小于5分钟，则把新消息追加到 当前message中的最后一个元素的data数据中
 * 4. 点击加载更多翻页的时候， 如果当前数据为空 则表示没有数据 ，把点击加载更多隐藏， 没有更多数据在显示出来
 */

const data = reactive({
  latest_chat_time: '', //当前会话用户最后时间
  earliest_chat_time: '', //当前会话最早的时间
  message: [
    {
      time: '2020-12-16 14:19',
      data: [
        {
          time: '2020-12-16 14:19',
          chat_type: 1,
          imgUrl: '/src/assets/img/25a639_200x200.jpg',
          msg: '你好小姐姐',
        },
        {
          time: '2020-12-16 15:19',
          chat_type: 0,
          imgUrl: '/src/assets/img/25a639_200x200.jpg',
          msg: '你的眼睛真漂亮',
        },
      ],
    },
    {
      time: '2020-12-16 25:19',
      data: [
        {
          time: '2020-12-16 14:19',
          chat_type: 2,
          imgUrl: '/src/assets/img/25a639_200x200.jpg',
          msg: '看看我的法拉利好不好',
        },
        {
          time: '2020-12-16 14:19',
          chat_type: 1,
          imgUrl: '/src/assets/img/25a639_200x200.jpg',
          msg: '23333333333333',
        },
      ],
    },
  ],
})

const { message, latest_chat_time, earliest_chat_time } = toRefs(data)

// 计算两个是否大于5分钟
const timeInterval = (t1, t2) => {
  if (t2 == null || t2 == '' || t1 == null || t1 == '') {
    return true
  }
  let d1 = new Date(t1)
  let d2 = new Date(t2)
  let diff = parseInt(d2 - d1) / 1000
  return diff > 5 * 60
}

// 原生js代码
$(function () {
  $('.dialogue ul li').click(function () {
    //列表选择右侧信息更改
    var img = $(this).find('img').attr('src')
    var name = $(this).find('.user span').text()
    var lab = $(this).find('.user i').text()
    $('.containers .sidebarData .userData .user .imgs img').attr('src', img)
    $('.containers .sidebarData .userData .user .text span').text(name)
    $('.containers .sidebarData .userData .user .text i').text(lab)
  })

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
    // var s = $(this).find('img').attr('src');
    // s = s.substr(9);
    // var m = s.replace(/.gif/, "");
    // var txt = '[' + m + ']';
    // insert(txt);
    $('.slide-bq').fadeOut()
  })

  function insert(txt) {
    // 输入框写入内容
    var insertText = txt
    var m = $('.containers .chats .chatFunc .textarea textarea').val()
    console.log(m)
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
    insert(mess)
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
    $('.alert').fadeOut()
    $('.alert-content').animate({ right: -501 + 'px' }, 300)
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
  $('i.btn-more').click(function () {
    $(this).parents('.func').find('.btn-slide').fadeIn()
  })
  $('.list ul li,.lists ul li').hover(
    function () {},
    function () {
      $(this).find('.btn-slide').fadeOut()
    }
  )
  $('.btn-massTxt').click(function () {
    $('.alerts').fadeIn()
    $('.alert-msssText').slideDown()
  })
  $('.edit-massTxt').click(function () {
    $('.alerts').fadeIn()
    $('.alert-msssText').slideDown()
  })

  $('.btn-greetTxt').click(function () {
    $('.alerts').fadeIn()
    $('.alerts-greetTxt').slideDown()
  })
  $('.edit-greet').click(function () {
    $('.alerts').fadeIn()
    $('.alerts-greetTxt').slideDown()
  })

  $('.btn-fastTxt').click(function () {
    $('.alerts').fadeIn()
    $('.alerts-fastTxt').slideDown()
  })
  $('.edit-fastTxt').click(function () {
    $('.alerts').fadeIn()
    $('.alerts-fastTxt').slideDown()
  })

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
    $(this).find('input').attr('checked', 'checked')
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

  $('.userTabs ul li').click(function () {
    $('.containers-fr').addClass('onChat')
  })
  $('.userData .fast .list ul li').click(function () {
    var fastTxt = $(this).text()
    $('.containers .chats .chatFunc .textarea textarea').val('')
    insert(fastTxt)
  })
})
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


</style>
