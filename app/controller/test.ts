import { Controller } from 'egg';

export default class TestController extends Controller {
    public async index() {
        const { ctx, app } = this;
        console.log(ctx.session, 33333333);
        let target = '2211923275@qq.com';
        let code = 'xxlb'
        await app.mailer.send({
            from: '"zhangwai" <1519214533@qq.com>', // sender address, [options] default to user
            // // Array => ['bar@example.com', 'baz@example.com']
            to: [target], // list of receivers
            subject: 'Campus-chat验证码邮件', // Subject line
            text: code, // plain text body
            html: `<div style="background:rgba(255,192,203,0.4); display: flex;flex-direction: column;justify-content: center;align-items: center;
            width: 300px;height: 300px;box-shadow: 0px 0px 10px #ccc;border-radius: 30px;margin: 66px auto;">
            <svg>
                <style type="text/css">
                .st0{fill:#519187;}
                .st1{fill:#231815;}
                .st2{fill:#CFC3C5;}
                .st3{fill:#949BB7;}
                .st4{fill:none;stroke:#6E60A8;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st5{fill:#518188;}
                .st6{fill:#3D6F69;}
                .st7{fill:#57937A;}
                .st8{fill:#A3B76D;}
                .st9{fill:#CFC3C5;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st10{fill:#A3B76D;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st11{fill:none;stroke:#65942E;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st12{fill:none;stroke:#65942E;stroke-width:0.5;stroke-linejoin:round;stroke-miterlimit:10;}
                .st13{fill:#527B5D;}
                .st14{fill:#568E64;}
                .st15{fill:#55737F;}
                .st16{fill:#918203;stroke:#000000;stroke-miterlimit:10;}
                .st17{fill:#E1BA2E;}
                .st18{fill:#416A47;}
                .st19{fill:#446919;}
                .st20{fill:#264300;}
                .st21{fill:#675B00;stroke:#000000;stroke-miterlimit:10;}
                .st22{fill:#A9C200;}
                .st23{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                .st24{fill:#999B97;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st25{fill:#999B97;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                .st26{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st27{fill:#40493F;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st28{fill:#6D443D;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st29{fill:#266D62;}
                .st30{fill:none;stroke:#C6C567;stroke-width:0.5;stroke-miterlimit:10;}
                .st31{fill:none;stroke:#C5DB6A;stroke-width:0.5;stroke-miterlimit:10;}
                .st32{fill:none;stroke:#E8EA74;stroke-width:0.5;stroke-miterlimit:10;}
                .st33{fill:#677D53;stroke:#000000;stroke-width:0.5;stroke-miterlimit:10;}
                .st34{fill:#7FAB49;stroke:#000000;stroke-miterlimit:10;}
                .st35{fill:none;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st36{fill:#93BC76;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st37{fill:url(#);stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st38{fill:#241500;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st39{fill:#F4D3B9;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st40{fill:#3A2100;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st41{fill:#3A2100;}
                .st42{fill:none;stroke:#478966;stroke-miterlimit:10;}
                .st43{fill:#4D0000;}
                .st44{fill:#4D7D5F;}
                .st45{fill:#B9C9DF;}
                .st46{fill:#DDFFF4;}
                .st47{fill:none;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-miterlimit:10;}
                .st48{fill:#D9495D;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st49{fill:#D9495D;}
                .st50{stroke:#000000;stroke-width:0.25;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st51{fill:#D9675D;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st52{fill:#D9675D;}
                .st53{fill:#FAEBD9;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st54{fill:#D95B3C;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st55{fill:#FFFFFF;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st56{fill:#D95B3C;}
                .st57{fill:#6FC9D9;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st58{fill:#A7ABC5;}
                .st59{fill:#FFC173;}
                .st60{fill:#A77500;}
                .st61{fill:#A73B00;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st62{fill:#B9A500;stroke:#000000;stroke-width:0.25;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st63{fill:#FFC173;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st64{fill:#77BBDB;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st65{fill:#674500;}
                .st66{fill:#FFFAEA;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st67{fill:#5A1900;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st68{fill:#674500;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st69{fill:#FFAFA4;}
                .st70{fill:#D5E779;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st71{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st72{fill:#FFFAEA;}
                .st73{fill:#77BBDB;}
                .st74{fill:none;stroke:#F1B7B1;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st75{fill:#E7D779;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st76{fill:#D37D79;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st77{fill:#DA4B43;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st78{fill:#FF8361;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st79{fill:#336633;stroke:#000000;stroke-miterlimit:10;}
                .st80{fill:#FFFFFF;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;}
                .st81{fill:#C25F37;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st82{fill:#A0402C;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st83{fill:#91C64C;}
                .st84{fill:#96CE9C;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st85{fill:#89924B;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st86{fill:#435E32;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st87{fill:#2D371A;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st88{fill:#809550;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st89{fill:#749E3F;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st90{fill:#91C64C;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st91{fill:#294115;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st92{fill:#BBA90C;stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st93{fill:#D4B500;stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st94{display:none;}
                .st95{fill:#3C4D1E;}
                .st96{fill:#0075C1;}
                .st97{fill:#FFFFFF;}
                .st98{fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;}
                .st99{fill:none;stroke:#006F3F;stroke-width:2;stroke-miterlimit:10;}
                .st100{fill:#006F3F;}
                .st101{opacity:0.17;fill:#3E3A39;}
                .st102{fill:#A0402C;}
                .st103{fill:#57868C;}
                .st104{fill:#368279;}
                .st105{fill:#4B8281;}
                .st106{fill:#437574;}
                .st107{fill:#00987E;}
                .st108{fill:#6D5A63;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st109{fill:#B14B60;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st110{fill:url(#);stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st111{fill:#028563;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st112{fill:#368276;}
                .st113{fill:#3C7E61;}
                .st114{fill:#1E5A51;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st115{fill:#1E5A51;}
                .st116{fill:#6A5755;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st117{fill:#BA7053;stroke:#231917;stroke-width:0.5;stroke-miterlimit:10;}
                .st118{fill:#B94D5C;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st119{fill:url(#);stroke:#231917;stroke-width:0.5;stroke-miterlimit:10;}
                .st120{fill:#644A44;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st121{fill:url(#);stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st122{fill:#BA6746;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st123{fill:#433122;}
                .st124{fill:#B94051;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st125{fill:#C5AE5D;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st126{fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st127{fill:#58805E;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st128{fill:#478752;stroke:#000000;stroke-miterlimit:10;}
                .st129{fill:#30734B;stroke:#000000;stroke-miterlimit:10;}
                .st130{fill:#577A4A;stroke:#000000;stroke-miterlimit:10;}
                .st131{fill:none;stroke:#000000;stroke-linecap:round;stroke-miterlimit:10;}
                .st132{fill:#007543;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st133{fill:#07735F;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st134{fill:#B17D3B;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st135{fill:#197E55;}
                .st136{fill:#778278;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st137{fill:#CE5955;}
                .st138{fill:#678261;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st139{fill:#5C8250;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st140{fill:#CFC3C5;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st141{fill:#CFC3C5;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st142{fill:#4F3B46;stroke:#231815;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st143{fill:#727476;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st144{fill:#D8AF93;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st145{fill:none;stroke:#231815;stroke-linecap:round;stroke-miterlimit:10;}
                .st146{fill:#622C4C;stroke:#231815;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st147{fill:#622C4C;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st148{fill:#AC6146;stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st149{fill:#461C1F;stroke:#231815;stroke-miterlimit:10;}
                .st150{fill:#C9904D;stroke:#231815;stroke-miterlimit:10;}
                .st151{fill:#AC6146;stroke:#231815;stroke-miterlimit:10;}
                .st152{fill:#2E230A;stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st153{fill:#343105;stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st154{fill:#633026;stroke:#231815;stroke-miterlimit:10;}
                .st155{fill:#7D4034;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st156{fill:#808284;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st157{fill:#98543A;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st158{fill:#633026;}
                .st159{fill:#783A5E;}
                .st160{fill:#622C4C;}
                .st161{fill:#348860;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st162{fill:#30685D;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st163{fill:#CDBC6F;stroke:#231C1A;stroke-width:0.5;stroke-miterlimit:10;}
                .st164{fill:#C8956A;stroke:#231C1A;stroke-width:0.5;stroke-miterlimit:10;}
                .st165{fill:#C39D69;stroke:#231C1A;stroke-width:0.5;stroke-miterlimit:10;}
                .st166{fill:#CDB23A;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st167{fill:#C87835;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st168{fill:#C38837;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st169{fill:#C7171E;}
                .st170{fill:#8996B2;}
                .st171{fill:#3A876D;}
                .st172{fill:#D37A4D;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st173{fill:#CEB7B5;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st174{fill:#CFC2BA;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st175{fill:#F7CF83;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st176{fill:#416A47;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st177{fill:#446919;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st178{fill:#006E5C;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st179{fill:none;stroke:#231815;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st180{fill:#3B726D;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st181{fill:#568042;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st182{fill:none;stroke:#000000;stroke-miterlimit:10;}
                .st183{fill:#197E55;stroke:#000000;stroke-miterlimit:10;}
                .st184{fill:#197E55;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st185{fill:#A8AF3F;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st186{fill:#BB475B;}
                .st187{fill:#BA8A00;}
                .st188{fill:#654240;stroke:#000000;stroke-width:0.75;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st189{fill:none;stroke:#EBEB6B;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st190{fill:#F3CABE;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st191{fill:url(#);stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st192{fill:none;stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st193{fill:#B3DCCF;stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st194{fill:#231815;stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st195{fill:#9A3638;stroke:#231815;stroke-miterlimit:10;}
                .st196{fill:#9A3638;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st197{fill:#231815;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st198{fill:#E0A497;}
                .st199{fill:none;stroke:#231815;stroke-width:0.5;stroke-linecap:round;stroke-miterlimit:10;}
                .st200{fill:#AC4035;stroke:#231815;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st201{fill:#F5C829;}
                .st202{fill:#384945;stroke:#231815;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st203{fill:#9D7E1B;stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st204{fill:#654240;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st205{fill:none;stroke:#231815;stroke-miterlimit:10;}
                .st206{fill:none;stroke:#B42927;stroke-width:2;stroke-miterlimit:10;}
                .st207{fill:none;stroke:#A41519;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st208{fill:none;stroke:#A11418;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st209{fill:none;stroke:#C7171E;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st210{fill:none;stroke:#950F13;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st211{fill:none;stroke:#9A1115;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st212{fill:none;stroke:#33513C;stroke-width:4;stroke-miterlimit:10;}
                .st213{fill:#33513C;}
                .st214{clip-path:url(#SVGID_2_);}
                .st215{clip-path:url(#SVGID_4_);}
                .st216{clip-path:url(#SVGID_8_);}
                .st217{clip-path:url(#SVGID_10_);}
                .st218{fill:none;stroke:#000000;stroke-width:4;stroke-miterlimit:10;}
                .st219{clip-path:url(#SVGID_14_);}
                .st220{clip-path:url(#SVGID_16_);}
                .st221{fill:#644D48;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st222{fill:#C5B168;stroke:#231917;stroke-width:0.5;stroke-miterlimit:10;}
                .st223{fill:none;stroke:#231917;stroke-width:0.5;stroke-miterlimit:10;}
                .st224{fill:#3E4D23;}
                .st225{fill:#157DC1;}
                .st226{fill:none;}
                .st227{clip-path:url(#SVGID_20_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st228{clip-path:url(#SVGID_20_);}
                .st229{clip-path:url(#SVGID_22_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st230{clip-path:url(#SVGID_22_);}
                .st231{clip-path:url(#SVGID_24_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st232{clip-path:url(#SVGID_24_);}
                .st233{clip-path:url(#SVGID_26_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st234{clip-path:url(#SVGID_26_);}
                .st235{clip-path:url(#SVGID_28_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st236{clip-path:url(#SVGID_28_);}
                .st237{clip-path:url(#SVGID_30_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st238{clip-path:url(#SVGID_30_);}
                .st239{fill:#683C69;}
                
                    .st240{clip-path:url(#SVGID_32_);fill:none;stroke:#C7171E;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st241{clip-path:url(#SVGID_32_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st242{clip-path:url(#SVGID_32_);}
                .st243{clip-path:url(#SVGID_34_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st244{clip-path:url(#SVGID_34_);}
                .st245{clip-path:url(#SVGID_36_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st246{clip-path:url(#SVGID_36_);}
                .st247{clip-path:url(#SVGID_38_);}
                .st248{clip-path:url(#SVGID_38_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st249{clip-path:url(#SVGID_40_);}
                .st250{clip-path:url(#SVGID_40_);fill:none;stroke:#231815;stroke-width:0.5;stroke-miterlimit:10;}
                .st251{fill:#5C3C1B;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st252{fill:#005C42;stroke:#231815;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                .st253{fill:#F3CABE;}
                .st254{fill:#81AA70;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            </style>
            <g id="背景_xA0_图像_1_">
            </g>
            <g id="图1">
                <g id="背景2">
                </g>
                <g id="云">
                </g>
                <g id="山">
                </g>
                <g id="草">
                </g>
                <g id="cao">
                </g>
                <g id="图层_29">
                </g>
                <g id="楼梯">
                </g>
                <g id="树丛">
                </g>
                <g id="图层_26">
                </g>
                <g id="yun">
                </g>
                <g id="图层_19">
                </g>
                <g id="主人公">
                </g>
                <g id="鳄鱼">
                </g>
                <g id="螃蟹">
                </g>
                <g id="兔子">
                </g>
                <g id="糕">
                </g>
                <g id="图层_33">
                </g>
                <g id="图层_10">
                </g>
                <g id="图层_12">
                </g>
                <g id="旗子">
                </g>
                <g id="乌龟">
                </g>
                <g id="礼物盒子">
                </g>
                <g class="st94" id="图层_4_xA0_图像_1_">
                </g>
                <g class="st94" id="图层_2_xA0_图像_1_">
                </g>
                <g class="st94" id="图层_3_xA0_图像_1_">
                </g>
                <g class="st94" id="图层_1_xA0_图像_1_">
                </g>
                <g id="支付宝">
                </g>
                <g id="图层_17">
                </g>
            </g>
            <g id="图2">
                <g id="山_1_">
                </g>
                <g id="图层_41">
                </g>
                <g id="菊花酒">
                </g>
                <g id="hhcc">
                </g>
                <g id="楼梯_1_">
                </g>
                <g id="图层_47">
                </g>
                <g id="奶奶">
                </g>
                <g id="爷爷">
                </g>
                <g id="图层_46">
                </g>
                <g id="图层_40">
                </g>
                <g id="菊花">
                </g>
            </g>
            <g id="相机_2_">
            </g>
            <g id="图层_50">
            </g>
            <g id="图层_51">
            </g>
            <g id="山_2_">
            </g>
            <g id="cao_1_">
            </g>
            <g id="楼梯_2_">
            </g>
            <g id="草_1_">
            </g>
            <g id="小女孩">
            </g>
            <g id="松树">
            </g>
            <g id="图层_58">
            </g>
            <g id="二维码">
            </g>
            <g id="图层_59">
            </g>
            <g class="st94" id="草稿_1_">
            </g>
            <g id="支付宝_1_">
            </g>
            <g id="图层_32">
            </g>
            <g id="色块">
            </g>
            <g id="_x31_2个">
            </g>
            <g id="元素1">
            </g>
            <g id="元素2">
            </g>
            <g id="元素3">
            </g>
            <g id="元素4">
                <g>
                    <g>
                        <path d="M54.51,94.92c-2.37,0-4.58-0.94-6.21-2.66c-1.63-1.71-2.47-3.95-2.37-6.31
                            c1.12-25.07,5.61-39.73,12.33-40.23c2.63-0.2,5.39-0.38,7.8-0.38c8.04,0,11.62,2.02,15.93,9.01c4.47,7.25,3.81,27.21,3.32,35.46
                            c-0.12,2.04-1.76,3.66-3.81,3.77l-26.55,1.33C54.81,94.91,54.66,94.92,54.51,94.92z" class="st103"></path>
                        <path d="M66.06,45.84L66.06,45.84c7.83,0,11.3,1.97,15.5,8.77c4.4,7.13,3.74,26.97,3.25,35.16c-0.11,1.79-1.54,3.21-3.34,3.3
                            l-26.55,1.33c-0.14,0.01-0.28,0.01-0.42,0.01c-2.23,0-4.31-0.89-5.85-2.51c-1.54-1.61-2.33-3.72-2.23-5.94
                            c1.11-24.79,5.43-39.28,11.87-39.76C60.91,46.02,63.67,45.84,66.06,45.84 M66.06,44.84c-2.25,0-4.83,0.15-7.84,0.38
                            c-9.63,0.72-12.14,26.15-12.79,40.71c-0.23,5.2,3.94,9.49,9.08,9.49c0.15,0,0.31,0,0.47-0.01l26.55-1.33
                            c2.3-0.12,4.15-1.94,4.28-4.24c0.51-8.57,1.13-28.41-3.4-35.75C77.87,46.73,73.93,44.84,66.06,44.84L66.06,44.84z"></path>
                    </g>
                    <g>
                        <path d="M67.47,44.42L67.47,44.42c-0.31,0-0.56-0.25-0.56-0.56v-4.01c0-0.31,0.25-0.56,0.56-0.56l0,0
                            c0.31,0,0.56,0.25,0.56,0.56v4.01C68.03,44.17,67.78,44.42,67.47,44.42z" class="st172"></path>
                        <path d="M60.99,44.65L60.99,44.65c-0.31,0-0.56-0.25-0.56-0.56v-4.01c0-0.31,0.25-0.56,0.56-0.56h0
                            c0.31,0,0.56,0.25,0.56,0.56v4.01C61.55,44.4,61.3,44.65,60.99,44.65z" class="st172"></path>
                        <path d="M72.3,45.14H56.63c-0.31,0-0.56-0.25-0.56-0.56l0,0c0-0.31,0.25-0.56,0.56-0.56H72.3
                            c0.31,0,0.56,0.25,0.56,0.56l0,0C72.86,44.88,72.61,45.14,72.3,45.14z" class="st172"></path>
                        <path d="M57.93,44.78L57.93,44.78c-0.31,0-0.56-0.25-0.56-0.56v-4.01c0-0.31,0.25-0.56,0.56-0.56l0,0
                            c0.31,0,0.56,0.25,0.56,0.56v4.01C58.49,44.53,58.23,44.78,57.93,44.78z" class="st172"></path>
                        <path d="M63.76,44.84L63.76,44.84c-0.31,0-0.56-0.25-0.56-0.56v-4.01c0-0.31,0.25-0.56,0.56-0.56l0,0
                            c0.31,0,0.56,0.25,0.56,0.56v4.01C64.32,44.59,64.07,44.84,63.76,44.84z" class="st172"></path>
                        <path d="M70.24,44.54L70.24,44.54c-0.31,0-0.56-0.25-0.56-0.56v-4.01c0-0.31,0.25-0.56,0.56-0.56h0
                            c0.31,0,0.56,0.25,0.56,0.56v4.01C70.8,44.28,70.55,44.54,70.24,44.54z" class="st172"></path>
                        <path d="M63.79,35.65c0,0-9.6,3.59-10.07,4.3c-0.47,0.71,19.91-0.24,20.68-0.47
                            C75.16,39.24,63.79,35.65,63.79,35.65z" class="st172"></path>
                    </g>
                    <path d="M51.26,27.63l4.33-0.97l1.66-2.85c0,0,0.95-1.43,2.7-1.17c1.76,0.25,2.33,1.68,2.33,1.68
                        s-0.35-1.8,0.14-2.95c0.54-1.27,1.28-2.5,2.77-2.8c1.49-0.31,2.77,0.92,3.21,1.58s0.61,1.43,0.61,1.43s-0.16-1.87,0.51-3.45
                        c0.71-1.68,2.5-2.08,3.87-1.98c2.6,0.19,1.64,3.74,3.59,4.15c1.79,0.38,1.18-2.17,4.72-1.13c2.32,0.68,1.56,3.79,2.27,4.53
                        c1.84,1.93,5.77,1.43,5.33,2.74C88.86,27.71,51.26,27.63,51.26,27.63z" class="st173"></path>
                    <path d="M4.39,52.31c0.44-3.43,2.52-1.88,2.52-1.88l2.5-2.85c0,0,1.43-1.43,4.07-1.17S17,48.08,17,48.08
                        s-0.53-1.8,0.2-2.95c0.81-1.27,1.94-2.5,4.18-2.8c2.24-0.31,4.18,0.92,4.84,1.58c0.66,0.66,0.92,1.43,0.92,1.43
                        s0.37-2.03,1.38-3.62c1.07-1.68,2.06-2.36,4.13-2.39c3.36-0.05,4.23,0.92,5.35,3.82c1.09,2.82,1.68,1.68,1.68,1.68
                        s3.02-2.84,5.26-2c3.17,1.19,3.42,3.32,3.28,4.34c-0.13,1.01,9.36,1.26,8.69,4.26C55.29,58.6,3.77,57.09,4.39,52.31z" class="st174"></path>
                    <path d="M33.12,58.13c0.54-1.31,1.27-1.15,1.27-1.15l1.26-1.75c0,0,0.72-0.88,2.06-0.72s1.78,1.03,1.78,1.03
                        s-0.27-1.11,0.1-1.81c0.41-0.78,0.98-1.53,2.11-1.72c1.13-0.19,2.11,0.56,2.45,0.97c0.34,0.41,0.46,0.88,0.46,0.88
                        s0.19-1.25,0.7-2.22c0.54-1.03,1.04-1.45,2.09-1.47c1.7-0.03,2.14,0.56,2.71,2.34c0.55,1.73,0.85,1.03,0.85,1.03
                        s1.53-1.74,2.66-1.23c1.61,0.73,1.73,2.04,1.66,2.67c-0.07,0.62,4.73,0.77,4.4,2.61C58.88,61.99,31.99,60.86,33.12,58.13z" class="st174"></path>
                </g>
            </g>
            <g id="元素5">
            </g>
            <g id="元素6">
            </g>
            <g id="元素7">
            </g>
            <g id="元素8">
            </g>
            <g id="元素9">
            </g>
            <g id="元素10">
            </g>
            <g id="元素11">
            </g>
            <g id="元素12">
            </g>
            </svg>
            <span style="line-height: 36px;">来自 Campus-chat 的邮箱验证码：</span>
            <div style="font-weight: 600;font-size: 22px;line-height: 46px;">${code}</div>
            </div>`,
        })
        ctx.body = 'test'
    }
}
