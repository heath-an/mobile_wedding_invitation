// 웨딩 청첩장 설정 파일

export const weddingConfig = {
  // 예식 일시
  schedule: {
    year: 2027,
    month: 5,
    day: 30,
    hour: 14, // 오후 2시는 14시로 표기하거나 2로 적고 아래 displayDate를 활용하세요
    minute: 0,
    displayDate: "2027.05.30 SUN PM 2:00",
  },

  // 예식장 정보
  venue: {
    name: "명동성당 파밀리아 채플",
    hall: "채플홀",
    address: "서울 중구 명동길 74",
    mapUrl: "https://naver.me/GeUR2NxG",
  },

  // 신랑 & 신부 정보
  groom: {
    name: "이정훈",
    fatherName: "이종재",
    motherName: "강봉순",
    account: {
      bank: "신한",
      number: "110-123-456789",
      holder: "이정훈",
    },
  },
  bride: {
    name: "안진희",
    fatherName: "안동수",
    motherName: "조은경",
    account: {
      bank: "카카오뱅크",
      number: "3333-01-1234567",
      holder: "안진희",
    },
  },

  // 갤러리 설정
  gallery: {
    layout: "grid", // "scroll" 또는 "grid"
    position: "bottom", // "middle" 또는 "bottom"
    images: [
      "/images/gallery/image1.jpg",
      "/images/gallery/image2.jpg",
      "/images/gallery/image3.jpg",
      "/images/gallery/감사인사샘플이미지.jpg",
    ],
  },
};
