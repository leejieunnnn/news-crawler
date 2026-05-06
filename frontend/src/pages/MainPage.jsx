import { useState } from 'react'
import styles from './MainPage.module.css'

const TABS = [
  { emoji: '💻', name: 'IT/테크', value: 'tech' },
  { emoji: '📈', name: '경제',   value: 'economy' },
  { emoji: '🌍', name: '국제',   value: 'world' },
  { emoji: '⚽', name: '스포츠', value: 'sports' },
]

// TODO: 백엔드 API 연결 후 실제 데이터로 교체
const DUMMY_NEWS = {
  tech: [
    { source: 'TechCrunch', time: '2시간 전', title: 'OpenAI, GPT-5 출시 임박…멀티모달 성능 대폭 향상', desc: '새 모델은 이미지·영상·텍스트를 동시에 처리하며 추론 능력이 크게 개선됐다.' },
    { source: 'The Verge',  time: '4시간 전', title: '애플, 2025 WWDC에서 AI 기능 대거 공개 예정',       desc: 'Siri 전면 개편과 함께 온디바이스 AI 모델이 탑재될 것으로 알려졌다.' },
    { source: '연합뉴스',   time: '6시간 전', title: '삼성전자, 차세대 HBM4 양산 돌입…엔비디아 공급 확대', desc: 'HBM4는 전작 대비 대역폭이 50% 향상됐으며 AI 가속기 수요 증가에 대응한다.' },
  ],
  economy: [
    { source: '한국경제', time: '1시간 전', title: '코스피 2,680선 돌파…외국인 순매수 지속',         desc: '반도체·2차전지 업종 강세가 지수 상승을 이끌었다.' },
    { source: '매일경제', time: '3시간 전', title: '美 연준, 기준금리 동결…연내 인하 가능성 열어둬', desc: '파월 의장은 인플레이션 둔화 추세를 확인한 뒤 금리 인하를 검토할 것이라고 밝혔다.' },
  ],
  world: [
    { source: 'Reuters', time: '30분 전', title: 'G7 정상회의, AI 규제 공동 선언문 채택',       desc: '7개국은 AI 안전성 기준 마련과 투명성 확보를 위한 공동 프레임워크에 합의했다.' },
    { source: 'BBC',     time: '2시간 전', title: '유럽의회, 탄소국경세 2026년 전면 시행 확정', desc: '철강·시멘트·알루미늄 등 탄소 집약 제품 수입에 탄소 비용이 부과된다.' },
  ],
  sports: [
    { source: '스포츠조선', time: '1시간 전', title: '손흥민, 시즌 15호골 폭발…토트넘 3연승 견인', desc: '손흥민은 후반 78분 결승골을 터뜨리며 팀의 유럽대항전 진출권을 확보했다.' },
  ],
}

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('tech') 
  const news = DUMMY_NEWS[activeTab] || []

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.greeting}>오늘의 뉴스</div>
        <div className={styles.title}>
          좋은 아침이에요,<br /><em>큐레이션 뉴스</em>가 도착했어요
        </div>
      </div>

      <div className={styles.tabs}>
        {TABS.map(tab => (
          <button
            key={tab.value}
            className={`${styles.tab} ${activeTab === tab.value ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.emoji} {tab.name}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {news.length === 0 ? (
          <div className={styles.empty}>
            <span>📭</span>
            <p>아직 뉴스가 없어요</p>
          </div>
        ) : (
          news.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.meta}>
                <span className={styles.source}>{item.source}</span>
                <span className={styles.dot} />
                <span className={styles.time}>{item.time}</span>
              </div>
              <div className={styles.newsTitle}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}