import { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import { Button } from 'react-bootstrap';
import { images } from './image_compress.ts'
import { placeholderImgs } from './image_placeholder.ts'
import privacyCss from './css/privacy_policy.module.scss'
import shareCss from './css/share.module.scss'
import { Link, useLocation } from 'react-router-dom';
import AOS from 'aos';

import Cursor from './Cursor'
import Temp from "./Temp"

function PrivacyPolicy(){
  const closePrivacyPolicyPage = () => {
    window.close();
  }
  // const location = useLocation();
  return(
    <>
      <Temp />
      <Cursor cursorTypes={"Privacy"} />
      <section id={privacyCss.privacy_policy}>
        {/* {location.state.date} */}
        <div className={privacyCss.description_section_container}>
          <h1>Privacy Policy</h1>
        </div>
        
        
        <div className={privacyCss.description_section_container}>
          <h2>はじめに</h2>
          <p>Untitledは（以下、「本サイト」）、各種サービスのご提供にあたり、お客様の個人情報をお預かりしております。本サイトは個人情報を保護し、お客様に更なる信頼性と安心感をご提供できるように努めて参ります。本サイトは、個人情報に関する法令を遵守し、個人情報の適切な取り扱いを実現致します。</p>
        </div>

        <div className={privacyCss.description_section_container}>
          <h2>個人情報の取得について</h2>
          <p>本サイトは、偽りその他不正の手段によらず適正に個人情報を取得致します。なお、次のような場合に必要な範囲で個人情報を収集する場合があります。</p>
          <p>1. ご相談・お問い合わせ</p>
        </div>
        
        <div className={privacyCss.description_section_container}>
          <h2>個人情報の利用について</h2>
          <p>本サイトは、個人情報を以下の利用目的の達成に必要な範囲内で、利用致します。以下に定めのない目的で個人情報を利用する場合、あらかじめご本人の同意を得た上で行ないます。</p>
          <p>1. ご相談・お問い合わせに対するご回答のご連絡のため</p>
          <p>2. 個人情報を特定しない統計情報に利用するため</p>
        </div>
        
        <div className={privacyCss.description_section_container}>
          <h2>個人情報の安全管理について</h2>
          <p>本サイトは、取り扱う個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
        </div>
        
        <div className={privacyCss.description_section_container}>
          <h2>個人情報の委託について</h2>
          <p>本サイトは、個人情報の取り扱いの全部または一部を第三者に委託する場合は、当該第三者について厳正な調査を行い、取り扱いを委託された個人情報の安全管理が図られるよう当該第三者に対する必要かつ適切な監督を行います。</p>
        </div>
        
        <div className={privacyCss.description_section_container}>
          <h2>個人情報の第三者提供について</h2>
          <p>本サイトは、個人情報保護法等の法令に定めのある場合を除き、個人情報をあらかじめご本人の同意を得ることなく、第三者に提供致しません。</p>
        </div>
        
        <div className={privacyCss.description_section_container}>
          <h2>個人情報の開示・訂正等について</h2>
          <p>本サイトは、ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示を致します。その際、ご本人であることが確認できない場合には、開示に応じません。個人情報の内容に誤りがあり、ご本人から訂正・追加・削除の請求がある場合、調査の上、速やかにこれらの請求に対応致します。その際、ご本人であることが確認できない場合には、これらの請求に応じません。本サイトはの個人情報の取り扱いにつきまして、上記の請求・お問い合わせ等ございましたら、下記までご連絡くださいますようお願い申し上げます。</p>
        </div>
        
        <div className={privacyCss.description_section_container}>
          <h2>連絡先</h2>
          <table>
            <tr>
              <td className={privacyCss.tableLabel}>名称</td>
              <td className={privacyCss.tableContents}>Untitled運営チーム</td>
            </tr>
            <tr>
              <td className={privacyCss.tableLabel}>E-mail</td>
              <td className={privacyCss.tableContents}>chloe981219@gmail.com</td>
            </tr>
          </table>
        </div>
        
        <div className={privacyCss.description_section_container}>
          <h2>その他の注意事項</h2>
          <p>本サイトが運営するコンテンツや掲載広告などからリンクされている第三者のサイト及びサービスは、本サイトとは独立した個人情報の保護に関する規定やデータ収集の規約を定めています。当サイトはこれらの規約や活動に対していかなる義務や責任も負いません。</p>
        </div>
        
        <div className={privacyCss.description_section_container}>
          <h2>個人情報の管理方法の継続的改善について</h2>
          <p>本サイトは、個人情報の管理方法を見直し、継続的に改善を実施します。</p>
        </div>

        <div className={privacyCss.description_section_container}>
          <h2>本方針の変更</h2>
          <p>本方針の内容は変更されることがあります。変更後の本方針については、本サイトが別途定める場合を除いて、本サイトに掲載した時から効力を生じるものとします。</p>
        </div>


        <div className={privacyCss.btn_close_the_window_container}>
          <Button variant="outline-secondary" onClick={closePrivacyPolicyPage}>Close the window</Button>{' '}
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;