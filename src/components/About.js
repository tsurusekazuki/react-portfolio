import React from 'react';
import '../css/About.css'
import Grid from '@material-ui/core/Grid';
import Cards from './Cards'

import kotlin from '../assets/kt.jpeg';
import javascript from '../assets/js.jpeg';
import python from '../assets/python.png';
import c from '../assets/c.png';
import html_css from '../assets/htmlcss.jpg'

const skills = [
    { url: kotlin, language: 'Kotlin', desc: '所属プロジェクトでのチーム開発、インターンでクライアントサイドの開発の際に使用' },
    { url: python, language: 'Python', desc: '機械学習・DjangoでのAPI開発、競技プログラミングに参加するときに用いている' },
    { url: javascript, language: 'javascript', desc: 'ReactやVueなどフレームワークを用いてポートフォリオ作成・開発などにも使用している' },
    { url: c, language: 'C', desc: '学校の授業で2年間、使用していました。現在はまっったく書ける気がしません'},
    { url: html_css, language: 'HTML/CSS', desc: '基本的な構文は習得済み、プロジェクトに所属してから最初に学習した言語' }
];

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
                <div>
                    {skills.map((skill) => (
                        <Cards className='card_layout' url={skill.url} title={skill.language} desc={skill.desc} />
                    ))}
                </div>
            </div>
        )
    }
}

export default About;