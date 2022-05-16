// import area src
import area_hk from '../assets/area/area_hk.png'
import area_nt from '../assets/area/area_nt.png'
import area_kln from '../assets/area/area_kln.png'
import area_islands from '../assets/area/area_island.png'
// import Introduction page related img
// hk
import desc_Waterworksword from '../assets/hk/hk_Waterworksword.webp'
import desc_pokfulamword from '../assets/hk/hk_pokfulamword.webp'
import desc_mtdavisword from '../assets/hk/hk_mtdavisword.webp'
import Waterworksword_img1 from '../assets/hk/waterworksword/img1.webp'
import Waterworksword_img2 from '../assets/hk/waterworksword/img2.webp'
import Waterworksword_img3 from '../assets/hk/waterworksword/img3.webp'
// kln
import desc_pingshankwword from '../assets/kln/kln_pingshankwword.webp'
import desc_amahrockword from '../assets/kln/kln_amahrockword.webp'
import desc_lionrockword from '../assets/kln/kln_lionrockword.webp'
import pingshankwword_img1 from '../assets/kln/pingshankwword/img1.webp'
import pingshankwword_img2 from '../assets/kln/pingshankwword/img2.webp'
import pingshankwword_img3 from '../assets/kln/pingshankwword/img3.webp'
// nt
import desc_pingnamstreamword from '../assets/nt/nt_pingnamstreamword.webp'
import desc_wetlandpark from '../assets/nt/nt_wetlandpark.webp'
import desc_kwunyamshanword from '../assets/nt/nt_kwunyamshanword.webp'
import pingnamstreamword_img1 from '../assets/nt/pingnamstreamword/img1.webp'
import pingnamstreamword_img2 from '../assets/nt/pingnamstreamword/img2.webp'
import pingnamstreamword_img3 from '../assets/nt/pingnamstreamword/img3.webp'
// islands
import desc_apchau from '../assets/islands/islands_apchau.png'
import desc_cheungchau from '../assets/islands/islands_cheungchau.png'
import desc_pingchauword from '../assets/islands/islands_pingchauword.png'
import cheungchau_img1 from '../assets/islands/cheungchau/img1.png'
import cheungchau_img2 from '../assets/islands/cheungchau/img2.png'
import cheungchau_img3 from '../assets/islands/cheungchau/img3.png'


const data = [
  // home
  { title: '主頁', path: '/home', children:[] },

  // hk
  { 
    title: '香港', 
    path: '/introduction', 
    areaImg: area_hk, 
    children: [
      { 
        location: '大潭水務文物徑', 
        path: '/detail',
        descImg: desc_Waterworksword,
        desc: '大潭水務文物徑全長5公里，範圍涵蓋21項已列為法定古蹟的水務歷史建築，包括上水塘水壩及水掣房、副水塘水壩、中水塘水壩、大潭篤水塘紀念碑等等。如要走畢全程需時約2小時，市民可乘搭公共交通工具直達黃泥涌峽起步，途中還可順道遊覽黃泥涌水塘的水務文物。',
        level: '初級',
        info: [
          { 
            point: '大潭篤水壩',
            desc: '',
            img: Waterworksword_img1
          },
          {
            desc: '列為三級歷史建築的副水塘',
            point: '員工宿舍',
            img: Waterworksword_img2
          },
          {
            desc: '',
            point: '黃泥涌水塘',
            img: Waterworksword_img3
          }
        ],
        notice: '大潭道近大潭篤水塘車路非常窄，假日比較多車，如須橫過馬路切記注意安全。各大潭水塘群建築均被列為法定古跡及歷史建築，切勿塗鴉及攀爬。',
        way: '6號巴士：中環(交易廣場) -> 赤柱監獄	下車點：黃泥涌水塘公園'
      },

      { 
        location: '薄扶林水塘', 
        path: '/detail',
        descImg: desc_pokfulamword,
        desc: '薄扶林水塘位於香港島西南面的薄扶林谷，建於1960年，是香港第一個興建的水塘。水塘內有多項建築物包括薄扶林水塘量水站、前看守員房舍及四座石橋已被列入為法定古蹟。'
      },
      { 
        location: '摩星嶺', 
        path: '/detail',
        descImg: desc_mtdavisword,
        desc: '摩星嶺是位於香港島最西面的一個山峰，高海拔269米，面向東博寮海峽與硫磺海峽。山上遺留了不少二戰時期的軍事設施，如炮台、營房及瞭望台等等，均被列為二級歷史古蹟。'
      }
    ],
  },

  // kln
  { 
    title: '九龍', 
    path: '/introduction',
    areaImg: area_kln,
    children: [
      { 
        location: '平山', 
        path: '/detail',
        descImg: desc_pingshankwword,
        desc: '平山位於飛鵝山南面，是一座高度188米的山丘，山頂能夠眺望啟德機場，故曾被稱為「機場山」。平山西面曾經營石礦場，但因後期發展地鐵觀塘線而關閉。平山現已變成居民晨運和觀賞日落的好地方。',
        level: '初級',
        info: [
          { 
            point: '登山',
            desc: '從彩福邨',
            img: pingshankwword_img1
          },
          {
            desc: '途中可見險峻的',
            point: '飛鵝山',
            img: pingshankwword_img2
          },
          {
            desc: '欣賞日落的好地方',
            point: '',
            img: pingshankwword_img3
          }
        ],
        notice: '如要觀賞日落，要注意離開時沿途沒有街燈，必須帶備頭燈或電筒。',
        way: '乘坐港鐵(觀塘線)到九龍灣站下車，經B出口前往。'
       },
      { 
        location: '望夫石', 
        path: '/detail',
        descImg: desc_amahrockword,
        desc: '望夫石位於香港新界沙田區的紅梅谷對上的一個小山崗上，高度海拔約250米。望夫石在2007年的「珍惜岩石自然美 ─ 香港最美岩石選舉」活動中榮膺首位，成為了沙田區的著名地標。'
      },
      { 
        location: '獅子山', 
        path: '/detail',
        descImg: desc_lionrockword,
        desc: '獅子山位於九龍與新界之間，高海拔495米，因其形狀如一頭伏卧的雄壯獅子而命名。同時，獅子山亦因70年代一首家喻戶曉的名曲《獅子山下》成為了代表香港人象徵的山峰。　'
      }
    ],
  },

  // nt
  { 
    title: '新界', 
    path: '/introduction', 
    areaImg: area_nt,
    children: [
      { 
        location: '屏南石澗', 
        path: '/detail',
        descImg: desc_pingnamstreamword,
        desc: '屏南石澗位於新界東北部，是一條連接屏風山與南涌的石澗，水源來自屏風山，流向南涌河。石澗內有多條精彩的瀑布和水潭，是瀑降挑戰愛好者的勝地，但由於石澗過往曾發生過不少奪命意外，因此也有「死神石澗」的稱號。',
        level: '中級：路線一般會涉及大量攀爬，技術與體力需求較大',
        info: [
          { 
            point: '如一道白簾的草裙瀑',
            desc: '',
            img: pingnamstreamword_img1
          },
          {
            desc: '草裙瀑上的',
            point: '老龍潭',
            img: pingnamstreamword_img2
          },
          {
            desc: '屏南石澗的',
            point: '小水堤',
            img: pingnamstreamword_img3
          }
        ],
        notice: '屏南石澗總共曾發生過三宗奪命意外，出發時要多加留意天文台報導，以策安全。星期六、日及假日時間遊人較多，在南涌較難上車，行走石澗具一定危險性，小心跣倒及必須注意安全，建議與富溯澗經驗的領隊同行及穿著防滑性高的澗鞋。建議步行前往鹿頸總站乘車離開。',
        way: '南涌交通：56K小巴（鹿頸  粉嶺站）。下車點：南涌'
       },
      { 
        location: '濕地公園', 
        path: '/detail',
        descImg: desc_wetlandpark,
        desc: '濕地公園全名為香港濕地公園，位於新界天水圍北部。公園佔地61公頃，在2006年正式開幕。濕地公園擁有60公頃的戶外保護區，對濕地生態的保育起了關鍵的作用。園內除了設有觀鳥屋和紅樹林區等設施外，更在湖畔種植了多棵落羽松，成為了遊客在冬季觀賞紅葉的好地方。'
      },
      { 
        location: '觀音山', 
        path: '/detail',
        descImg: desc_kwunyamshanword,
        desc: '觀音山位於大帽山以北，高度海拔546米。由於觀音山屬嘉道理農場暨植物園範圍，故遊人只許付費入場，步行或乘坐園內專車前往。每年1月中旬至2月中旬期間，山上會開滿的鐘花櫻桃和梅花，吸引了不少遊人特意前往賞花。'
      }
    ],
  },

  // islands
  { 
    title: '離島', 
    path: '/introduction', 
    areaImg: area_islands,
    children: [
      { 
        location: '長洲關公忠義亭', 
        path: '/detail',
        descImg: desc_cheungchau,
        desc: '長洲關公忠義亭是一所關帝廟，位於長洲南部的山上。亭兩旁種植了數棵台灣山櫻花樹，每年大約三月上旬櫻花樹便會開花，而且吸引不少來賞花的人潮。',
        level: '初級',
        info: [
          { 
            point: '台灣山櫻',
            desc: '又稱為緋寒櫻',
            img: cheungchau_img1
          },
          {
            desc: '忠義亭內的',
            point: '關帝廟',
            img: cheungchau_img2
          },
          {
            desc: '',
            point: '關公忠義亭',
            img: cheungchau_img3
          }
        ],
        notice: '櫻花的花期很短，而且每年開花的時間都不同，最佳觀賞季節為每年三月上旬至中旬。近年賞花人數持續增加，請大家謹守秩序，切勿破壞櫻花樹的生長。廟內亦應保持清靜，切勿打擾他人。',
        way: '於中環5號碼頭乘坐渡輪前往長洲，上岸後往東灣路走，然後右轉至警署徑，向山坡方向步行約10分鐘便到達關公忠義亭。'
      },
      { 
        location: '鴨洲', 
        path: '/detail',
        descImg: desc_apchau,
        desc: '鴨洲又名「大鴨洲」，位於沙頭角以東及吉澳以西的一個島嶼，被納入為中國香港世界地質公園之一。全島只有0.016平方公里，由於其外形像一隻半浮於水面的鴨子而命名。鄰近的細鴨洲、鴨螺春及白墩排均屬於鴨洲的附屬島嶼。'
       },
      { 
        location: '坪洲', 
        path: '/detail',
        descImg: desc_pingchauword,
        desc: '坪洲是香港的一個離島，位於港島西面，總面積為0.99平方公里，只有長洲面積的三分之一。全島的最高點為手指山，只有海拔95米高。坪洲設有家樂徑及坪愉徑，可供遊人環島遊覽。'
      }
    ],
  },

  // about
  { title: 'About Us', path: '/about', children:[] },
]

export default data