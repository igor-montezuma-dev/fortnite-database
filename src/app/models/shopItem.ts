export interface ApiResponse {
  status: number;
  data: Data;
}

export interface Data {
  hash: string;
  date: string;
  vbuckIcon: string;
  entries: ShopItem[];
}

export interface ShopItem {
  regularPrice: number;
  finalPrice: number;
  inDate: string;
  outDate: string;
  giftable: boolean;
  //tracks?: Track[];
  brItems?: BrItem[];
}

export interface OfferTag {
  id: string;
  text: string;
}

export interface BrItem {
  id: string;
  name: string;
  description: string;
  type: {
    value: string;
    displayValue: string;
    backendValue: string;
  };
  rarity: {
    value: string;
    displayValue: string;
    backendValue: string;
  };
  series: {
    value: string;
    colors: string[];
    backendValue: string;
  };
  set: {
    value: string;
    text: string;
    backendValue: string;
  };
  introduction: {
    chapter: string;
    season: string;
    text: string;
    backendValue: number;
  };
  images: {
    smallIcon: string;
    icon: string;
    featured: string;
  };
  showcaseVideo: string;
  dynamicPakId: string;
  added: string;
}

export interface Layout {
  id: string;
  name: string;
  category: string;
  index: number;
  rank: number;
  showIneligibleOffers: string;
  useWidePreview: boolean;
  displayType: string;
}

export interface NewDisplayAsset {
  id: string;
  materialInstances: MaterialInstance[];
}

export interface MaterialInstance {
  id: string;
  primaryMode: string;
  productTag: string;
  images: Images;
  colors: Colors;
}

export interface Images {
  OfferImage: string;
  Background: string;
}

export interface Colors {
  Background_Color_A: string;
  Background_Color_B: string;
}

export interface Track {
  id: string;
  devName: string;
  title: string;
  artist: string;
  releaseYear: number;
  bpm: number;
  duration: number;
  difficulty: Difficulty;
  albumArt: string;
  added: string;
}

export interface Difficulty {
  vocals: number;
  guitar: number;
  bass: number;
  plasticBass: number;
  drums: number;
  plasticDrums: number;
}
