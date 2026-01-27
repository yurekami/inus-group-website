export type Locale = "en" | "ko";

// Define the shape of translations
interface Pillar {
  number: string;
  title: string;
  description: string;
}

interface Subsidiary {
  name: string;
  label: string;
  description: string;
  features: string[];
}

interface Feature {
  number: string;
  title: string;
  description: string;
}

export interface Translations {
  nav: {
    about: string;
    subsidiaries: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    titleLine2: string;
    titleHighlight: string;
    description: string;
    pillars: Pillar[];
  };
  subsidiaries: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    learnMore: string;
    companies: Subsidiary[];
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    features: Feature[];
  };
  contact: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      subject: string;
      subjects: {
        general: string;
        logistics: string;
        technology: string;
        finance: string;
        trade: string;
        property: string;
      };
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      validation: {
        nameRequired: string;
        emailRequired: string;
        messageRequired: string;
        fixErrors: string;
      };
    };
    info: {
      title: string;
      southKorea: string;
      usa: string;
      singapore: string;
      offices: {
        hanam: string;
        seoulIfc: string;
        gangnam: string;
        irvine: string;
        raleigh: string;
        singapore: string;
      };
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    ourSubsidiaries: string;
    legal: string;
    links: {
      about: string;
      subsidiaries: string;
      contact: string;
      privacyPolicy: string;
      termsOfService: string;
      cookiePolicy: string;
      sustainabilityReport: string;
      esgCommitment: string;
    };
    copyright: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    // Navigation
    nav: {
      about: "About",
      subsidiaries: "Subsidiaries",
      contact: "Contact",
    },

    // Hero
    hero: {
      eyebrow: "Inus Group",
      title: "Leading the Future",
      titleHighlight: "Integration",
      subtitle:
        "Integrating logistics, finance, technology, and real estate to drive innovation in global markets. We build connections that transcend boundaries.",
      cta: {
        primary: "Explore Our Solutions",
        secondary: "Join Our Vision",
      },
    },

    // About
    about: {
      eyebrow: "About Inus Group",
      title: "Five Industries,",
      titleLine2: "One",
      titleHighlight: "Vision",
      description:
        "Integrating logistics, finance, technology, trade, and real estate to drive innovation in global markets. We create synergies that amplify value across every sector we touch.",
      pillars: [
        {
          number: "01",
          title: "Global Leadership",
          description:
            "With operations spanning across continents, Inus Group leads the logistics industry with innovative solutions and strategic partnerships that connect markets worldwide.",
        },
        {
          number: "02",
          title: "Technological Innovation",
          description:
            "Our AI-driven solutions and blockchain platforms revolutionize logistics, finance, and property management, setting new standards for operational excellence.",
        },
        {
          number: "03",
          title: "Sustainability Commitment",
          description:
            "We prioritize ESG principles across all operations, from eco-friendly logistics to sustainable real estate development, building a better future.",
        },
      ],
    },

    // Subsidiaries
    subsidiaries: {
      eyebrow: "Our Subsidiaries",
      title: "An Ecosystem of",
      titleHighlight: "Excellence",
      description:
        "The Inus Group ecosystem integrates five specialized subsidiaries to deliver comprehensive solutions across industries.",
      learnMore: "Learn more",
      companies: [
        {
          name: "Inus Logistics",
          label: "Logistics",
          description:
            "Pursuing global leadership through logistics platform innovation",
          features: [
            "Global shipping & freight",
            "Smart warehousing",
            "Last-mile delivery",
          ],
        },
        {
          name: "Inus Labs",
          label: "Technology",
          description:
            "Developing future logistics systems through technological innovation",
          features: [
            "AI-based TMS/WMS",
            "Blockchain platforms",
            "Smart logistics tech",
          ],
        },
        {
          name: "Inus Finance",
          label: "Finance",
          description: "Providing logistics and trade financial solutions",
          features: [
            "Supply chain finance",
            "Freight financing",
            "Digital payments",
          ],
        },
        {
          name: "Inus Trade Partners",
          label: "Trade",
          description: "Sustainable global trading solutions",
          features: [
            "International trade",
            "ESG business models",
            "Cross-border e-commerce",
          ],
        },
        {
          name: "Inus Property",
          label: "Real Estate",
          description: "Sustainable premium real estate development",
          features: [
            "Logistics centers",
            "Senior living",
            "Mixed-use development",
          ],
        },
      ],
    },

    // Ecosystem
    ecosystem: {
      eyebrow: "Our Approach",
      title: "Our Integrated",
      titleHighlight: "Ecosystem",
      description:
        "Creating differentiated value through the fusion of logistics, technology, and finance.",
      cta: "Discover our approach",
      features: [
        {
          number: "01",
          title: "End-to-end Solution Integration",
          description:
            "Seamlessly connecting logistics, technology, and finance to deliver complete value chain solutions for our partners and clients.",
        },
        {
          number: "02",
          title: "Cross-industry Expertise",
          description:
            "Leveraging deep knowledge across five sectors to identify synergies and create unprecedented opportunities for growth.",
        },
        {
          number: "03",
          title: "Data-driven Optimization",
          description:
            "Harnessing advanced analytics and AI to continuously improve operations and deliver measurable results at scale.",
        },
      ],
    },

    // Contact
    contact: {
      eyebrow: "Get in Touch",
      title: "Let's Build the",
      titleHighlight: "Future Together",
      description:
        "Discover how Inus Group can transform your business with our integrated solutions.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        company: "Company",
        companyPlaceholder: "Your company",
        subject: "Subject",
        subjects: {
          general: "General Inquiry",
          logistics: "Logistics Solutions",
          technology: "Technology Partnership",
          finance: "Finance Services",
          trade: "Trade Partnership",
          property: "Real Estate",
        },
        message: "Message",
        messagePlaceholder: "How can we help you?",
        submit: "Submit",
        sending: "Sending...",
        success: "Thank you for your message! We'll get back to you soon.",
        error: "Something went wrong. Please try again later.",
        validation: {
          nameRequired: "Name must be at least 2 characters",
          emailRequired: "Please enter a valid email address",
          messageRequired: "Message must be at least 10 characters",
          fixErrors: "Please fix the errors below",
        },
      },
      info: {
        title: "Contact Information",
        southKorea: "South Korea",
        usa: "United States",
        singapore: "Singapore",
        offices: {
          hanam: "Hanam Office",
          seoulIfc: "Seoul IFC",
          gangnam: "Gangnam Office",
          irvine: "Irvine",
          raleigh: "Raleigh",
          singapore: "Singapore",
        },
      },
    },

    // Footer
    footer: {
      tagline:
        "Leading the future through the integration of logistics, technology, finance, trade, and real estate.",
      quickLinks: "Quick Links",
      ourSubsidiaries: "Our Subsidiaries",
      legal: "Legal",
      links: {
        about: "About",
        subsidiaries: "Subsidiaries",
        contact: "Contact",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
        sustainabilityReport: "Sustainability Report",
        esgCommitment: "ESG Commitment",
      },
      copyright: "Inus Group. All rights reserved.",
    },
  },

  ko: {
    // Navigation
    nav: {
      about: "회사소개",
      subsidiaries: "계열사",
      contact: "문의하기",
    },

    // Hero
    hero: {
      eyebrow: "이너스 그룹",
      title: "통합을 통해",
      titleHighlight: "미래를 선도합니다",
      subtitle:
        "물류, 금융, 기술, 부동산을 통합하여 글로벌 시장의 혁신을 주도합니다. 우리는 경계를 초월하는 연결을 구축합니다.",
      cta: {
        primary: "솔루션 살펴보기",
        secondary: "비전에 동참하기",
      },
    },

    // About
    about: {
      eyebrow: "이너스 그룹 소개",
      title: "다섯 개의 산업,",
      titleLine2: "하나의",
      titleHighlight: "비전",
      description:
        "물류, 금융, 기술, 무역, 부동산을 통합하여 글로벌 시장의 혁신을 주도합니다. 우리가 닿는 모든 분야에서 가치를 증폭시키는 시너지를 창출합니다.",
      pillars: [
        {
          number: "01",
          title: "글로벌 리더십",
          description:
            "대륙을 아우르는 운영을 통해 이너스 그룹은 혁신적인 솔루션과 전략적 파트너십으로 전 세계 시장을 연결하며 물류 산업을 선도합니다.",
        },
        {
          number: "02",
          title: "기술 혁신",
          description:
            "AI 기반 솔루션과 블록체인 플랫폼은 물류, 금융, 자산 관리에 혁명을 일으키며 운영 탁월성의 새로운 기준을 세웁니다.",
        },
        {
          number: "03",
          title: "지속가능성 실천",
          description:
            "친환경 물류부터 지속가능한 부동산 개발까지 모든 운영에서 ESG 원칙을 우선시하며 더 나은 미래를 구축합니다.",
        },
      ],
    },

    // Subsidiaries
    subsidiaries: {
      eyebrow: "계열사",
      title: "탁월함의",
      titleHighlight: "생태계",
      description:
        "이너스 그룹 생태계는 산업 전반에 걸쳐 종합적인 솔루션을 제공하기 위해 5개의 전문 계열사를 통합합니다.",
      learnMore: "자세히 보기",
      companies: [
        {
          name: "이너스 로지스틱스",
          label: "물류",
          description: "물류 플랫폼 혁신을 통한 글로벌 리더십 추구",
          features: ["글로벌 해운 & 화물", "스마트 창고", "라스트마일 배송"],
        },
        {
          name: "이너스 랩스",
          label: "기술",
          description: "기술 혁신을 통한 미래 물류 시스템 개발",
          features: [
            "AI 기반 TMS/WMS",
            "블록체인 플랫폼",
            "스마트 물류 기술",
          ],
        },
        {
          name: "이너스 파이낸스",
          label: "금융",
          description: "물류 및 무역 금융 솔루션 제공",
          features: ["공급망 금융", "화물 운송 금융", "디지털 결제"],
        },
        {
          name: "이너스 트레이드 파트너스",
          label: "무역",
          description: "지속가능한 글로벌 무역 솔루션",
          features: ["국제 무역", "ESG 비즈니스 모델", "크로스보더 이커머스"],
        },
        {
          name: "이너스 프로퍼티",
          label: "부동산",
          description: "지속가능한 프리미엄 부동산 개발",
          features: ["물류 센터", "시니어 리빙", "복합 개발"],
        },
      ],
    },

    // Ecosystem
    ecosystem: {
      eyebrow: "우리의 접근 방식",
      title: "통합",
      titleHighlight: "생태계",
      description:
        "물류, 기술, 금융의 융합을 통해 차별화된 가치를 창출합니다.",
      cta: "접근 방식 알아보기",
      features: [
        {
          number: "01",
          title: "엔드투엔드 솔루션 통합",
          description:
            "물류, 기술, 금융을 원활하게 연결하여 파트너와 고객에게 완전한 가치 사슬 솔루션을 제공합니다.",
        },
        {
          number: "02",
          title: "산업 간 전문성",
          description:
            "5개 분야에 걸친 깊은 지식을 활용하여 시너지를 발굴하고 전례 없는 성장 기회를 창출합니다.",
        },
        {
          number: "03",
          title: "데이터 기반 최적화",
          description:
            "고급 분석 및 AI를 활용하여 운영을 지속적으로 개선하고 대규모로 측정 가능한 결과를 제공합니다.",
        },
      ],
    },

    // Contact
    contact: {
      eyebrow: "문의하기",
      title: "함께",
      titleHighlight: "미래를 만들어요",
      description:
        "이너스 그룹의 통합 솔루션이 어떻게 귀사의 비즈니스를 변화시킬 수 있는지 알아보세요.",
      form: {
        name: "이름",
        namePlaceholder: "이름을 입력하세요",
        email: "이메일",
        emailPlaceholder: "example@email.com",
        company: "회사",
        companyPlaceholder: "회사명을 입력하세요",
        subject: "문의 유형",
        subjects: {
          general: "일반 문의",
          logistics: "물류 솔루션",
          technology: "기술 파트너십",
          finance: "금융 서비스",
          trade: "무역 파트너십",
          property: "부동산",
        },
        message: "메시지",
        messagePlaceholder: "무엇을 도와드릴까요?",
        submit: "보내기",
        sending: "전송 중...",
        success: "메시지를 보내주셔서 감사합니다! 곧 연락드리겠습니다.",
        error: "문제가 발생했습니다. 나중에 다시 시도해 주세요.",
        validation: {
          nameRequired: "이름은 2자 이상이어야 합니다",
          emailRequired: "유효한 이메일 주소를 입력해 주세요",
          messageRequired: "메시지는 10자 이상이어야 합니다",
          fixErrors: "아래 오류를 수정해 주세요",
        },
      },
      info: {
        title: "연락처 정보",
        southKorea: "대한민국",
        usa: "미국",
        singapore: "싱가포르",
        offices: {
          hanam: "하남 오피스",
          seoulIfc: "서울 IFC",
          gangnam: "강남 오피스",
          irvine: "어바인",
          raleigh: "롤리",
          singapore: "싱가포르",
        },
      },
    },

    // Footer
    footer: {
      tagline:
        "물류, 기술, 금융, 무역, 부동산의 통합을 통해 미래를 선도합니다.",
      quickLinks: "바로가기",
      ourSubsidiaries: "계열사",
      legal: "법적 고지",
      links: {
        about: "회사소개",
        subsidiaries: "계열사",
        contact: "문의하기",
        privacyPolicy: "개인정보처리방침",
        termsOfService: "이용약관",
        cookiePolicy: "쿠키 정책",
        sustainabilityReport: "지속가능성 보고서",
        esgCommitment: "ESG 실천",
      },
      copyright: "이너스 그룹. All rights reserved.",
    },
  },
};
