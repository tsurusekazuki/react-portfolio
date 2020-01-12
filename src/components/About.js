import React from 'react';
import '../css/About.css'

class About extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <h1>History</h1>
                <div className='about_box'>
                    <table>
                        <tr>
                            <td>Name</td>
                            <th>鶴瀬　和輝</th>
                        </tr>
                        <tr>
                            <td>University</td>
                            <th>金沢工業大学</th>
                        </tr>
                        <tr>
                            <td>Birthday</td>
                            <th>1998/10/12</th>
                        </tr>
                    </table>
                    <div className='about_history_list'>
                        <li className='about_history_list_item'>2017/3 石川県立寺井高等学校　卒業</li>
                        <li className='about_history_list_item'>2017/4 金沢工業大学　工学部　情報工学科　入学</li>
                        <li className='about_history_list_item'>2018/4 スマートフォンアプリプロジェクトに所属</li>
                        <li className='about_history_list_item'>2018/5 HTML・CSSの勉強を始める</li>
                        <li className='about_history_list_item'>2018/10 プロジェクトで初めてのチーム開発を経験する</li>
                        <li className='about_history_list_item'>2019/4 株式会社サイバーエージェントの平成最後のハッカソン参加</li>
                        <li className='about_history_list_item'>2019/8 日本アルゴリズム株式会社で2習慣の機械学習インターン</li>
                        <li className='about_history_list_item'>2019/10 プロジェクトで2回目のチーム開発</li>
                    </div>
                </div>
                <h1>Skill</h1>
            </div>
        )
    }
}

export default About;