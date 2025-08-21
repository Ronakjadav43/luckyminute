import React from "react";
// import { Outlet, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "./AgentReport.scss";

const AgentReport = (props) => {
    return (
        <div className="">
            <div className="agentreport">
                <div style={{ display: "none" }}>
                    <div className="header">
                        <Menu menuButton={<i className="fa-solid fa-bars side_menu"></i>} transition>
                            <MenuItem>Main 主页</MenuItem>
                            <MenuItem>Player 玩家</MenuItem>
                            <MenuItem>Report 报告</MenuItem>
                            <MenuItem>Transaction 交易</MenuItem>
                            <MenuItem>Message 信息</MenuItem>
                            <MenuItem>Log 日志</MenuItem>
                            <MenuItem>Setting 设置</MenuItem>
                        </Menu>
                        <h1 className='header_text'>Agent  Report 代理报告</h1>
                    </div>
                    <h1 className='player_name'>agent1</h1>

                    <div className="player_info mt-3 mb-3">
                        <h1 className='playerdetail_info'>Date 日期: 11/1/ 2022 23.44</h1>
                    </div>



                    <div className="player_info mt-4 mb-4">
                        <h1 className='playerdetail_info info'><span>Agent Balance 代理余额</span><span>= 34,500</span></h1>
                        <h1 className='playerdetail_info info'><span>All Players Balance 总玩家余额</span><span>= 23,840</span></h1>
                        <h1 className='playerdetail_info info'><span>Total Balance </span><span>= 58,340</span></h1>
                    </div>




                    <div className="report_filter">

                        <div className='amount_box'>
                            <h1 className='amount_box_text'>Enter Start Date 输入开始日期</h1>
                            <input type="number" placeholder='Enter Start Date' />
                        </div>
                        <div className='amount_box'>
                            <h1 className='amount_box_text'>Enter End Date 输入结束日期</h1>
                            <input type="number" placeholder='Enter End Date' />
                            <h1 className='amount_box_text'>Number of Days 天数 : 2</h1>
                        </div>
                    </div>
                    <div className='menu_btn'>
                        <div className='menu_btn_inner'>
                            <button className='btn_s'>
                                Submit<br />提交
                            </button>
                            <button className='btn_s' onClick={() => props.setReport(!props.report)}>
                                Cancel<br />  取消
                            </button>
                        </div>
                    </div>
                </div>
                <div >
                    {/* style={{ display: "none" }} */}
                    <div className="header">
                        <Menu menuButton={<i className="fa-solid fa-bars side_menu"></i>} transition>
                            <MenuItem>Main 主页</MenuItem>
                            <MenuItem>Player 玩家</MenuItem>
                            <MenuItem>Report 报告</MenuItem>
                            <MenuItem>Transaction 交易</MenuItem>
                            <MenuItem>Message 信息</MenuItem>
                            <MenuItem>Log 日志</MenuItem>
                            <MenuItem>Setting 设置</MenuItem>
                        </Menu>
                        <h1 className='header_text'>Agent Report 代理报告</h1>
                    </div>
                    <h1 className='player_name'>agent1</h1>
                    <div className="player_info mt-4 mb-4">
                        <h1 className='playerdetail_info'>Start Date 开始日期：<span>17/1/ 2022 0000:00</span></h1>
                        <h1 className='playerdetail_info'>End Date结束日期:<span>18/1/2022 2359:59</span></h1>
                        <h1 className='playerdetail_info'>Number of days 天数:<span>2</span></h1>
                    </div>
                    <div className="player_info mt-4 mb-4">
                        <h1 className='playerdetail_info info'><span>Number of Bets 投注次数</span><span>134</span></h1>
                        <h1 className='playerdetail_info info'><span>Total Bet  总投注</span><span>56000</span></h1>
                        <h1 className='playerdetail_info info'><span>Total Payout 总支出</span><span>20000</span></h1>
                        <h1 className='playerdetail_info info'><span>Profit 利润</span><span>36000</span></h1>
                    </div>
                    <div className='menu_btn'>
                        <div className='menu_btn_inner'>
                            <button className='btn_s'>
                                Copy <br />复制
                            </button>
                            <button className='btn_s' onClick={() => props.setReport(!props.report)}>
                                Close<br /> 关闭
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};


export default AgentReport;