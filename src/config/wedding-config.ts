const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "진희 ❤️ 정훈의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: "/images/ha0h-1fsi-bqt3.jpg",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: "/images/wedding-character-transparent.png",
    date: "2027년 5월 30일 일요일 오후 2시",
    venue: "명동성당 파밀리아 채플"
  },

  // 소개글
  intro: {
    title: "",
    text: "서로를 바라보며 걸어온\n소중한 발걸음이\n이제 하나의 길로 이어집니다.\n\n사랑과 믿음으로\n새 가정을 이루는 저희 두 사람의\n작은 시작을 알려드립니다."
  },

  // 결혼식 일정
  date: {
    year: 2027,
    month: 5,
    day: 30,
    hour: 2,
    minute: 00,
    displayDate: "2027.05.30 SUN PM 2:00",
  },

  // 장소 정보
  venue: {
    name: "명동성당 파밀리아 채플",
    address: "서울 중구 명동길 74\n명동성당 파밀리아 채플",
    tel: "02-774-1784",
    naverMapId: "명동성당파밀리아채플", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 37.5665,
      longitude: 126.9780,
    },
    placeId: "11781308", // 네이버 지도 장소 ID
    mapZoom: "17", // 지도 줌 레벨
    mapNaverCoordinates: "11781308?c=19.33,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    transportation: {
      subway: "2호선 을지로입구역 5번출구\n 4호선 명동역 8번출구",
      bus: "(국가인권위 앞)파랑색(간선) 140, 202, 470, 471, 472, \n 빨강색(광역) 5500, 9401, 9411. \n (롯데백화점 앞) - 노랑색(순환) 02, 초록색(지선) 0014, 0015, 7017, 7021, 파랑색(간선) 103, 143, 149, 151, 152, 162, 163, 261, 262, 401, 406, 500, 501, 701, 702, 708, 빨강색(광역) 9205, 9301, 9400, 9701, 9710. \n (명동역 앞) - 노랑색(순환) 02, 초록색(지선) 0013, 0211, 7011, 파랑색(간선) 104, 105, 263, 507, 604.간선\n 101, 102, 103\n지선\n 1234, 5678",
    },
    parking: "파인애비뉴 빌딩 지하 주차장 (서울시 중구 을지로 100)",
    }
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/image1.jpg",
      "/images/gallery/image2.jpg",
      "/images/gallery/image3.jpg",
      "/images/gallery/image4.jpg",
      "/images/gallery/image5.jpg",
      "/images/gallery/image6.jpg",
      "/images/gallery/image7.jpg",
      "/images/gallery/image8.jpg",
      "/images/gallery/감사인사샘플이미지.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "한 줄기 별빛이 되어 만난 인연\n평생을 함께 걸어가려 합니다.\n\n소중한 분들의 축복 속에\n저희 두 사람이 첫 걸음을 내딛습니다.\n\n귀한 시간 내어 함께해 주신다면\n그 어떤 축복보다 값진 선물이 될 것입니다.",
    groom: {
      name: "이정훈",
      label: "아들",
      father: "이종재",
      mother: "강봉순",
    },
    bride: {
      name: "안진희",
      label: "딸",
      father: "안동수",
      mother: "조은경",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "은행명",
      number: "123-456-789012",
      holder: "이정훈",
    },
    bride: {
      bank: "국민은행",
      number: "987-654-321098",
      holder: "안진희",
    },
    groomFather: {
      bank: "은행명",
      number: "111-222-333444",
      holder: "신랑아버지",
    },
    groomMother: {
      bank: "은행명",
      number: "555-666-777888",
      holder: "신랑어머니",
    },
    brideFather: {
      bank: "은행명",
      number: "999-000-111222",
      holder: "신부아버지",
    },
    brideMother: {
      bank: "은행명",
      number: "333-444-555666",
      holder: "신부어머니",
    }
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding-response",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
}; 
