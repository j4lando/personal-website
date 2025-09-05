export interface PublicationItem {
  id: string;
  type?: string;
  author: string;
  title: string;
  journal?: string;
  booktitle?: string;
  year: string;
  volume?: string;
  number?: string;
  pages?: string;
  doi?: string;
  url?: string;
}

export function loadPublicationsConfig(): PublicationItem[] {
  const configPath = path.join(process.cwd(), 'src', 'data', 'publications.yaml');
  const fileContents = fs.readFileSync(configPath, 'utf8');
  const config = yaml.load(fileContents) as PublicationItem[];
  return config;
}
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface SwipeableItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  imageTitles?: string[];
  icon: string;
  dates?: string | string[] | null;
}

export interface SwipeableConfig {
  title: string;
  backgroundColor: string;
  textColor: string;
  items: SwipeableItem[];
}

export function loadSwipeableConfig(configName: 'projects' | 'outdoors'): SwipeableConfig {
  const configPath = path.join(process.cwd(), 'src', 'data', `${configName}.yaml`);
  const fileContents = fs.readFileSync(configPath, 'utf8');
  const config = yaml.load(fileContents) as SwipeableConfig;
  
  return config;
}
