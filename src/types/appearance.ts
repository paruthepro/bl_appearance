interface HairData { 
    color: number, 
    highlight: number 
}

// interface for head overlay data

interface HeadOverlayData {
    id: string;
    index: number;
    overlayValue?: number;
    colourinterface?: number;
    colourType?: number;
    firstColor?: number;
    secondColor?: number;
    overlayOpacity?: number;
    hairColor?: number
    hairHighlight?: number
    eyeColor?: number
};

// interface for head structure data
interface HeadStructureData {
    name?: string;
    index: number;
    value: number;
};

// interface for drawable data
interface DrawableData extends HeadStructureData {
    texture: number;
    isTexture?: boolean
};

// interface for total drawables and props
interface TotalData {
    id: string;
    index: number;
    total: number;
    textures: number;
};

type PedHandle = number;
type PedModel = number;

interface THeadBlend  {
	skinSecond: number
	skinThird: number
	shapeSecond: number
	shapeThird: number
	shapeFirst: number
	hasParent: boolean
	skinMix: number
	shapeMix: number
	thirdMix: number
	skinFirst: number
}

export {THeadBlend, HairData, PedModel, PedHandle, TotalData, DrawableData, HeadStructureData, HeadOverlayData}