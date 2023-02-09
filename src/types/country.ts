import { RegionType } from 'types/region';

interface Currency {
	code: string;
	name: string;
	symbol: string;
}

interface Language {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
}

export interface Country {
	name: string;
	nativeName: string;
	flag: string;
	flags: {
		png: string;
		svg: string;
	};
	region: RegionType;
	subregion: string;
	capital: string;
	population: number;
	topLevelDomain: string[];
	borders: string[];
	currencies: Currency[];
	languages: Language[];
}

interface Info {
	title: string;
	description: string;
}

export interface CountryInfo {
	img: string;
	name: string;
	info: Info[];
}